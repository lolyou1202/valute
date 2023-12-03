import { IValute } from "../types/valute"

export const useValuteNameArray = (sortedValuteArray: IValute[]) => {
	return sortedValuteArray.map(item => ({
		ID: item.ID,
		Name: item.Name,
	}))
}
