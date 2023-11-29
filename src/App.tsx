import { useEffect, useState } from "react"
import { getValute } from "./store/slices/valuteSlice"
import { useAppDispatch, useAppSelector } from "./store/reduxHooks"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import TableBody from "@mui/material/TableBody"
//import { ValuteSelect } from "./components/valuteSelect"
import CircularProgress from "@mui/material/CircularProgress"

function App() {
	const dispatch = useAppDispatch()
	const data = useAppSelector(store => store.valute)

	//const keys = Object.keys(data)
	//console.log(keys)

	useEffect(() => {
		dispatch(getValute())
	}, [dispatch])

	return (
		<div className='App'>
			{data.loading && <CircularProgress />}
			{/*<ValuteSelect/>*/}
			{/*<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Dessert (100g serving)</TableCell>
						<TableCell align='right'>Calories</TableCell>
						<TableCell align='right'>Fat&nbsp;(g)</TableCell>
						<TableCell align='right'>Carbs&nbsp;(g)</TableCell>
						<TableCell align='right'>Protein&nbsp;(g)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow
							key={row.name}
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0,
								},
							}}>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell align='right'>{row.calories}</TableCell>
							<TableCell align='right'>{row.fat}</TableCell>
							<TableCell align='right'>{row.carbs}</TableCell>
							<TableCell align='right'>{row.protein}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>*/}
		</div>
	)
}

export default App
