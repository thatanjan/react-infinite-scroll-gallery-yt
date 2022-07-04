import cookies from 'js-cookie'

const QUERY = 'query'

const setQuery = (value) => cookies.set(QUERY, value)
const getQuery = (value) => cookies.get(QUERY) || ''

export { setQuery, getQuery }
