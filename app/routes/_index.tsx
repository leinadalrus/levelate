import type { MetaFunction } from '@remix-run/node'
import WindowTabs from '~/components/windowTabs'
import ModalCard from '~/components/modalCard'
import SearchField from '~/components/searchField'

export const meta: MetaFunction = () => {
    return [
        { title: 'Levelate' },
        { name: 'description', content: 'Levelate welcomes you' }
    ]
}

export default function Index() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-16">
                <WindowTabs />
                <ModalCard />
                <SearchField />
            </div>
        </div>
    )
}
