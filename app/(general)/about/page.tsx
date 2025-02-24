import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About page SEO',
    description: 'ABOUT PAGE SEO METADATA',
    keywords: ['About', 'info', 'initial info'],
}

const AboutPage = () => {
    return (
        <main className="flex flex-col item-center  p-24">
            <span className="text-7xl">About page</span>
        </main>
    )
}

export default AboutPage;