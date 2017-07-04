// Load npm modules.
import * as Joi from 'joi'

/**
 * A reg exp that matches all invalid characters in an any string value.
 */
export const invalidCharactersRegExp = /[^a-z0-9_\-]/g

/**
 * Convert a string value to a token string value.
 * @param value A string value to be converted.
 */
export const fromString = (value: string) => {
	return value.toLowerCase().replace(invalidCharactersRegExp, '_')
}

/**
 * A validation schema for token string values.
 */
export const validationSchema = Joi.string().regex(/^[a-z0-9_\-]+$/, 'TokenString').max(256)