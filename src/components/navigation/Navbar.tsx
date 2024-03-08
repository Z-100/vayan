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

                                <span className="visible sm:invisible w-6 ">
                                    <route.icon
                                        className={active === route.name ? "bg-dark-3 h-7 w-auto rounded-full transition-all duration-150" : "w-6 h-auto"}/>
                                </span>

                            <span className="invisible sm:visible">
                                <p className={active === route.name ? "font-bold" : ""}>{route.name}</p>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="h-16 hidden sm:block"></div>
        </>
    )
}
