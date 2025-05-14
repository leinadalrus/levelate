import type { MetaFunction } from '@remix-run/node'
import WindowTabs from '~/routes/app_.components/windowTabs'
import ModalCard from '~/routes/app_.components/modalCard'
import Asidebar from './app_.components/asidebar'

export const meta: MetaFunction = () => {
    return [
        { title: 'Levelate' },
        { name: 'description', content: 'Levelate welcomes you' }
    ]
}

export default function Index() {
    return (
        <div className="flex h-screen items-center justify-center">
            <Asidebar />

            <div className="flex flex-col items-center gap-16">
                <WindowTabs />
                <ModalCard />
            </div>
        </div>
    )
}
