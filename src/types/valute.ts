export interface IValute {
	ID: string
	NumCode: string
	CharCode: string
	Nominal: number
	Name: string
	Value: number
	Previous: number
	Current?: boolean
	Favorite?: boolean
}

export interface IValuteScheme<T> {
	Date: string
	PreviousDate: string
	PreviousURL: string
	Timestamp: string
	Valute: T
}