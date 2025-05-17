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
        <Form key={id} id="koma-form" method="post">
            <p>
                <span>Name</span>
                <input
                    aria-label="Name"
                    name="name"
                    placeholder="Name"
                    type="text"
                />
                <input
                    aria-label="Nickname"
                    name="nickname"
                    placeholder="Nickname"
                    type="text"
                />
            </p>
            <label>
                <span>Image</span>
                <input
                    aria-label="Product [Item] (Hero) Image URL"
                    name="image"
                    placeholder="Image"
                    type="text"
                />
            </label>
            <label>
                <span>description</span>
                <textarea name="description" rows={6} />
            </label>
            <p>
                <button type="submit">Update</button>
                <button
                    type="button"
                    onClick={() => {
                        navigate(-1)
                    }}
                >
                    Discard
                </button>
            </p>
        </Form>
    )
}
