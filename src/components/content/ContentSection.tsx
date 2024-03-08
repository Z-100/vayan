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
        return (
            <>
                {text.split("\n").map((line, i) => (
                    <>
                        { /* Ik this is a cheap solution */
                            line === 'br' ? <br/> : <p className={"text-" + textPos} key={i}>{line}</p>
                        }
                    </>
                ))}
            </>
        );
    }

    const imagePos = getImagePos(textPos)

    if (!textSection.texts && image) {
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

    if (!textSection.texts) {
        return (
            <div className="my-5">
                <h1 className="mb-2">{textSection.title}</h1>
                {mapTextToP(textSection.text, textPos)}
            </div>
        );
    }

    return (
        <div className="my-5">
            <h1 className="mb-2">{textSection.title}</h1>
            {mapTextToP(textSection.text, textPos)}
            {textSection.texts!.map((text, i) => (
                <>
                    <h2 className="mb-1 mt-2">{text.title}</h2>
                    {mapTextToP(text.text, textPos)}
                </>
            ))}
        </div>
    );
}

