import { useState } from 'react'
import TradingCard from './tradingCard'

const WindowTabs = () => {
    const [activeTab, setActiveTab] = useState('Garage')

    const renderContent = () => {
        switch (activeTab) {
            case 'Garage':
                return (
                    <>
                        <TradingCard />
                    </>
                )
            case 'Builds':
                return (
                    <>
                        <TradingCard />
                    </>
                )
            case 'Inventory':
                return (
                    <>
                        <TradingCard />
                    </>
                )
            case 'Community':
                return (
                    <>
                        <TradingCard />
                    </>
                )
            case 'Support':
                return (
                    <>
                        <TradingCard />
                    </>
                )
            default:
                return <></>
        }
    }

    return (
        <>
            <nav
                className="flex w-full items-center justify-between rounded rounded-sm"
                style={styles.nav}
            >
                <button
                    style={
                        activeTab == 'Garage' ? styles.activeTab : styles.tab
                    }
                    onClick={() => setActiveTab('Garage')}
                >
                    Garage
                </button>

                <button
                    style={
                        activeTab == 'Builds' ? styles.activeTab : styles.tab
                    }
                    onClick={() => setActiveTab('Builds')}
                >
                    Builds
                </button>

                <button
                    style={
                        activeTab == 'Inventory' ? styles.activeTab : styles.tab
                    }
                    onClick={() => setActiveTab('Inventory')}
                >
                    Inventory
                </button>

                <button
                    style={
                        activeTab == 'Community' ? styles.activeTab : styles.tab
                    }
                    onClick={() => setActiveTab('Community')}
                >
                    Community
                </button>

                <button
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
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#130b06',
        padding: '0.1rem'
    },
    tab: {
        padding: '0.5rem 0.8rem',
        border: 'none',
        backgroundColor: '#ebb583',
        color: '1eab8d',
        cursor: 'pointer'
    },
    activeTab: {
        padding: '0.5rem 0.8rem',
        border: 'none',
        backgroundColor: '#446a4b',
        color: '#f1eae4',
        cursor: 'pointer'
    },
    content: {
        marginTop: '1.2rem',
        padding: '0.5rem 0.8rem',
        border: '0.8rem solid #f1eae4'
    }
}

export default WindowTabs
