import React, {useState} from 'react'
import {groupRoutes} from "../../domain";
import {routerData} from "../router";
import {Link} from "react-router-dom";

export const Navbar = () => {

    const groupedRoutes = groupRoutes(routerData)

    const [active, setActive] = useState(routerData[0].name)

    return (
        <>
            <div
                className="float flex items-center justify-center fixed bottom-0 left-0 right-0 mb-4 sm:top-0 sm:mb-32 sm:bottom-auto">
                <nav className="bg-layerOne flex rounded-full w-64 h-12 sm:w-full sm:h-16 sm:p-8 sm:rounded-none">
                    {Object.keys(groupedRoutes).map((groupName, index) =>
                        <React.Fragment key={groupName}>
                           <span className="flex-grow flex">
                                {groupedRoutes[groupName].map(route =>
                                    <Link key={route.name}
                                          to={route.path}
                                          onClick={() => setActive(route.name)}
                                          className="flex items-center space-x-2">

                                        <span className="visible sm:invisible">
                                            <route.icon className={active === route.name ? "bg-primary rounded-full w-6 h-auto" : ""}/>
                                        </span>

                                        <span className="invisible sm:visible">
                                            <p className={active === route.name ? "font-bold" : ""}>{route.name}</p>
                                        </span>
                                    </Link>
                                    )}
                            </span>
                            {index < Object.keys(groupedRoutes).length - 1 && <span className="mx-2">|</span>}
                        </React.Fragment>
                    )}
                </nav>
            </div>
            <div className="h-16"></div>
        </>

    )
}
