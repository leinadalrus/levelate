export type KomaProps = {
    id: number
    title: string
    flavour: string
    image: string
    content: string
}

export type FavouritesProp = {
    favourited: boolean
}

export type KomaMutation = KomaProps &
    FavouritesProp & {
        id: string
        publishedOn: string
    }
