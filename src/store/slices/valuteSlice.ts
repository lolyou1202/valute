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

const initialState: IValuteScheme | null = {
	Date: "",
	PreviousDate: "",
	PreviousURL: "",
	Timestamp: "",
	Valute: {
		AUD: {
			ID: "",
			NumCode: "",
			CharCode: "",
			Nominal: 1,
			Name: "",
			Value: 58.6865,
			Previous: 58.3232,
		},
		AZN: {
			ID: "R01020A",
			NumCode: "944",
			CharCode: "AZN",
			Nominal: 1,
			Name: "Азербайджанский манат",
			Value: 52.1236,
			Previous: 52.1791,
		},
	},
}

export const getValute = createAsyncThunk("valute/getValute", async () => {
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
		builder.addCase(getValute.fulfilled, (state, { payload }) => {
			state = payload
			console.log(payload)
		})
	},
})

export const {} = valuteSlice.actions

export const valuteReducer = valuteSlice.reducer
