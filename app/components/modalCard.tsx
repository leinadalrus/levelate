import { Card } from './card'
import { useState } from 'react'
import ReactDOM from 'react-dom'

const ModalCard = () => {
    const [isModalActive, setModalAsActive] = useState(false)
    const card: Card = {
        title: '',
        content: '',
        description: '',
        synopsis: '',
        flavour: '',
        image: ''
    }

    const handleMouseOver = () => {
        setModalAsActive(true)
    }

    const handleMouseOut = () => {
        setModalAsActive(false)
    }

    const handleFocus = () => {
        setModalAsActive(true)
    }

    const handleFocusLoss = () => {
        setModalAsActive(false)
    }

    return (
        <>
            {isModalActive &&
                ReactDOM.createPortal(
                    <article
                        onFocus={handleFocus}
                        onBlur={handleFocusLoss}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <h1>{card.title}</h1>
                        <img src={card.image} alt="" />
                        <p>{card.content || card.description}</p>
                        <i>{card.flavour || card.synopsis}</i>
                    </article>,
                    document.body
                )}
        </>
    )
}

export default ModalCard
