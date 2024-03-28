import React from 'react'
import {ProjectSection} from "../../../../components";
import {plannedProjectsData} from "../../../../domain/mock-db/planned-projects-data";

export const PlannedProjectsContainer = () => {

    return (
        <div className="flex flex-wrap gap-6 p-6">
            {plannedProjectsData.map((project, index) => (
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
