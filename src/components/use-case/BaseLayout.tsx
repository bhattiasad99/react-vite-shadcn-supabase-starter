import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SideBarComponent from "./SidebarComponent"
import { useLocation } from "react-router"
import { PAGES } from "@/utils/constants";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    const location = useLocation()
    console.log({ location });
    const foundPage = PAGES.find(eachPage => eachPage.path === location.pathname);
    return (
        <SidebarProvider>
            <SideBarComponent />
            <main className="p-2 w-full grow bg-background">
                <div className="flex items-center gap-2">
                    <SidebarTrigger />
                    <h1 className="text-xl font-medium">
                        {foundPage?.heading}
                    </h1>
                </div>
                <div className="p-2">
                    {children}
                </div>
            </main>
        </SidebarProvider >
    )
}
