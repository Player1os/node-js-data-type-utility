// Load npm modules.
import * as Joi from 'joi'

/**
 * A validation schema for label string values.
 */
export const validationSchema = Joi.string().max(256)
