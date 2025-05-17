import { Form } from '@remix-run/react'
import type { LoaderFunctionArgs } from '@remix-run/node'
import type { FunctionComponent } from 'react'

import invariant from 'tiny-invariant'
import { KomaInfo, type KomaRecord } from '~/routes/komas/koma'

export const loader = async ({ params }: LoaderFunctionArgs) => {
    invariant(params.komaId, 'Missing Koma(...?)')

    const k = new KomaInfo([], {
        id: '',
        name: '',
        nickname: '',
        description: '',
        publishedOn: '',
        image: '',
        favourite: false
    })

    const koma = await k.getKoma(params.komaId)
    if (!koma) throw new Response('Not Found', { status: 404 })

    return koma
}

export default function Koma() {
    const koma = {
        id: 1,
        name: 'Wizard Rod',
        nickname: 'WiRo',
        description: 'Balanced Stamina Type',
        favourite: false
    }

    return (
        <div id="koma">
            <div>
                <img src="" alt="" />
            </div>

            <div>
                <h1>
                    {koma.name || koma.nickname ? (
                        <>
                            {koma.name} {koma.nickname}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{' '}
                    <Favourite koma={koma} />
                </h1>
                {koma.description ? <p>{koma.description}</p> : null}

                <div>
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
                </div>
            </div>
        </div>
    )
}

const Favourite: FunctionComponent<{
    koma: Pick<KomaRecord, 'favourite'>
}> = ({ koma }) => {
    const favourite = koma.favourite

    return (
        <Form method="post">
            <button
                aria-label={
                    favourite ? 'Remove from favourites' : 'Add to favourites'
                }
                name="favourite"
                value={favourite ? 'false' : 'true'}
            >
                {favourite ? '*' : '^'}
            </button>
        </Form>
    )
}
