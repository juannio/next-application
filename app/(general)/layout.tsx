import { NavBar } from "@/components"


export default function SubLayout({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <NavBar />
            <main className="flex flex-col items-center p-24">
                {children}
            </main>
        </>
    );
}