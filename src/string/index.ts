// Load npm modules.
import * as Joi from 'joi'

/**
 * A validation schema for string values.
 */
export const validationSchema = Joi.string().allow('')
