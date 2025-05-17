export interface ICard {
    title?: string
    content?: string
    description?: string
    synopsis?: string
    flavour?: string
    image?: string
}

const TradingCard = () => {
    return (
        <>
            <article className="max-w-sm rounded overflow-hidden shadow-lg">
                <h1>Title</h1>
                <img src="" alt="" className="w-full rounded rounded-sm" />

                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-[#f1eae4] mr-2 mb-2">
                        action
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-[#f1eae4] mr-2 mb-2">
                        adventure
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm semibold text-[#f1eae4] mr-2 mb-2">
                        rpg
                    </span>
                </div>

                <section className="px-6 py-4">
                    <p className="font-medium text-lg mb-2">Description</p>
                    <i className="text-[#f1eae4] text-base">Synopsis</i>
                </section>
            </article>
        </>
    )
}

export default TradingCard
