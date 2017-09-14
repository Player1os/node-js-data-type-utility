// Load npm modules.
import * as lodash from 'lodash'

/**
 * Declare the value type for a string value object.
 */
export type Type = {
	[key: string]: string | string[],
}

/**
 * A function that retrieves the value of the given key for the submitted strings value object.
 * If no value is set for the given key, undefined is returned.
 * @param value A string value object to be searched.
 * @param key A key to be found in the previous parameter.
 */
export const getSingleValue = (value: Type, key: string) => {
	// Verify that the key is set.
	if (!(key in value)) {
		return undefined
	}

	// Return the value itself or its first element if it is an array.
	const result = value[key]
	return lodash.isArray(result)
		? lodash.first(result)
		: result
}
