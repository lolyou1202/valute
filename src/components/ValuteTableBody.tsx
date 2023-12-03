import { FC, useCallback } from "react"
import { TableBody } from "@mui/material"

import { IValute } from "../types/valute"
import { ValuteTableRow } from "./ValuteTableRow"

interface IValuteTableBody {
	currentValute: IValute | null
	valuteArray: IValute[]
	onClickFavoriteCell: (ID: string) => void
}

export const ValuteTableBody: FC<IValuteTableBody> = ({
	currentValute,
	valuteArray,
	onClickFavoriteCell,
}) => {
	const rowIsCurrentValute = useCallback(
		(ID: string) => currentValute?.ID !== ID,
		[currentValute?.ID]
	)

	return (
		<TableBody>
			{currentValute &&
				valuteArray.map(
					row =>
						rowIsCurrentValute(row.ID) && (
							<ValuteTableRow
								key={row.ID}
								row={row}
								currentValute={currentValute}
								onClickFavoriteCell={onClickFavoriteCell}
							/>
						)
				)}
		</TableBody>
	)
}
