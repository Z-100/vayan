import React, {useEffect, useState} from 'react'
import {getRouterData} from "../router";
import {Link, useLocation} from "react-router-dom";
import {RouteGroup} from "../../domain";

export const Navbar = () => {

    const location = useLocation();
    const [url, setUrl] = useState('');
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    return (
        <>
            <div className="fixed top-0 w-full bg-dark-1 h-16 z-50">
                <div className="w-[50%] ml-[25%] h-full flex gap-2 items-center justify-center text-lg">
                    {getRouterData(RouteGroup.NAVBAR).map(route => (
                        <Link key={route.name}
                              to={route.path}>

                            <p className={`hover:text-light-3 transition-colors px-3 ${url === route.path ? "font-medium text-light-3" : "text-light-2"}`}>{route.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="h-12 sm:h-16 sm:block"></div>
        </>
    )
}
