export type TCard = {
    id?: string
    title?: string
    author?: string
    group?: string
    content?: string
    description?: string
    synopsis?: string
    flavour?: string
    image?: string
    tags?: Array<string>
}

const TradingCard = () => {
    const cardProp: TCard = {
        id: '0',
        title: 'Sunflower',
        author: 'leinadalrus',
        group: 'mt.Ai ent.',
        content: '',
        description: ' Small-scale suburban Car RPG-lite',
        synopsis: 'Features economy vehicles and suburban estates.',
        flavour: '',
        image: '',
        tags: ['Action', 'Adventure', 'RPG']
    }

    return (
        <article className="max-w-sm max-h-md rounded-b rounded-md shadow-lg text-[#0e020c] bg-[#f1eae4]">
            <section className="px-4 py-2">
                <h1>{cardProp.title}</h1>
            </section>

            <img src="" alt="" className="w-12 rounded rounded-sm" />

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-[#446a4b] rounded-full px-2 py-1 text-sm text-[#f1eae4] mr-2 mb-2">
                    action
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm text-[#0e020c] mr-2 mb-2">
                    adventure
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm text-[#0e020c] mr-2 mb-2">
                    rpg
                </span>
            </div>
            <section className="px-6 py-4">
                <p className="font-medium text-md mb-2">
                    {cardProp.description}
                </p>
                <i className="text-base">{cardProp.synopsis}</i>
            </section>
        </article>
    )
}

export default TradingCard
