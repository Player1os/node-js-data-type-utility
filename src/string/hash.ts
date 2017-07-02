// Load npm modules.
import * as Joi from 'joi'

// Load npm modules.
import * as crypto from 'crypto-js'

// Store a reference the the sha256 submodule.
const sha256 = crypto.SHA256

/**
 * Generate a hash from the given string value.
 * @param value A string value to be hashed.
 */
export const fromString = (value: string) => {
	return sha256(value).toString()
}

/**
 * A validation schema for hash string values.
 */
export const validationSchema = Joi.string().hex().length(64)
