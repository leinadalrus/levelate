import { ViewComponent } from '../app_.native/viewComponent'
import { ViewStyleProps } from '../app_.native/viewStyleProps'

export type TableViewProps = ViewStyleProps

const TableView = ({ className, ...otherProps }: TableViewProps) => {
    return <ViewComponent className={className} {...otherProps} />
}

export default TableView
