import React from 'react'
import {sidebarContent} from '../../models'
import {Link} from 'react-router-dom'
import {ToggleSwitch} from "../common";

interface SideBarProps {
    darkMode: boolean,
    toggleDarkMode: () => void
}

export const SideBar = ({ darkMode, toggleDarkMode }: SideBarProps) => {

    return ( // w-16 bg-neutral-secondary p-2 box-border overflow-hidden transition-all hover:w-52
        <nav className="sidebar">
            {sidebarContent.map((sidebarGroup, index) => (
                <div className="sidebar-group" key={sidebarGroup.id}>
                    {sidebarGroup.items.map((item, itemIndex) => (
                        <Link
                            to={item.destination}
                            className="sidebar-item"
                            key={item.id}
                        >
                            <div className="sidebar-item-icon">{<item.icon/>}</div>
                            <span className="sidebar-item-text">{item.text}</span>
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
