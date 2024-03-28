import React from 'react'
import {Link} from "react-router-dom";

interface ProjectSectionProps {
    name: string,
    shortDesc: string,
    desc: string,
    url: string,
    image: string,
}
export const ProjectSection = ({ name, shortDesc, desc, url, image }: ProjectSectionProps) => {
    return (
        <>
            <div className="p-4 m-2 bg-dark-4 border-[1px] border-light-0 w-96 h-min-48 rounded-lg shadow-md overflow-hidden hover:bg-dark-5 transition">
                <span className="flex">
                    <img src={image}
                         alt={name}
                         className="mr-5 w-20 h-20 rounded-lg"/>
                    <span>
                        <Link to={url}
                              target={"_blank"}
                              className="w-full h-48 object-cover">
                            <h3 className="text-xl font-bold mb-2">➡️ {name}</h3>
                        </Link>
                        <p className="text-gray-700 text-base">{shortDesc}</p>
                    </span>
                </span>
                <p className="mt-2 text-sm">{desc}</p>
            </div>
        </>
    )
}
