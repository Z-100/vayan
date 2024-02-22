import React from 'react'
import {TextSection} from "../../domain";

type ImagePos = 'left' | 'right' | 'top'
type TextPos = 'left' | 'right' | 'centered'

interface ContentSectionProps {
    textSection: TextSection,
    textPos?: TextPos,
    image?: string,
}

export const ContentSection = ({textSection, textPos = 'left', image}: ContentSectionProps) => {

    function getImagePos(textPos: TextPos): ImagePos {
        if (textPos === 'left') return 'right'
        if (textPos === 'right') return 'left'
        if (textPos === 'centered') return 'top'

        throw Error(`Unknown property: ${textPos}`)
    }

    const imagePos = getImagePos(textPos)

    if (image) {
        return (
            <div className="flex flex-row">
                <div>
                    <h1>{textSection.title}</h1>
                    <p>{textSection.text}</p>
                </div>
                <img className={"text-" + imagePos} src={image} alt={textSection.title}/>
            </div>
        );
    }

    return (
        <div>
            <h1>{textSection.title}</h1>
            <p className={"text-" + textPos}>{textSection.text}</p>
        </div>
    )
}
