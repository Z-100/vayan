import React from 'react'
import {ProjectSection} from "../../../../components";
import {featuredProjectsData} from "../../../../domain/mock-db/featured-projects-data";

export const FeaturedProjectsContainer = () => {

    return (
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
    )
}
