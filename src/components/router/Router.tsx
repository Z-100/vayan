import React from 'react'
import {getRouterData} from "./";
import {Route, Routes} from "react-router-dom";

export const Router = () => {
    return (
        <Routes>
            {getRouterData().map(({path, element, name}) => (
                <Route
                    key={name}
                    path={path}
                    element={element}
                />
            ))}
        </Routes>
    );
}
