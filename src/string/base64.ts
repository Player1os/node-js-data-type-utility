export const encode = (value: string) => {
	return new Buffer(value).toString('base64')
}

export const decode = (value: string) => {
	return new Buffer(value, 'base64').toString()
}
