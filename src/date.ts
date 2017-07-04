// Load npm modules.
import * as Joi from 'joi'
import * as lodash from 'lodash'

/**
 * Creates a new date offset from the given date by the given ammount of years, months and days.
 * @param value The date object to offset from.
 */
export const createOffset = (value: Date, years = 0, months = 0, days = 0) => {
	return new Date(
		value.getUTCFullYear() + years,
		value.getUTCMonth() + months,
		value.getUTCDate() + days,
	)
}

/**
 * Create a new date that's missing the time component of the given date. The created date is set to 00:00:00 UTC time.
 * @param value The date object to remove the time component from.
 */
export const createWithoutTimeComponent = (value: Date = new Date()) => {
	return new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate())
}

/**
 * Convert the given date to an equivalent UTC DateTime String.
 * @param value The date object to be converted.
 */
export const toUtcDateTimeString = (value: Date = new Date()) => {
	return [
		[
			lodash.padStart(value.getUTCFullYear().toString(), 4, '0'),
			lodash.padStart((value.getUTCMonth() + 1).toString(), 2, '0'),
			lodash.padStart(value.getUTCDate().toString(), 2, '0'),
		].join('/'), [
			lodash.padStart(value.getUTCHours().toString(), 2, '0'),
			lodash.padStart(value.getUTCMinutes().toString(), 2, '0'),
			lodash.padStart(value.getUTCSeconds().toString(), 2, '0'),
		].join(':'),
		lodash.padStart(value.getUTCMilliseconds().toString(), 3, '0'),
	].join('_')
}

/**
 * Convert the given date to an equivalent UTC Timestamp Number.
 * @param value The date object to be converted.
 */
export const toUtcTimestampNumber = (value: Date = new Date()) => {
	return value.getTime() / 1000
}

/**
 * A validation schema for date values.
 */
export const validationSchema = Joi.date()