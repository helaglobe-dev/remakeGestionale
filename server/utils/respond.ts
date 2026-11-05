import type { H3Event } from 'h3'
import { z } from 'zod'

// Stesso formato dell'API originale: { success: true, data } / { errors: { title } }
export const ok = <T>(data: T) => ({ success: true as const, data })

export function fail(statusCode: number, title: string): never {
  throw createError({ statusCode, statusMessage: title, data: { errors: { title } } })
}

export async function readValid<T extends z.ZodType>(event: H3Event, schema: T): Promise<z.infer<T>> {
  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    const issue = parsed.error.issues[0]
    fail(422, `Dati non validi: ${issue?.path.join('.') || 'body'} ${issue?.message ?? ''}`.trim())
  }
  return parsed.data
}

export function idParam(event: H3Event): number {
  const id = Number(getRouterParam(event, 'id'))
  if (!Number.isInteger(id) || id <= 0) fail(400, 'ID non valido')
  return id
}
