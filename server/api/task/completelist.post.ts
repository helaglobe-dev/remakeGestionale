import { z } from 'zod'
import { and, eq, inArray, ne, type SQL } from 'drizzle-orm'
import { db, schema } from '../../db'

const Body = z.object({
  project_id: z.coerce.number().int().positive(),
  alsodeleted: z.coerce.number().int().default(0),
  statotask: z.array(z.string()).nullish(),
  users: z.array(z.coerce.number()).nullish(),
  userprofiles: z.array(z.coerce.number()).nullish(),
})

// Righe nel formato originale: { Task, User, Userprofile, Supplier }
export default defineEventHandler(async (event) => {
  const b = await readValid(event, Body)
  const { tasks, users, userprofiles, suppliers } = schema
  const where: SQL[] = [eq(tasks.projectId, b.project_id)]
  if (!b.alsodeleted) where.push(ne(tasks.status, 'D'))
  if (b.statotask?.length) where.push(inArray(tasks.status, b.statotask as any))
  if (b.users?.length) where.push(inArray(tasks.userId, b.users))
  if (b.userprofiles?.length) where.push(inArray(tasks.userprofileId, b.userprofiles))

  const rows = await db
    .select({
      t: tasks, u: users, up: userprofiles, s: suppliers,
      ...TASK_CALC,
    })
    .from(tasks)
    .leftJoin(users, eq(tasks.userId, users.id))
    .leftJoin(userprofiles, eq(tasks.userprofileId, userprofiles.id))
    .leftJoin(suppliers, eq(tasks.supplierId, suppliers.id))
    .where(and(...where))
    .orderBy(tasks.ordering, tasks.id)

  return ok(rows.map(({ t, u, up, s, ...calc }) => ({
    Task: serializeTask(t, calc),
    User: { id: u?.id ?? 0, name: u ? `${u.firstname} ${u.lastname}` : '' },
    Userprofile: { id: up?.id ?? 0, name: up?.profilename ?? '' },
    Supplier: { id: s?.id ?? 0, name: s?.name ?? '' },
  })))
})
