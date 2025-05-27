import type { LoaderFunctionArgs } from '@remix-run/node'
import {
    data,
    Form,
    redirect,
    useLoaderData,
    useNavigate
} from '@remix-run/react'
import invariant from 'tiny-invariant'

import { KomaProps } from '~/routes/komas/komas.$komaProps'

export const action = async ({ id }: KomaProps) => {
    return redirect(`/komas/${id}/edit`)
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
    invariant(params.komaId, 'Missing Koma(...?)')
    const formData = await request.formData()

    const koma = params.komaId
    if (!koma) throw new Response('Not Found', { status: 404 })

    redirect(`/komas/${params.komaId}`)

    return data(formData)
}

const Edit = ({ id, title, flavour, image, content }: KomaProps) => {
    useLoaderData<typeof loader>()
    const navigate = useNavigate()

    return (
        <Form key={id} id="koma-form" method="post" className="w-full max-w-xs">
            <label
                htmlFor={title}
                className="block text-[#010401] text-sm mb-2"
            >
                Title
            </label>
            <input
                aria-label="Title"
                name={title}
                placeholder="Title"
                type="text"
            />

            <label
                htmlFor={flavour}
                className="block text-[#010401] text-sm mb-2"
            >
                Flavour
            </label>
            <input
                aria-label="Flavour"
                name={flavour}
                placeholder="Flavour"
                type="text"
            />
            <label
                htmlFor={image}
                className="block text-[#010401] text-sm mb-2"
            >
                Image
            </label>
            <input
                aria-label="Product [Hero] [Item] Image Uploaded File"
                name={image}
                placeholder="Image"
                type="text"
            />

            <label
                htmlFor={content}
                className="block text-[#010401] text-sm mb-2"
            >
                Content
            </label>
            <textarea name={content} rows={6} />

            <button
                type="submit"
                className="g-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Apply
            </button>
            <i>
                <input
                    type="button"
                    name="discard"
                    value={'Discard'}
                    onClick={() => {
                        navigate(-1)
                    }}
                />
            </i>
        </Form>
    )
}

export default Edit
