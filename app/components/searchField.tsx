import { LoaderFunctionArgs } from '@remix-run/node'
import { Form, useLoaderData, useSubmit } from '@remix-run/react'
import { useEffect } from 'react'
import { KomaInfo } from '~/models/koma'

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const tag = document.getElementById('search-field') as HTMLInputElement
    const formatted = tag?.value.toString()

    const search = new URL(request.url)
    const query = search.searchParams.get(formatted)

    const k = new KomaInfo([], {
        id: '',
        name: '',
        nickname: '',
        image: '',
        description: '',
        publishedOn: '',
        favourite: false
    })

    const komas = await k.getKomas()
    if (!komas) throw new Response('Not Found', { status: 404 })

    return { komas, query }
}

const SearchField = () => {
    const { query } = useLoaderData<typeof loader>()
    const submission = useSubmit()

    useEffect(() => {
        const searchField = document.getElementById('search-field')
        if (searchField instanceof HTMLInputElement)
            searchField.value = query || ''
    }, [query])

    return (
        <Form id="search-form">
            <input
                id="search-field"
                type="search"
                name="query"
                placeholder="Search"
                defaultValue={query || ''}
                aria-label="Search"
                onChange={(event) => submission(event.currentTarget)}
            />
        </Form>
    )
}

export default SearchField
