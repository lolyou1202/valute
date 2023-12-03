import { TableHead, TableRow, TableCell } from "@mui/material"

const TABLE_HEAD_NAMES = [
	"Избранное",
	"Валюта",
	"Номинал",
	"Буквенный код",
	"Курс",
]

export const ValuteTableHead = () => {
	return (
		<TableHead>
			<TableRow>
				{TABLE_HEAD_NAMES.map(tableCellName => (
					<TableCell align='left' key={tableCellName}>
						{tableCellName}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}
