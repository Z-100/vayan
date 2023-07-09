import {
    sidebarContent
} from '../../models'
import {
    Link
} from 'react-router-dom'

export const SideBar = () => {

    const contents = sidebarContent

    return (
        <div className="sidebar">
            {contents.map((sidebarGroup, index) => (
                <div className="sidebar-group" key={index}>
                    {sidebarGroup.items.map((item, itemIndex) => (
                        <Link
                            to={item.destination}
                            className="sidebar-item"
                            key={itemIndex}
                        >
                            <div className="sidebar-item-icon">{<item.icon/>}</div>
                            <span className="sidebar-item-text">{item.text}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}
