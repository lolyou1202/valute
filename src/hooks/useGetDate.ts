import moment from "moment"

export const useGetDate = ({
	rateDate,
	rateTimestamp,
}: {
	rateDate: string | undefined
	rateTimestamp: string | undefined
}) => {
	if (!rateDate && !rateTimestamp) {
		return { dateString: "...", timestampString: "..." }
	}

	const dateString = moment(rateDate).format("DD.MM.YYYY")
	const timestampString = moment(rateTimestamp).format("DD.MM.YYYY, HH:mm:ss")

	return { dateString, timestampString }
}
