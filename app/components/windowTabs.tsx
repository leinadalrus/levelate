import { useState } from 'react'

const WindowTabs = () => {
    const [activeTab, setActiveTab] = useState('Garage')

    const renderContent = () => {
        switch (activeTab) {
            case 'Garage':
                return <></>
            case 'Builds':
                return <></>
            case 'Inventory':
                return <></>
            case 'Community':
                return <></>
            case 'Support':
                return <></>
            default:
                return <></>
        }
    }

    return (
        <>
            <nav style={styles.nav}>
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
        backgroundColor: '#f0f0f0',
        padding: '1rem'
    },
    tab: {
        padding: '1rem 2rem',
        border: 'none',
        backgroundColor: '#ddd',
        cursor: 'pointer'
    },
    activeTab: {
        padding: '1rem 2rem',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer'
    },
    content: {
        marginTop: '2rem',
        padding: '2rem',
        border: '1rem solid #ddd'
    }
}

export default WindowTabs
