// Load npm modules.
import * as Joi from 'joi'
import * as lodash from 'lodash'

/**
 * Creates a new date offset from the given date by the given ammount of years, months and days.
 * @param value The date object to offset from.
 */
export const createOffset = (value: Date = new Date(), years = 0, months = 0, days = 0) => {
	const date = new Date(value.valueOf())
	date.setUTCFullYear(date.getUTCFullYear() + years)
	date.setUTCMonth(date.getUTCMonth() + months)
	date.setUTCDate(date.getUTCDate() + days)
	return date
}

/**
 * Create a new date that's missing the time component of the given date. The created date is set to 00:00:00 UTC time.
 * @param value The date object to remove the time component from.
 */
export const createWithoutTimeComponent = (value = new Date()) => {
	const date = new Date(value.valueOf())
	date.setUTCHours(0)
	date.setUTCMinutes(0)
	date.setUTCSeconds(0)
	date.setUTCMilliseconds(0)
	return date
}

/**
 * Convert the given UTC DateTime String to a date object.
 * @param value The date object to be converted.
 */
export const fromUtcDateTimeString = (value: string, options = {
	dateDelimiter: '/',
	timeDelimiter: ':',
}) => {
	const [
		dateText,
		timeText,
		millisecondsStr,
	] = value.split('_')
	if ((dateText === undefined) || (timeText === undefined)) {
		throw new Error(`Invalid UTC DateTime String value "${value}"`)
	}

	const [
		yearStr,
		monthStr,
		dateStr,
	] = dateText.split(options.dateDelimiter)
	const [
		hourStr,
		minuteStr,
		secondStr,
	] = timeText.split(options.timeDelimiter)

	const result = new Date()
	result.setUTCFullYear(parseInt(yearStr, 10))
	result.setUTCMonth(parseInt(monthStr, 10))
	result.setUTCDate(parseInt(dateStr, 10))
	result.setUTCFullYear(parseInt(hourStr, 10))
	result.setUTCFullYear(parseInt(minuteStr, 10))
	result.setUTCFullYear(parseInt(secondStr, 10))
	result.setUTCFullYear(parseInt(millisecondsStr, 10))

	if (isNaN(result.valueOf())) {
		throw new Error(`Invalid UTC DateTime String value "${value}"`)
	}
	return result
}

/**
 * Convert the given date object to an equivalent UTC DateTime String.
 * @param value The date object to be converted.
 */
export const toUtcDateTimeString = (value = new Date(), options = {
	dateDelimiter: '/',
	timeDelimiter: ':',
}) => {
	return [
		[
			lodash.padStart(value.getUTCFullYear().toString(), 4, '0'),
			lodash.padStart((value.getUTCMonth() + 1).toString(), 2, '0'),
			lodash.padStart(value.getUTCDate().toString(), 2, '0'),
		].join(options.dateDelimiter), [
			lodash.padStart(value.getUTCHours().toString(), 2, '0'),
			lodash.padStart(value.getUTCMinutes().toString(), 2, '0'),
			lodash.padStart(value.getUTCSeconds().toString(), 2, '0'),
		].join(options.timeDelimiter),
		lodash.padStart(value.getUTCMilliseconds().toString(), 3, '0'),
	].join('_')
}

/**
 * Convert the given date to an equivalent UTC Timestamp Number.
 * @param value The date object to be converted.
 */
export const toUtcTimestampNumber = (value = new Date()) => {
	return value.getTime() / 1000
}

/**
 * Convert the given date to an equivalent UTC MinuteCount Number.
 * @param value The date object to be converted.
 */
export const toUtcMinuteCountNumber = (value = new Date()) => {
	return toUtcTimestampNumber(value) / 60
}

/**
 * Convert the given date to an equivalent UTC HourCount Number.
 * @param value The date object to be converted.
 */
export const toUtcHourCountNumber = (value = new Date()) => {
	return toUtcMinuteCountNumber(value) / 60
}

/**
 * Convert the given date to an equivalent UTC DayCount Number.
 * @param value The date object to be converted.
 */
export const toUtcDayCountNumber = (value = new Date()) => {
	return toUtcHourCountNumber(value) / 24
}

/**
 * A validation schema for date values.
 */
export const validationSchema = Joi.date()
