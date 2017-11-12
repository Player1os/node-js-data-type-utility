/**
 * A string that can be used in a regexp for matching invalid token characters.
 */
export const invalidCharacterRegExpString = '[^a-z0-9\\-]'

/**
 * A reg exp that matches all invalid characters in an any string value.
 */
export const invalidCharactersRegExp = new RegExp(invalidCharacterRegExpString, 'g')

/**
 * Convert a string value to a token string value.
 * @param value A string value to be converted.
 */
export const fromString = (value: string) => {
	return value.toLowerCase().replace(invalidCharactersRegExp, '-')
}
