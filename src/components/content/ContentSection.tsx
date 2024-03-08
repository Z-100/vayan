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

        throw Error(`Unknown property: ${textPos}`);
    }

    function mapTextToP(text: string, textPos: TextPos): JSX.Element {
        return(
            <>
                {text.split("\n").map((line, i) => (
                    <>
                        {line === '' && <br/> /* Ik this is a cheap solution */}
                        <p className={"text-" + textPos} key={i}>{line}</p>
                    </>
                ))}
            </>
        );
    }

    const imagePos = getImagePos(textPos)

    if (image) {
        return (
            <div className="flex flex-row my-5">
                <div>
                    <h1>{textSection.title}</h1>
                    {mapTextToP(textSection.text, textPos)}
                </div>
                <img className={"text-" + imagePos} src={image} alt={textSection.title}/>
            </div>
        );
    }

    return (
        <div className="my-5">
            <h1 className="mb-2">{textSection.title}</h1>
            {mapTextToP(textSection.text, textPos)}
        </div>
    );
}

