import React from 'react'

interface ButtonProps {
    url: string,
    openInNewTab: boolean
    text: string,
}

export const Button = ({ url, openInNewTab, text }: ButtonProps) => {

    return(
        <a href={url} target={openInNewTab ? '_blank' : ''} className="transform transition-transform duration-300 hover:scale-105">
            <div className="bg-primary rounded-2xl h-8 dark:bg-light-primary transition-colors duration-300 hover:bg-opacity-80">
                <p className="text-center text-white">{text}</p>
            </div>
        </a>
    )
}
