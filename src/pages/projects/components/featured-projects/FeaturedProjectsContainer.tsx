import React from 'react'
import {ProjectSection} from "../../../../components";
import {featuredProjectsData} from "../../../../domain/mock-db/featured-projects-data";

export const FeaturedProjectsContainer = () => {

    return (
        <div className="flex flex-wrap gap-6 p-6">
            <>
                {featuredProjectsData.map((project, index) => (
                    <ProjectSection key={index}
                                    name={project.name}
                                    shortDesc={project.shortDesc}
                                    desc={project.desc}
                                    url={project.url}
                                    image={project.img}/>
                ))}
            </>
            <p>For more see: https://github.com/Z-100?tab=repositories</p>
        </div>
    )
}
