import React from 'react'
import {socialMediaElements} from "../../domain";
import {ContactFormContainer} from "./contact";

export const Footer = () => {

    return(
        <div className="sticky w-full h-min-40 p-8 bg-dark-0 flex flex-col items-center justify-center pb-20 sm:pb-8 ">
            <ul className="flex flex-row mb-5">
                {socialMediaElements.map((social, index) => (
                    <li key={index} className="m-2 sm:px-2">
                        <a href={social.url}
                           target="_blank"
                           rel="noopener noreferrer">
                            {<social.icon className="text-light-0 hover:text-light-1 focus:text-light-1 select transition-colors ease-in-out duration-300 h-8 w-auto sm:h-12" />}
                        </a>
                    </li>
                ))}
            </ul>
            <ContactFormContainer/>
            <p className="text-light-2 mt-5">© Copyright 2024 Z-100</p>
        </div>
    )
}
