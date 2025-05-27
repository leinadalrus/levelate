import AlbumArt from '../app_.components/albumArt'

const GridView = () => {
    return (
        <section className="grid grid-cols-4 grid-rows-[repeat(auto-fit,_minmax(12.5rem,_1fr))] gap-4">
            <AlbumArt title={'Hello world'} image={''} tags={['rpg']} />
        </section>
    )
}

export default GridView
