import React from 'react'
import {ProjectSection} from "../../../components";
import {plannedProjectsData} from "../../../domain";

export const PlannedProjectsContainer = () => {

    return (
        <>
            <h2 className="mt-5 ml-5">Planned Projects</h2>
            <div className="flex flex-wrap justify-evenly py-6">
                {plannedProjectsData.map((project, index) => (
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
