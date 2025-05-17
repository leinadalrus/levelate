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
            <nav
                className="flex flex-wrap max-w-full justify-between"
                style={styles.nav}
            >
                <button
                    className="rounded rounded-sm"
                    style={
                        activeTab == 'Garage' ? styles.activeTab : styles.tab
                    }
                    onClick={() => setActiveTab('Garage')}
                >
                    Garage
                </button>

                <button
                    className="rounded-t rounded-sm"
                    style={
                        activeTab == 'Builds' ? styles.activeTab : styles.tab
                    }
                    onClick={() => setActiveTab('Builds')}
                >
                    Builds
                </button>

                <button
                    className="rounded-t rounded-sm"
                    style={
                        activeTab == 'Inventory' ? styles.activeTab : styles.tab
                    }
                    onClick={() => setActiveTab('Inventory')}
                >
                    Inventory
                </button>

                <button
                    className="rounded-t rounded-sm"
                    style={
                        activeTab == 'Community' ? styles.activeTab : styles.tab
                    }
                    onClick={() => setActiveTab('Community')}
                >
                    Community
                </button>

                <button
                    className="rounded-t rounded-sm"
                    style={
                        activeTab == 'Support' ? styles.activeTab : styles.tab
                    }
                    onClick={() => setActiveTab('Support')}
                >
                    Support
                </button>
            </nav>
            <div style={styles.content}>{renderContent()}</div>
        </>
    )
}

const styles = {
    nav: {
        backgroundColor: '#130b06',
        padding: '0.4rem'
    },
    tab: {
        padding: '0.4rem 1rem',
        backgroundColor: '#446a4b',
        color: '#f1eae4',
        cursor: 'pointer'
    },
    activeTab: {
        padding: '0.3rem 0.9rem',
        border: 'none',
        backgroundColor: '#ebb583',
        color: '#0e020c',
        cursor: 'pointer'
    },
    content: {
        marginTop: '1.2rem',
        padding: '0.5rem 0.8rem',
    }
}

export default WindowTabs
