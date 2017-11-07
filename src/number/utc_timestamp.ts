// Load npm modules.
import * as Joi from 'joi'

/**
 * A validation schema for utc timestamp number values.
 */
export const validationSchema = Joi.number().positive().allow(0) // TODO: Add a maximum number.

export const toDate = (value: number) => {
	return new Date(value * 1000)
}
