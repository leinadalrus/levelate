export type AlbumProps = {
    title: string
    image: string
    tags: string[]
}

const AlbumArt = ({ title, image, tags }: AlbumProps) => {
    return (
        <article className="max-w-sm max-h-sm rounded rounded-lg shadow-lg text-[#0e020c] bg-[#f1eae4]">
            <img
                src={image}
                alt="Card focus-hero portrait"
                className="w-xs h-xs rounded rounded-sm"
            />

            <section className="px-4 py-2">
                <h1>{title}</h1>
            </section>

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-[#446a4b] rounded-full px-2 py-1 text-sm text-[#f1eae4] mr-2 mb-2">
                    {tags}
                </span>
            </div>
        </article>
    )
}

export default AlbumArt
