import React from 'react'
import {RouteGroup} from '../../models'
import {Link} from 'react-router-dom'
import {
    CheckEnvironment,
    ToggleSwitch
} from "../common";
import routerData from "../router/RouterData";

interface SideBarProps {
    darkMode: boolean,
    toggleDarkMode: () => void
}

export const SideBar = ({ darkMode, toggleDarkMode }: SideBarProps) => {

    const groups: Record<RouteGroup, string> = {
        [RouteGroup.GENERAL]: RouteGroup.GENERAL,
        [RouteGroup.PERSONAL]: RouteGroup.PERSONAL,
        [RouteGroup.PROJECTS]: RouteGroup.PROJECTS,
        [RouteGroup.ADDITIONAL]: RouteGroup.ADDITIONAL,
    }

    return ( // w-16 bg-neutral-secondary p-2 box-border overflow-hidden transition-all hover:w-52
        <nav className="sidebar">
            {Object.values(groups).map(group => (
                <div className="sidebar-group" key={group.toString()}>
                    <CheckEnvironment component={<p>{group}</p>} />
                    {routerData.map(route => (
                        route.group === group ? (
                            <Link
                                to={route.path}
                                className="sidebar-item"
                                key={route.title}
                            >
                                <div className="sidebar-item-icon">{<route.icon/>}</div>
                                <span className="sidebar-item-text">{route.title}</span>
                            </Link>
                            )
                        : undefined
                    ))}
                </div>
            ))}
            <div>
                <ToggleSwitch fun={toggleDarkMode}/>
            </div>
        </nav>
    )
}
