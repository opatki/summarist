import Sidebar from "@/src/components/Sidebar"
import Search from "@/src/components/Search"

export default async function PageLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Sidebar />
            <Search />
            <div className="mx-auto w-full overflow-x-hidden md:pl-50">
                <div className="py-5">
                    {children}
                </div>
            </div>
        </>
    )
}