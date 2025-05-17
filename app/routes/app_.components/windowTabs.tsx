import { useState } from 'react'
import TradingCard from './tradingCard'
import Tabletop from './tabletop'

const WindowTabs = () => {
    const [activeTab, setActiveTab] = useState('Garage')

    const renderContent = () => {
        switch (activeTab) {
            case 'Garage':
                return (
                    <>
                        <Tabletop />
                    </>
                )
            case 'Builds':
                return (
                    <>
                        <Tabletop />
                    </>
                )
            case 'Inventory':
                return (
                    <>
                        <Tabletop />
                    </>
                )
            case 'Community':
                return (
                    <>
                        <Tabletop />
                    </>
                )
            case 'Support':
                return (
                    <>
                        <Tabletop />
                    </>
                )
            default:
                return (
                    <>
                        <TradingCard />
                    </>
                )
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
                                activeTab == 'Garage'
                                    ? styles.activeTab
                                    : styles.tab
                            }
                            onClick={() => setActiveTab('Garage')}
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
                            Garage
                        </button>

                        <button
                            className="rounded-t rounded-sm"
                            style={
                                activeTab == 'Builds'
                                    ? styles.activeTab
                                    : styles.tab
                            }
                            onClick={() => setActiveTab('Builds')}
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
                            Builds
                        </button>

                        <button
                            className="rounded-t rounded-sm"
                            style={
                                activeTab == 'Inventory'
                                    ? styles.activeTab
                                    : styles.tab
                            }
                            onClick={() => setActiveTab('Inventory')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
                            </svg>
                            Inventory
                        </button>

                        <button
                            className="rounded-t rounded-sm"
                            style={
                                activeTab == 'Community'
                                    ? styles.activeTab
                                    : styles.tab
                            }
                            onClick={() => setActiveTab('Community')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                            </svg>
                            Community
                        </button>

                        <button
                            className="rounded-t rounded-sm"
                            style={
                                activeTab == 'Support'
                                    ? styles.activeTab
                                    : styles.tab
                            }
                            onClick={() => setActiveTab('Support')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Support
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
