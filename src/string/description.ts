// Load app modules.
import * as stringDataType from '.../src/string'

// Load npm modules.
import * as Joi from 'joi'

/**
 * A validation schema for description string values.
 */
export const validationSchema = stringDataType.validationSchema.max(512) as Joi.StringSchema
