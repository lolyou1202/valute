import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { FC, useState } from "react"

interface IValuteSelect {
	selectData: []
}

export const ValuteSelect: FC<IValuteSelect> = ({ selectData }) => {
	const [valute, setValute] = useState("")

	const handleChange = (event: SelectChangeEvent) => {
		setValute(event.target.value)
	}

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id='simple-select-helper-label'>
				Базовая валюта
			</InputLabel>
			<Select
				labelId='simple-select-helper-label'
				id='simple-select-helper'
				value={valute}
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
	)
}
