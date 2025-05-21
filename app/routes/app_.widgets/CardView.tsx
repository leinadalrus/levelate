import { ViewComponent } from '../app_.native/viewComponent'
import { ViewStyleProps } from '../app_.native/viewStyleProps'

export type CardViewProps = ViewStyleProps

const CardView = ({ className, ...otherProps }: CardViewProps) => {
    return <ViewComponent className={className} {...otherProps} />
}

export default CardView
