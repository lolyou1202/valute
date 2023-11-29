import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

interface IValute {
	ID: string
	NumCode: string
	CharCode: string
	Nominal: number
	Name: string
	Value: number
	Previous: number
}

interface IValuteScheme {
	Date: string
	PreviousDate: string
	PreviousURL: string
	Timestamp: string
	Valute: {
		[keyValute: string]: IValute
	}
}

const initialState: {
	entities: IValuteScheme | null
	loading: boolean
	error: unknown
} = {
	entities: null,
	loading: false,
	error: null,
}

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export const getValute = createAsyncThunk("valute/getValute", async () => {
	await delay(2000)
	const response = await axios.get<IValuteScheme>(
		"https://www.cbr-xml-daily.ru/daily_json.js"
	)

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
				//setTimeout(() => {
				//	state.entities = payload
				//	state.loading = false
				//}, 1000)
				state.entities = payload
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
