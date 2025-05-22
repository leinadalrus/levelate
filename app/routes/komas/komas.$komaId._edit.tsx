import type { LoaderFunctionArgs } from '@remix-run/node'
import { Form, redirect, useLoaderData, useNavigate } from '@remix-run/react'
import invariant from 'tiny-invariant'

import { KomaInfo } from '~/routes/komas/koma'

export const action = async () => {
    const k = new KomaInfo([], {
        id: '',
        name: '',
        nickname: '',
        description: '',
        publishedOn: '',
        image: '',
        favourite: false
    })

    const koma = await k.createKoma()
    return redirect(`/komas/${koma.id}/edit`)
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
    invariant(params.komaId, 'Missing Koma(...?)')
    const formData = await request.formData()
    const updates = Object.fromEntries(formData)

    const k = new KomaInfo([], {
        id: '',
        name: '',
        nickname: '',
        image: '',
        description: '',
        publishedOn: '',
        favourite: false
    })

    const koma = await k.getKoma(params.komaId)
    if (!koma) throw new Response('Not Found', { status: 404 })

    k.updateKoma(params.komaId, updates)
    redirect(`/komas/${params.komaId}`)

    return koma
}

export default function EditKoma() {
    const { id } = useLoaderData<typeof loader>()
    const navigate = useNavigate()

    return (
        <Form key={id} id="koma-form" method="post" className="w-full max-w-xs">
            <label
                htmlFor="title"
                className="block text-[#010401] text-sm mb-2"
            >
                Title
            </label>
            <input
                aria-label="Title"
                name="name"
                placeholder="Title"
                type="text"
            />

            <label
                htmlFor="flavour"
                className="block text-[#010401] text-sm mb-2"
            >
                Flavour
            </label>
            <input
                aria-label="Flavour"
                name="Flavour"
                placeholder="Flavour"
                type="text"
            />
            <label
                htmlFor="image"
                className="block text-[#010401] text-sm mb-2"
            >
                Image
            </label>
            <input
                aria-label="Product [Hero] [Item] Image Uploaded File"
                name="image"
                placeholder="Image"
                type="text"
            />

            <label
                htmlFor="content"
                className="block text-[#010401] text-sm mb-2"
            >
                Content
            </label>
            <textarea name="content" rows={6} />

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
