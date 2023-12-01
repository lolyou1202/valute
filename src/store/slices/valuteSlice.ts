import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export interface IValute {
	ID: string
	NumCode: string
	CharCode: string
	Nominal: number
	Name: string
	Value: number
	Previous: number
}

export interface IValuteScheme<T> {
	Date: string
	PreviousDate: string
	PreviousURL: string
	Timestamp: string
	Valute: T
}

const initialState: {
	entities: IValuteScheme<IValute[]> | null
	loading: boolean
	error: unknown
} = {
	entities: null,
	loading: false,
	error: null,
}

const delay = (ms: number) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export const getValute = createAsyncThunk("valute/getValute", async () => {
	await delay(2000)
	const response = await axios.get<
		IValuteScheme<{ [keyValute: string]: IValute }>
	>("https://www.cbr-xml-daily.ru/daily_json.js")

	return response.data
})

export const valuteSlice = createSlice({
	name: "valute",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getValute.pending, state => {
				state.loading = true
			})
			.addCase(getValute.fulfilled, (state, { payload }) => {
				const updateValuteScheme = Object.values(payload.Valute)
				state.entities = { ...payload, Valute: updateValuteScheme }
				state.loading = false
			})
			.addCase(getValute.rejected, (state, { payload }) => {
				state.error = payload
				state.loading = false
			})
	},
})

export const {} = valuteSlice.actions

export const valuteReducer = valuteSlice.reducer
