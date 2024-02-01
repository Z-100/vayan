import React from 'react'
import {groupRoutes} from "../../domain";
import {routerData} from "../router";
import {Link} from "react-router-dom";

export const Navbar = () => {

    const groupedRoutes = groupRoutes(routerData)

    return (
        <nav>
            {Object.keys(groupedRoutes).map(groupName =>
                <span key={groupName}>
                    {groupedRoutes[groupName].map(route =>
                        <Link key={route.name}
                            to={route.path}>
                            <route.icon/>
                        </Link>
                    )}
                </span>
            )}
        </nav>
    )
}
