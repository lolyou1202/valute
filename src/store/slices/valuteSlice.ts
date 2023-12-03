import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { useDelay } from "../../hooks/useDelay"
import { IValute, IValuteScheme } from "../../types/valute"

const initialState: {
	valuteData: IValuteScheme<IValute[]> | null
	loading: boolean
	error: unknown
} = {
	valuteData: null,
	loading: false,
	error: null,
}

export const getValute = createAsyncThunk("valute/getValute", async () => {
	await useDelay(1000)
	const response = await axios.get<
		IValuteScheme<{ [keyValute: string]: IValute }>
	>("https://www.cbr-xml-daily.ru/daily_json.js")
	return response.data
})

export const valuteSlice = createSlice({
	name: "valute",
	initialState,
	reducers: {
		setCurrentValute: (state, { payload }: PayloadAction<string>) => {
			state.valuteData?.Valute.map(valute =>
				payload === valute.ID
					? (valute.Current = true)
					: (valute.Current = false)
			)
		},
		setFavoriteValute: (state, { payload }: PayloadAction<string>) => {
			state.valuteData?.Valute.map(
				valute =>
					payload === valute.ID &&
					(valute.Favorite = !valute.Favorite)
			)
		},
		setFavoritesFromLS: (state, { payload }: PayloadAction<string[]>) => {
			state.valuteData?.Valute.map(
				valute =>
					payload.includes(valute.ID) && (valute.Favorite = true)
			)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getValute.pending, state => {
				state.loading = true
			})
			.addCase(getValute.fulfilled, (state, { payload }) => {
				console.log(payload)
				const dataLS: string[] = JSON.parse(
					localStorage.getItem("favoriteValute") || "[]"
				)

				let updateValute: IValute[] = []

				for (let key in payload.Valute) {
					updateValute.push({
						...payload.Valute[key],
						Current: false,
						Favorite: dataLS.includes(payload.Valute[key].ID),
					})
				}

				state.valuteData = { ...payload, Valute: updateValute }
				state.loading = false
			})
			.addCase(getValute.rejected, (state, { payload }) => {
				state.error = payload
				state.loading = false
			})
	},
})

export const { setCurrentValute, setFavoriteValute, setFavoritesFromLS } =
	valuteSlice.actions

export const valuteReducer = valuteSlice.reducer
