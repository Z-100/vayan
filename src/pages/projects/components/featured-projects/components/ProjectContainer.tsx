import React from 'react'
import {Link} from "react-router-dom";

interface ProjectContainerProps {
    name: string,
    description: string,
    url: string,
    image: string,
}
export const ProjectContainer = ({ name, description, url, image }: ProjectContainerProps) => {
    return (
        <>
            <div className="flex p-4 bg-secondary w-96 h-48 rounded-lg shadow-md overflow-hidden">
                <img src={image}
                     alt={name}
                     className="mr-5 rounded-lg"/>
                <span>
                    <Link to={url}
                          target={"_blank"}
                          className="w-full h-48 object-cover">
                        <h3 className="text-xl font-bold mb-2">↪ {name}</h3>
                    </Link>
                    <p className="text-gray-700 text-base">{description}</p>
                </span>
            </div>
        </>
    )
}
