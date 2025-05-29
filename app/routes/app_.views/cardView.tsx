import TradingCard from '../app_.components/tradingCard'

const CardView = () => {
    return (
        <section className="grid grid-cols-1 grid-rows-[repeat(auto-fit,_minmax(12.5rem,_1fr))] gap-4">
            <TradingCard
                title={'Hello world'}
                author={'Chicken'}
                group={'Chickens'}
                content={
                    'Lorem ipsum dolor sit amet, \
                            consectetur adipiscing elit, \
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
                flavour={
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                }
                image={''}
                tags={['rpg']}
            />
        </section>
    )
}

export default CardView
