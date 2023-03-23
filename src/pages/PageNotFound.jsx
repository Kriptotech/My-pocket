import React from "react";

import { Header } from "../components/header/Index";
import { Footer } from "../components/footer/Index";
import { Main } from "../features/page_not_found/components/main/Index";

export function PageNotFound() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
