import SearchField from './searchField'

const Asidebar = () => {
    return (
        <div className="p-4 mx-1">
            <aside className="flex flex-col h-screen items-center justify-center gap-6">
                <SearchField />

                <img className="img-circle elevation-2" src="" alt="" />

                <h1>Find Original Creations</h1>
                <ul className='nav nav-pills'>
                    <li className="nav-item">Free</li>
                    <li className="nav-item">Featured</li>
                    <li className="nav-item">Exclusive</li>
                    <li className="nav-item">Discounted</li>
                </ul>

                <h2>Product Formats</h2>
                <ul className='nav nav-pills'>
                    <li className="nav-item">Games</li>
                    <li className="nav-item">Comics</li>
                    <li className="nav-item">Illustrations</li>
                    <li className="nav-item">Music</li>
                    <li className="nav-item">Videos</li>
                    <li className="nav-item">Softwares</li>
                    <li className="nav-item">Accessories</li>
                    <li className="nav-item">Miscellaneous</li>
                </ul>

                <h3>Events</h3>
                <ul className='nav nav-pills'>
                    <li className="nav-item">Promotional Events</li>
                </ul>
            </aside>
        </div>
    )
}

export default Asidebar
