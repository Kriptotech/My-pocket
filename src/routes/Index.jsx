import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateSavingGroupPage } from "../pages/CreateSavingGroup";
import { Dashboardpage } from "../pages/Dashboard";

import { Homepage } from "../pages/Homepage";
// import { PrivateRoute } from "./privateRoute";
import { PageNotFound } from "../pages/PageNotFound";

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Homepage />} /> */}
                    <Route path="/" element={<Dashboardpage />} />
                    <Route
                        path="/create_saving_group"
                        element={<CreateSavingGroupPage />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
