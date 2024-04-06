import React from 'react'
import {routerData} from "./";
import {Route, Routes} from "react-router-dom";

export const Router = () => {
    return (
        <Routes>
            {routerData.map(({path, element, name}) => (
                <Route
                    key={name}
                    path={path}
                    element={element}
                />
            ))}
        </Routes>
    );
}
