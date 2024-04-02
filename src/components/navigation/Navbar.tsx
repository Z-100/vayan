import React, {useState} from 'react'
import {routerData} from "../router";
import {Link} from "react-router-dom";

export const Navbar = () => {

    const [active, setActive] = useState(routerData[0].name)

    return (
        <>
            <div className="fixed top-0 w-full bg-dark-1 h-16">
                <div className="w-[50%] ml-[25%] h-full flex gap-6 items-center justify-center">
                    {routerData.map(route => (
                        <Link key={route.name}
                              to={route.path}
                              onClick={() => setActive(route.name)}
                              className="">

                            <p className={active === route.name ? "font-bold" : "text-light-2"}>{route.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="h-12 sm:h-16 sm:block"></div>
        </>
    )
}
