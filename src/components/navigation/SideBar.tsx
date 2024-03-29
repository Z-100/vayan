import React from 'react'
import {Link} from 'react-router-dom';
import {groupRoutes} from "../../domain/";
import {routerData} from "../";

export const SideBar = () => {

    const groupedRoutes = groupRoutes(routerData)

    return (
        <nav
            className="z-50 items-center group w-16 min-h-screen bg-neutral-secondary p-5 box-border text-base-100 overflow-hidden transition-all duration-700 ease-in-out fixed hover:w-72 dark:bg-light-neutral-secondary">
            {Object.keys(groupedRoutes).map((key, index) =>
                <div className="mb-2 pb-2 border-b border-white" key={index}>
                    {groupedRoutes[key].map((route, i) =>
                        <Link
                            key={i}
                            to={route.path}
                            className="flex items-center my-3 h-12 text-xl rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-500 hover:bg-opacity-50 space-x-2"
                        >

                            <div className="flex justify-center text-3xl">{<route.icon/>}</div>
                            <span
                                className="opacity-0 whitespace-nowrap transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                                {route.name}
                            </span>
                        </Link>
                    )}

                </div>
            )}
        </nav>
    )
}
