import type { Expense } from '@/models/Expense'
import type { Log } from '@/models/Log'
import type { Setting } from '@/models/Setting'
import { z } from 'zod'

export enum InternalTable {
  SETTINGS = 'settings',
  LOGS = 'logs',
}

export enum InternalField {
  // Setting
  KEY = 'key',
  VALUE = 'value',

  // Log
  AUTO_ID = 'autoId',
  TIMESTAMP = 'timestamp',
  LOG_LEVEL = 'logLevel',
  LABEL = 'label',
  DETAILS = 'details',
  ERROR_MESSAGE = 'errorMessage',
  STACK_TRACE = 'stackTrace',
}

/**
 * First table must be a Parent table for UI store dashboard selection default
 */
export enum DBTable {
  EXPENSES = 'expenses',
}

export const tableSchema = z.nativeEnum(DBTable)

export enum DBField {
  // Expense
  ID = 'id',
  CREATED_TIMESTAMP = 'createdTimestamp',
  CATEGORY = 'category',
  DESC = 'desc',
  AMOUNT = 'amount',
}

export type AnyDBRecord = { [key in DBField | InternalField]?: any }

export type BackupData = {
  appName: string
  databaseVersion: number
  [DBField.CREATED_TIMESTAMP]: number
  [InternalTable.SETTINGS]: Setting[]
  [InternalTable.LOGS]: Log[]
  [DBTable.EXPENSES]: Expense[]
}

export type InspectionItem = {
  field: keyof AnyDBRecord
  label: string
  output: 'single' | 'list' | 'key-values'
  format: (val: any) => any
}
