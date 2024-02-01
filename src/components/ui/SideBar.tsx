import React from 'react'
import routes from "../router/RouterData";
import {RouteType} from "../../domain";
import { Link } from 'react-router-dom';

type GroupedRoutes = Record<string, RouteType[]>

export const SideBar = () => {

    let groupedRoutes = routes.reduce((groupedRoutes, route) => {
        const {group, ...rest} = route;
        groupedRoutes[group] = groupedRoutes[group] || []
        groupedRoutes[group].push({group, ...rest});
        return groupedRoutes;
    }, {} as GroupedRoutes);

    console.log(groupedRoutes)
    return (
        <nav className="z-50 items-center group w-16 min-h-screen bg-neutral-secondary p-5 box-border text-base-100 overflow-hidden transition-all duration-700 ease-in-out fixed hover:w-72 dark:bg-light-neutral-secondary">
            {Object.keys(groupedRoutes).map((key, index) =>
                <div className="mb-2 pb-2 border-b border-white" key={index}>
                    {/*<p>{key}</p>*/}

                    {groupedRoutes[key].map((route, i) =>
                        <Link
                            key={i}
                            to={route.path}
                            className="flex items-center my-3 h-12 text-xl rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-500 hover:bg-opacity-50 space-x-2"
                        >

                            <div className="flex justify-center text-3xl">{<route.icon/>}</div>
                            <span className="opacity-0 whitespace-nowrap transition-opacity duration-200 ease-in-out group-hover:opacity-100">{route.text}</span>
                        </Link>
                    )}

                </div>
            )}
        </nav>
    )
}
