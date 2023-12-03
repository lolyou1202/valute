import { useAppSelector } from "../store/reduxHooks"
import { IValute } from "../types/valute"

export const useCurrentValute: () => IValute | null = () => {
	const { valuteData } = useAppSelector(store => store.valute)

	return valuteData?.Valute.find(valute => valute.Current === true)!
}
