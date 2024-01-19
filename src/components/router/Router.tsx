import React from 'react'
import routerData from "./RouterData";
import {Route, Routes} from "react-router-dom";

export const Router = () => {
    return (
        <Routes>
            {routerData.map(({path, element, text}) => (
                <Route
                    key={text}
                    path={path}
                    element={element}
                />
            ))}
        </Routes>
    );
}
