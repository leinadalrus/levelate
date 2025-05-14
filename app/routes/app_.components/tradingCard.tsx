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
            <article style={styles.container}>
                <h1>Title</h1>
                <div>
                    <img src="" alt="" />
                </div>
                <section>
                    <p>Description</p>
                    <i>Synopsis</i>
                </section>
            </article>
        </>
    )
}

const styles = {
    container: {
        margin: '0.2rem 0.1rem',
        padding: '0.5rem 0.8rem',
        width: '0.5rem',
        height: '0.8rem'
    }
}

export default TradingCard
