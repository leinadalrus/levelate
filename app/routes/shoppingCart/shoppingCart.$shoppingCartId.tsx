import { ViewStyleProps } from '../app_.native/viewStyleProps'

type ShoppingCartView = ViewStyleProps & {
    productNames: string[]
    productIds: number[]
    quantities: number[]
    pricings: number[]
}

const ShoppingCart = ({
    productNames,
    quantities,
    pricings
}: ShoppingCartView) => {
    const totalCost = quantities.map((i) => [
        pricings.map((j) => {
            return (
                <div key={i}>
                    <span key={j}>{i * j}</span>
                </div>
            )
        })
    ])

    return (
        <table className="table-auto sm:table-fixed xs:table-fixed">
            <tr>
                <th>Product names</th>
                <th>Quantities</th>
                <th>Costs</th>
            </tr>

            <tr>
                <td>
                    {productNames.map((i, id) => {
                        return (
                            <div key={id}>
                                <article>{i}</article>
                            </div>
                        )
                    })}

                    {quantities.map((i, id) => {
                        return (
                            <div key={id}>
                                <article>{i}</article>
                            </div>
                        )
                    })}

                    {pricings.map((i, id) => {
                        return (
                            <div key={id}>
                                <article>{i}</article>
                            </div>
                        )
                    })}
                </td>
            </tr>

            <tr>
                <td>{totalCost}</td>
            </tr>
        </table>
    )
}

export default ShoppingCart
