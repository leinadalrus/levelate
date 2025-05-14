import { Form, useNavigate, useSubmit } from '@remix-run/react'
import { useEffect, useState } from 'react'

const SearchField = () => {
    const [query, setInputs] = useState('')
    const navigate = useNavigate()
    const submission = useSubmit()

    const handleSearch = () => {
        if (query.trim()) navigate(`/:?/${query}`)

        navigate('/:?')
    }

    useEffect(() => {
        const searchField = document.getElementById('search-field')
        if (searchField instanceof HTMLInputElement)
            searchField.value = query || ''
    }, [query])

    return (
        <Form id="search-form" onSubmit={handleSearch}>
            <input
                id="search-field"
                type="search"
                name="query"
                placeholder="Search"
                aria-label="Search"
                defaultValue={query || ''}
                onChange={(event) => setInputs(event.target.value)}
            />
            <button
                type="submit"
                onChange={(event) => submission(event.currentTarget)}
            >
                Search
            </button>
        </Form>
    )
}

export default SearchField
