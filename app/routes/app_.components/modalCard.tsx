import TradingCard, { CardProps } from './tradingCard'
import { useState } from 'react'
import ReactDOM from 'react-dom'

const ModalCard = ({ title, content, flavour, image }: CardProps) => {
    const [isModalActive, setModalAsActive] = useState(false)

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
                    <div
                        onFocus={handleFocus}
                        onBlur={handleFocusLoss}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <TradingCard
                            title={title}
                            content={content}
                            flavour={flavour}
                            image={image}
                            author={''}
                            group={''}
                            tags={[]}
                        />
                    </div>,
                    document.body
                )}
        </>
    )
}

export default ModalCard
