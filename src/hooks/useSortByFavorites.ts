import { useAppSelector } from "../store/reduxHooks"

export const useSortByFavorites = () => {
	const { valuteData } = useAppSelector(store => store.valute)

	if (!valuteData) {
		return []
	}

	return [...valuteData.Valute].sort((valute_1, valute_2) => {
		return Number(valute_2.Favorite) - Number(valute_1.Favorite)
	})
}
