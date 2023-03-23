import { DesktopSidebar } from "./desktop/Index";
import { MobileSidebar } from "./mobile/Index";

export function Sidebar() {
    return (
        <>
            <DesktopSidebar />
            <MobileSidebar />
        </>
    );
}
