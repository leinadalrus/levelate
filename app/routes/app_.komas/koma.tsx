import invariant from 'tiny-invariant'

type KomaMutation = {
    id?: string
    name?: string
    nickname?: string
    image?: string
    description?: string
    favourite?: boolean
}

export type KomaRecord = KomaMutation & {
    id: string
    publishedOn: string
}

export class KomaInfo {
    komaList: KomaRecord[]
    komaData: KomaRecord

    constructor(komaList: KomaRecord[], komaData: KomaRecord) {
        this.komaList = komaList
        this.komaData = komaData
    }

    async getKomas() {
        return this.komaList
    }

    async getKoma(id: string) {
        if (this.komaData.id == id) return this.komaData
        return this.komaData
    }

    async setKoma(id: string, values: KomaMutation) {
        const koma = await this.getKoma(id)
        invariant(koma, `No koma found for ${id}`)

        const updatedKoma = { ...koma, ...values }
        const i = Number(id)

        this.komaList[i] = updatedKoma
        return updatedKoma
    }

    async createKoma(): Promise<KomaRecord> {
        const koma: KomaRecord = {
            id: '',
            name: '',
            nickname: '',
            image: '',
            description: '',
            publishedOn: '',
            favourite: false
        }

        return koma
    }

    async updateKoma(id: string, updates: KomaMutation) {
        const koma = await this.getKoma(id)
        if (!koma) {
            throw new Error(`No koma found for ${id}`)
        }

        await this.setKoma(id, { ...koma, ...updates })
        return koma
    }
}
