// Load local modules.
import * as labelStringDataType from '.../src/string/label'

// Load npm modules.
import * as Joi from 'joi'

/**
 * A validation schema for label string value object values.
 */
export const validationSchema = Joi.object().pattern(/^.+$/, labelStringDataType.validationSchema)
