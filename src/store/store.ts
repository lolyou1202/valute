import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { valuteReducer } from "./slices/valuteSlice"

export const store = configureStore({
	reducer: {
		valute: valuteReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
