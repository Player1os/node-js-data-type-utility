// Load local modules.
import * as stringDataType from '.../src/string'

// Load npm modules.
import * as Joi from 'joi'

/**
 * A validation schema for description string values.
 */
export const validationSchema = stringDataType.validationSchema.max(4096) as Joi.StringSchema
