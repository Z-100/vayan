import React from 'react'
import {Link} from "react-router-dom";
import {Project} from "../../domain";

interface ProjectSectionProps {
    project: Project;
}

export const ProjectSection = ({project}: ProjectSectionProps) => {

    const {name, shortDesc, desc, url, img} = project;

    return (
        <>
            <div
                className="p-4 m-2 bg-dark-4 border-[1px] border-light-0 w-96 h-min-48 rounded-lg shadow-md overflow-hidden bg-opacity-50 md:bg-opacity-50 hover:bg-opacity-70 hover:bg-dark-5 transition">
                <span className="flex">
                    <img src={img}
                         alt={name}
                         className="mr-5 w-20 h-20 rounded-lg"/>
                    <span>
                        <Link to={url}
                              target="_blank"
                              className="w-full h-48 object-cover">
                            <h3 className="text-lg font-bold py-2 pr-2 hover:underline focus:underline text-link-2 visited:text-link-1">GitHub/{name}</h3>
                        </Link>
                        <p className="text-gray-700 text-base">{shortDesc}</p>
                    </span>
                </span>
                <p className="mt-2 text-sm">{desc}</p>
            </div>
        </>
    )
}
