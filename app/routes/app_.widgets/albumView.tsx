import { ViewComponent } from '../app_.native/viewComponent'
import { ViewStyleProps } from '../app_.native/viewStyleProps'

export type AlbumViewProps = ViewStyleProps

const AlbumView = ({ className, ...otherProps }: AlbumViewProps) => {
    return <ViewComponent className={className} {...otherProps} />
}

export default AlbumView
