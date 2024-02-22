import React, {useState} from 'react'
import {groupRoutes} from "../../domain";
import {routerData} from "../router";
import {Link} from "react-router-dom";

export const Navbar = () => {

    const groupedRoutes = groupRoutes(routerData)

    const [active, setActive] = useState(routerData[0].name)

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 mb-4 sm:top-0 sm:mb-32 sm:bottom-auto flex justify-center">
                <nav className="bg-dark-1 flex rounded-full w-64 h-12 sm:bg-dark-1 sm:w-full sm:h-16 sm:p-8 sm:rounded-none">
                    {Object.keys(groupedRoutes).map((groupName, index) => (
                        <div key={groupName} className="w-full gap-1 flex flex-nowrap">
                            {groupedRoutes[groupName].map(route => (
                                <Link key={route.name}
                                      to={route.path}
                                      onClick={() => setActive(route.name)}
                                      className="flex items-center">

                                    <span className="visible sm:invisible w-6 ">
                                        <route.icon
                                            className={active === route.name ? "bg-dark-3 h-7 w-auto rounded-full transition-all duration-150" : "w-6 h-auto"}/>
                                    </span>

                                    <span className="invisible sm:visible">
                                        <p className={active === route.name ? "font-bold" : ""}>{route.name}</p>
                                    </span>
                                </Link>
                            ))}
                            {index < Object.keys(groupedRoutes).length - 1 && <span className="mx-2">|</span>}
                        </div>
                    ))}
                </nav>
            </div>
            <div className="h-16 hidden sm:block"></div>
        </>
    )
}
