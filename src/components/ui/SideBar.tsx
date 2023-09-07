import React from 'react'
import {sidebarContent} from '../../models'
import {Link} from 'react-router-dom'
import {ToggleSwitch} from "../common";

interface SideBarProps {
    darkMode: boolean,
    toggleDarkMode: () => void
}

export const SideBar = ({darkMode, toggleDarkMode}: SideBarProps) => {

    return (
        <nav className="z-50 items-center group w-16 min-h-screen bg-neutral-secondary p-5 box-border text-base-100 overflow-hidden transition-all duration-700 ease-in-out fixed hover:w-72 dark:bg-light-neutral-secondary">
            {sidebarContent.map((sidebarGroup, index) => (
                <div className="mb-2 pb-2 border-b border-white" key={sidebarGroup.id}>
                    {sidebarGroup.items.map((item, itemIndex) => (
                        <Link
                            to={item.destination}
                            className="flex items-center my-3 h-12 text-xl rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-500 hover:bg-opacity-50 space-x-2"
                            key={item.id}
                        >
                            <div className="flex justify-center text-3xl">{<item.icon/>}</div>
                            <span className="opacity-0 whitespace-nowrap transition-opacity duration-200 ease-in-out group-hover:opacity-100">{item.text}</span>
                        </Link>
                    ))}
                </div>
            ))}
            <div>
                <ToggleSwitch fun={toggleDarkMode}/>
            </div>
        </nav>
    )
}
