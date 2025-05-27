import { useState } from 'react'
import GridView from '../app_.views/gridView'
import CardView from '../app_.views/cardView'

const WindowTabs = () => {
    const [activeTab, setActiveTab] = useState('yours')

    const renderContent = () => {
        switch (activeTab) {
            case 'yours':
                return <CardView />
            case 'elses':
                return <GridView />
            case 'miscs':
                return <></>
            default:
                return <></>
        }
    }

    return (
        <>
            <nav className="fixed flex flex-wrap px-1 mx-1" style={styles.nav}>
                <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative h-16 items-center justify-between">
                        <button
                            className="rounded-t rounded-sm"
                            style={
                                activeTab == 'yours'
                                    ? styles.activeTab
                                    : styles.tab
                            }
                            onClick={() => setActiveTab('yours')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            yours
                        </button>

                        <button
                            className="rounded-t rounded-sm"
                            style={
                                activeTab == 'elses'
                                    ? styles.activeTab
                                    : styles.tab
                            }
                            onClick={() => setActiveTab('elses')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            elses
                        </button>

                        <button
                            className="rounded-t rounded-sm"
                            style={
                                activeTab == 'miscs'
                                    ? styles.activeTab
                                    : styles.tab
                            }
                            onClick={() => setActiveTab('miscs')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
                            </svg>
                            miscs
                        </button>
                    </div>
                </section>
            </nav>
            <div style={styles.content}>{renderContent()}</div>
        </>
    )
}

const styles = {
    nav: {
        padding: '0.4rem',
        bottom: '0',
        left: '1rem',
        right: '2rem'
    },
    tab: {
        padding: '0.4rem 0.9rem',
        color: '#446a4b',
        cursor: 'pointer'
    },
    activeTab: {
        padding: '0.5rem 1rem',
        color: '#ebb583'
    },
    content: {
        marginTop: '1.2rem',
        padding: '0.5rem 0.8rem'
    }
}

export default WindowTabs
