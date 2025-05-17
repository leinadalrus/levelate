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
                className="max-w-16 max-h-sm rounded-xl"
            />
            <button
                type="submit"
                onChange={(event) => submission(event.currentTarget)}
                className="px-1 mx-1 btn"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4"
                >
                    <path d="M5.94 8.06a1.5 1.5 0 1 1 2.12-2.12 1.5 1.5 0 0 1-2.12 2.12Z" />
                    <path
                        fillRule="evenodd"
                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM4.879 4.879a3 3 0 0 0 3.645 4.706L9.72 10.78a.75.75 0 0 0 1.061-1.06L9.585 8.524A3.001 3.001 0 0 0 4.879 4.88Z"
                        clipRule="evenodd"
                    />
                </svg>

                <i>Search</i>
            </button>
        </Form>
    )
}

export default SearchField
