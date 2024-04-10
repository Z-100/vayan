import React from 'react'
import {ProjectSection} from "../../../components";
import {featuredProjectsData} from "../../../domain";

export const FeaturedProjectsContainer = () => {

    return (
        <>
            <h2 className="mt-5 ml-5">Featured Projects</h2>
            <div className="flex flex-wrap justify-evenly py-6">
                    {featuredProjectsData.map((project, index) => (
                        <ProjectSection key={index}
                                        name={project.name}
                                        shortDesc={project.shortDesc}
                                        desc={project.desc}
                                        url={project.url}
                                        image={project.img}/>
                    ))}
            </div>
        </>
    )
}
