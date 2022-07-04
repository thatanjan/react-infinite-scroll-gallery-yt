import React, { useState } from 'react'
import { Heading, Box, Flex, Spinner } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'

import SearchForm from '../components/SearchForm'
import Images from '../components/Images'

import searchImages from '../utils/searchImages'

const Loader = () => (
	<Flex justifyContent='center' py='2rem'>
		<Spinner size='xl' />
	</Flex>
)

const fetchNextImages =
	({ page, setImages, setPage, setHasMore }) =>
	async () => {
		const images = await searchImages({
			setPage,
			page,
			setHasMore,
		})

		setImages((prev) => prev.concat(images))
	}

const Home = () => {
	const [images, setImages] = useState([])

	const [hasMore, setHasMore] = useState(false)
	const [page, setPage] = useState(1)

	const searchFormProps = {
		setImages,
		setPage,
		setHasMore,
	}

	return (
		<Box w='90%' m='0 auto'>
			<Heading align='center' py='10' fontSize='5xl'>
				Pixels
			</Heading>

			<SearchForm {...searchFormProps} />

			<InfiniteScroll
				next={fetchNextImages({
					page,
					setImages,
					setPage,
					setHasMore,
				})}
				dataLength={images.length}
				hasMore={hasMore}
				loader={<Loader />}
			>
				<Images images={images} />
			</InfiniteScroll>
		</Box>
	)
}

export default Home
