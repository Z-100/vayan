import React from 'react'
import {groupRoutes} from "../../domain";
import {routerData} from "../router";
import {Link} from "react-router-dom";

export const Navbar = () => {

    const groupedRoutes = groupRoutes(routerData)

    return (
        <nav className="w-full h-16 p-8 bg-layerOne flex sm:rounded-b-none rounded-2xl"> // TODO: Basically the sm thingy
            {Object.keys(groupedRoutes).map((groupName, index) =>
                <React.Fragment key={groupName}>
                   <span className="flex-grow flex">
                        {groupedRoutes[groupName].map(route =>
                            <Link key={route.name}
                                  to={route.path}
                                  className="flex items-center space-x-2">
                                <route.icon/>
                                <p>{route.name}</p>
                            </Link>
                        )}
                    </span>
                    {index < Object.keys(groupedRoutes).length - 1 && <span className="mx-2">|</span>}
                </React.Fragment>
            )}
        </nav>
    )
}
