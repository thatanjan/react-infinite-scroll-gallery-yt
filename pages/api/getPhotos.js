import { createClient } from 'pexels'

const client = createClient(process.env.API_KEY)

const handler = async (req, res) => {
	const {
		method,
		query: { query, page },
	} = req

	if (method !== 'GET') return res.status(405).send('Method not allowed')

	if (!query || !page) return res.status(400).send('Bad request')

	const result = await client.photos.search({ query, page })

	const photos = result.photos.map((photo) => photo.src.large)

	return res.send(photos)
}

export default handler
