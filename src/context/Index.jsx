import React, { createContext, useState } from "react";

export const appContext = createContext(null);

export function MainContext({ children }) {
    const [isSideBarVisible, setIsSideBarVisible] = useState(true);

    var contextValues = {
        isSideBarVisible,
        setIsSideBarVisible,
    };

    return (
        <appContext.Provider value={contextValues}>
            {children}
        </appContext.Provider>
    );
}
