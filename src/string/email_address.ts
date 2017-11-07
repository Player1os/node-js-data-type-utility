// Load npm modules.
import * as Joi from 'joi'

// TODO: Verify if this matches the legacy reg exp.
// const regExp = new RegExp(
// 	'^'
// 	+ "[-a-z0-9~!$%^&*_=+}{\\'?]+(\\.[-a-z0-9~!$%^&*_=+}{\\'?]+)*"
// 	+ '@'
// 	+ '([a-z0-9_][-a-z0-9_]*(\\.[-a-z0-9_]+)*'
// 	+ '\\.'
// 	+ '(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])'
// 	+ '|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,5})?'
// 	+ '$',
// 	'i',
// )

/**
 * A validation schema for email address string values.
 */
export const validationSchema = Joi.string().email().max(256)
