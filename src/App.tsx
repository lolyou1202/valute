import { useEffect } from "react"
import {
	getValute,
	setCurrentValute,
	setFavoriteValute,
} from "./store/slices/valuteSlice"
import { useAppDispatch, useAppSelector } from "./store/reduxHooks"
import { ValuteSelect } from "./components/ValuteSelect"
import CircularProgress from "@mui/material/CircularProgress"
import Backdrop from "@mui/material/Backdrop"
import { useCurrentValute } from "./hooks/useCurrentValute"
import { ValuteTable } from "./components/ValuteTable"
import { useSortByFavorites } from "./hooks/useSortByFavorites"
import { useValuteNameArray } from "./hooks/useValuteNameArray"
import { Typography } from "@mui/material"
import { useGetDate } from "./hooks/useGetDate"

function App() {
	const { valuteData, loading } = useAppSelector(store => store.valute)

	const dispatch = useAppDispatch()
	const currentValute = useCurrentValute()
	const sortedValuteArray = useSortByFavorites()
	const valuteNameArray = useValuteNameArray(sortedValuteArray)

	const getDate = useGetDate({
		rateDate: valuteData?.Date,
		rateTimestamp: valuteData?.Timestamp,
	})

	const onChangeSelect = (value: string) => {
		dispatch(setCurrentValute(value))
	}

	const onClickFavoriteCell = (ID: string) => {
		dispatch(setFavoriteValute(ID))
	}

	useEffect(() => {
		dispatch(getValute())
	}, [dispatch])

	return (
		<div className='App'>
			<Backdrop
				sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
				open={loading}>
				<CircularProgress color='inherit' />
			</Backdrop>
			<ValuteSelect
				currentValute={currentValute}
				selectData={valuteNameArray}
				onChangeSelect={onChangeSelect}
			/>
			<Typography variant='h5'>
				Курсы валют ЦБ РФ на {getDate.dateString}
			</Typography>
			<Typography variant='body1'>
				Последнее обновление базы данных: {getDate.timestampString}
			</Typography>
			<ValuteTable
				currentValute={currentValute}
				valuteArray={sortedValuteArray}
				onClickFavoriteCell={onClickFavoriteCell}
			/>
		</div>
	)
}

export default App
