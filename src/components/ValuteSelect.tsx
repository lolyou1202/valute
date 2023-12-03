import { FC } from "react"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormHelperText from "@mui/material/FormHelperText"
import { IValute } from "../types/valute"

interface IValuteSelect {
	selectData: { ID: string; Name: string }[]
	currentValute: IValute | null
	onChangeSelect: (value: string) => void
}

export const ValuteSelect: FC<IValuteSelect> = ({
	selectData,
	currentValute,
	onChangeSelect,
}) => {
	const handlerChangeSelect = (event: SelectChangeEvent) => {
		onChangeSelect(event.target.value)
	}

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id='simple-select-helper-label'>
				Базовая валюта
			</InputLabel>
			<Select
				labelId='simple-select-helper-label'
				id='simple-select-helper'
				value={currentValute ? currentValute.ID : ""}
				label='Базовая валюта'
				autoWidth
				onChange={handlerChangeSelect}>
				<MenuItem value=''>
					<em>-</em>
				</MenuItem>
				{selectData?.map(({ ID, Name }) => (
					<MenuItem key={ID} value={ID}>
						{Name}
					</MenuItem>
				))}
			</Select>
			<FormHelperText>Выберите базовую валюту</FormHelperText>
		</FormControl>
	)
}
