import React from 'react'
import { FormControl, Input, Button } from '@chakra-ui/react'

import { setQuery } from '../utils/cookies'
import searchImages from '../utils/searchImages'

const SearchForm = ({ setImages, setPage, setHasMore }) => {
	const handleSubmit = async (e) => {
		e.preventDefault()

		setPage(1)

		const images = await searchImages({ setPage, setHasMore })

		setImages(images)
	}

	const handleChange = (e) => setQuery(e.target.value)

	return (
		<FormControl onSubmit={handleSubmit} as='form' maxW='40rem' mx='auto'>
			<Input
				isRequired
				placeholder='Search Photos'
				mb='.5rem'
				onChange={handleChange}
			/>

			<Button type='submit' w='100%'>
				Search
			</Button>
		</FormControl>
	)
}

export default SearchForm
