import Sidebar from "@/src/components/Sidebar"
import Search from "@/src/components/Search"


export default async function PageLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Sidebar />
            <Search />
            <div className="mx-auto w-full px-60">
                <div className="py-10">
                    {children}
                </div>
            </div>
        </>
    )
}