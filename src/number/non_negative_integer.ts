// Load npm modules.
import * as Joi from 'joi'

/**
 * A validation schema for non negative integer number values.
 */
export const validationSchema = Joi.number().integer().positive().allow(0) // TODO: Add a maximum number.
