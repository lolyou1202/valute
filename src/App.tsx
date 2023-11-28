import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useEffect, useState } from "react"
import { getValute } from "./store/slices/valuteSlice"
import { useAppDispatch } from "./store/reduxHooks"

function App() {
	const [age, setAge] = useState("")

	const dispatch = useAppDispatch()

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value)
	}

	useEffect(() => {
		dispatch(getValute())
	}, [dispatch]);
	

	return (
		<div className='App'>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id='demo-simple-select-helper-label'>
					Базовая валюта
				</InputLabel>
				<Select
					labelId='demo-simple-select-helper-label'
					id='demo-simple-select-helper'
					value={age}
					label='Базовая валюта'
					autoWidth
					onChange={handleChange}>
					<MenuItem value=''>
						<em>-</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
				<FormHelperText>Выберите базовую валюту</FormHelperText>
			</FormControl>
		</div>
	)
}

export default App
