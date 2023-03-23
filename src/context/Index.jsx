import React, { createContext, useState } from "react";

export const appContext = createContext(null);

export function MainContext({ children }) {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    // values to be shared across the context
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
