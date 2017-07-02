// Load npm modules.
import * as Joi from 'joi'

/**
 * The maximum value for an integer primary key value.
 */
export const maxValue = (1 << 30) * 2 - 1 // tslint:disable-line:no-bitwise

/**
 * A validation schema for integer primary key values.
 */
export const validationSchema = Joi.number().integer().positive().max(maxValue)
