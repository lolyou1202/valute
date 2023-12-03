import { FC } from "react"
import { TableRow, TableCell } from "@mui/material"
import { IValute } from "../types/valute"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import StarIcon from "@mui/icons-material/Star"

interface IValuteTableRow {
	row: IValute
	currentValute: IValute
	onClickFavoriteCell: (ID: string) => void
}

export const ValuteTableRow: FC<IValuteTableRow> = ({
	row,
	currentValute,
	onClickFavoriteCell,
}) => {
	const iconForFavoriteAttribute = (favorite: boolean) =>
		favorite ? (
			<StarIcon
				sx={{
					fontSize: 24,
					cursor: "pointer",
				}}
			/>
		) : (
			<StarBorderIcon
				sx={{
					fontSize: 24,
					cursor: "pointer",
				}}
			/>
		)

	const handlerClickFavoriteCell = (ID: string) => {
		onClickFavoriteCell(ID)
	}

	return (
		<TableRow
			key={row.ID}
			sx={{
				"&:last-child td, &:last-child th": {
					border: 0,
				},
			}}>
			<TableCell
				component='th'
				scope='row'
				onClick={() => handlerClickFavoriteCell(row.ID)}>
				{iconForFavoriteAttribute(row.Favorite!)}
			</TableCell>
			<TableCell align='left'>{row.Name}</TableCell>
			<TableCell align='left'>{row.Nominal}</TableCell>
			<TableCell align='left'>{row.CharCode}</TableCell>
			<TableCell align='left'>
				{(row.Value / currentValute.Value).toFixed(4)}
			</TableCell>
		</TableRow>
	)
}
