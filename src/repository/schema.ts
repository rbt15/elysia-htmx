import { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('user', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull()
})

export type User = InferSelectModel<typeof users>
export type UserInsert = InferInsertModel<typeof users>
