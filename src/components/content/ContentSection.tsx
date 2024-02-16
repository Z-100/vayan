import React from 'react'

type ImagePos = 'left' | 'right' | 'top'
type TextPos = 'left' | 'right' | 'centered'

interface TextSectionProps {
    title: string,
    text: string,
    textPos?: TextPos,
    image?: string,
}

export const ContentSection = ({title, text, textPos = 'left', image}: TextSectionProps) => {

    function getImagePos(textPos: TextPos): ImagePos {
        if (textPos === 'left') return 'right'
        if (textPos === 'right') return 'left'
        if (textPos === 'centered') return 'top'

        throw Error(`Unknown property: ${textPos}`)
    }

    const imagePos = getImagePos(textPos)

    if (image) {
        return (
            <div>
                <h1>{title}</h1>
                <p>{text}</p>
                <img className={"text-" + imagePos} src={image} alt={title}/>
            </div>
        );
    }

    return (
        <div>
            <h1>{title}</h1>
            <p className={"text-" + textPos}>{text}</p>
        </div>
    )
}
