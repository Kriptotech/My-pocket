import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateSavingGroupPage } from "../pages/CreateSavingGroup";
import { Dashboardpage } from "../pages/Dashboard";
import { GiveSavingGroupMemberARulePage } from "../pages/GiveSavingGroupMemberARule";

import { Homepage } from "../pages/Homepage";
import { MySavingGroupsPage } from "../pages/MySavingGroups";
// import { PrivateRoute } from "./privateRoute";
import { PageNotFound } from "../pages/PageNotFound";
import { SavingGroupPage } from "../pages/SavingGroup";
import { SavingGroupsPage } from "../pages/SavingGroups";

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
                    <Route
                        path="/saving_groups"
                        element={<SavingGroupsPage />}
                    />
                    <Route
                        path="/my_saving_groups"
                        element={<MySavingGroupsPage />}
                    />
                    <Route path="/saving_group" element={<SavingGroupPage />} />
                    <Route
                        path="/give_saving_group_member_a_rule"
                        element={<GiveSavingGroupMemberARulePage />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
