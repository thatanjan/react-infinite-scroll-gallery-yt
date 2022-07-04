import axios from 'axios'

import { getQuery } from './cookies'

const searchImages = async ({ setPage, setHasMore, page = 1 }) => {
	const query = getQuery()

	if (!query) return []

	const { data } = await axios.get('/api/getPhotos', {
		params: {
			query,
			page,
		},
	})

	setPage((prev) => prev + 1)

	if (data.length < 15) {
		setHasMore(false)
	} else {
		setHasMore(true)
	}

	return data
}

export default searchImages
