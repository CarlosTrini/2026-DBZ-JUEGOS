import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Outlet } from "react-router";

interface Props {
    showFooter?: boolean;
}

const MainLayout = ({ showFooter = true }: Props) => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            {
                showFooter ? (
                    <Footer />
                ) : null
            }
        </>
    )
}

export default MainLayout;