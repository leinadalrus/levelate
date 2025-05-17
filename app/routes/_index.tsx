import type { MetaFunction } from '@remix-run/node'
import WindowTabs from '~/routes/app_.components/windowTabs'
import Asidebar from './app_.components/asidebar'

export const meta: MetaFunction = () => {
    return [
        { title: 'Levelate' },
        { name: 'description', content: 'Levelate welcomes you' }
    ]
}

export default function Index() {
    return (
        <div className="flex h-screen items-center justify-center text-[#f1eae4] bg-[#130b06]">
            <Asidebar />

            <main className="flex flex-col items-center">
                <article className="content">
                    <section className="container-fluid">
                        <WindowTabs />
                    </section>
                </article>
            </main>
        </div>
    )
}
