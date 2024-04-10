import React from 'react'
import {TextSection} from "../../domain";

type TextPos = 'left' | 'right' | 'centered'

interface ContentSectionProps {
    textSection: TextSection,
    textPos?: TextPos,
}

export const ContentSection = ({textSection, textPos = 'left'}: ContentSectionProps) => {


    function mapTextToP(text: string | string[], textPos: TextPos): JSX.Element {

        if (typeof text !== 'string') {
            return (
                <ul className="mb-8 ml-5 list-disc">
                    {text?.map((li, index) => (
                        <li key={index} className="mb-2">{li}</li>
                    ))}
                </ul>
            );
        }

        return (
            <div className="mb-8">
                {text.split("\n").map((line, i) => (
                    <p className={"text-" + textPos} key={i}>{line || <br/>}</p>
                ))}
            </div>
        );
    }

    if (!textSection.subTexts) {
        return (
            <div className="my-5">
                <h2 className="mb-2">{textSection.title}</h2>
                {mapTextToP(textSection.text, textPos)}
            </div>
        );
    }

    return (
        <div className="my-5">
            <h2 className="mb-2">{textSection.title}</h2>
            {mapTextToP(textSection.text, textPos)}
            {textSection.subTexts!.map((text, i) => (
                <>
                    <h3 className="mb-1 mt-2">{text.title}</h3>
                    {mapTextToP(text.text, textPos)}
                </>
            ))}
        </div>
    );
}

