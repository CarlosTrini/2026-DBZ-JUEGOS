import { Routes, Route } from "react-router";
import MainLayout from "@/layout/MainLayout";
import MundoZ from "@/pages/MundoZ";
import Game from "@/pages/Game";
import KameHouse from "@/pages/KameHouse";



export function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout showFooter={false} />}>
                <Route index element={<KameHouse />} />
            </Route>
            <Route element={<MainLayout showFooter={true} />}>
                <Route path="/game" element={<Game />} />
                <Route path="/mundo-z" element={<MundoZ />} />


            </Route>
        </Routes>

    )
}