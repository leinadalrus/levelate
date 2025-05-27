import { Form } from '@remix-run/react'
import type { LoaderFunctionArgs } from '@remix-run/node'

import invariant from 'tiny-invariant'
import { FavouritesProp, KomaMutation } from './komas.$komaProps'

export const loader = async ({ params }: LoaderFunctionArgs) => {
    invariant(params.komaId, 'Missing Koma(...?)')

    const koma = params.komaId
    if (!koma) throw new Response('Not Found', { status: 404 })

    return koma
}

const KomaId = ({
    title,
    flavour,
    image,
    content,
    favourited
}: KomaMutation) => {
    return (
        <section id="koma">
            <div>
                <img src={image} alt={flavour} />
            </div>

            <h1>{title}</h1>

            <Favourite favourited={favourited} />

            {content ? <p>{content}</p> : null}

            <i>{flavour}</i>

            <Form action="view">
                <button type="submit">View</button>
            </Form>

            <Form
                action="hide"
                method="post"
                onSubmit={(event) => {
                    const response = confirm(
                        'Please confirm you want to hide this koma...'
                    )
                    if (!response) {
                        event.preventDefault()
                    }
                }}
            >
                <button type="submit">Hide</button>
            </Form>
        </section>
    )
}

const Favourite = ({ favourited }: FavouritesProp) => {
    return (
        <Form method="post">
            <button
                aria-label={
                    favourited ? 'Remove from favourites' : 'Add to favourites'
                }
                name="favourite"
                value={favourited ? 'false' : 'true'}
            >
                {favourited ? '*' : '^'}
            </button>
        </Form>
    )
}

export default KomaId
