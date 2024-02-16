import React from 'react'
import {ProjectContainer} from "./components";

interface Project {
    name: string,
    desc: string,
    url: string,
    img: string,
}
export const FeaturedProjectsContainer = () => {

    // @formatter:off
    // TODO: Remove temp stuff
    const projects: Project[] = [
        {name:"Vayan",          desc:"This Website",            url:"https://github.com/Z-100/vayan",           img:"/logo171.png"},
        {name:"Sömi-Weather",   desc:"Stupid stuff",            url:"https://github.com/Z-100/soemi-weather",   img:"/logo171.png"},
        {name:"GeoPal",         desc:"Geo Reminder App",        url:"https://github.com/ZE-100/GeoPal",         img:"/logo171.png"},
        {name:"BackFusion",     desc:"Kotlin and Spring Boot", url:"https://github.com/FitFusion/BackFusion",   img:"/logo171.png"},
        {name:"DayCounter",     desc:"Cute day counter app",    url:"https://github.com/ZE-100/DayCounter",     img:"/logo171.png"},
    ]
    // @formatter:on

    return (
        <div className="flex flex-wrap gap-6 p-6">
            {projects.map((project, index) => (
                <ProjectContainer key={index}
                                  name={project.name}
                                  description={project.desc}
                                  url={project.url}
                                  image={project.img}/>
            ))}
        </div>
    )
}
