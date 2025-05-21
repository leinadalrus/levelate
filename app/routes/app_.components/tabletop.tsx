import TradingCard, { CardProps } from './tradingCard'

const Tabletop = ({ title }: CardProps) => {
    // const cards: TCard[] = []

    return (
        <section className="h-full w-full flex flex-wrap justify-center items-center">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <TradingCard key={title} />
            </div>
        </section>
    )
}

export default Tabletop
