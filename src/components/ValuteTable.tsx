import { FC } from "react"
import Table from "@mui/material/Table"
import { IValute } from "../types/valute"
import { ValuteTableHead } from "./ValuteTableHead"
import { ValuteTableBody } from "./ValuteTableBody"

interface IValuteTable {
	currentValute: IValute | null
	valuteArray: IValute[]
	onClickFavoriteCell: (ID: string) => void
}

export const ValuteTable: FC<IValuteTable> = ({
	currentValute,
	valuteArray,
	onClickFavoriteCell,
}) => {
	return (
		<Table sx={{ minWidth: 650 }} aria-label='simple table'>
			<ValuteTableHead />
			<ValuteTableBody
				currentValute={currentValute}
				valuteArray={valuteArray}
				onClickFavoriteCell={onClickFavoriteCell}
			/>
		</Table>
	)
}
