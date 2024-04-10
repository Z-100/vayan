import React from 'react'
import {TextSection} from "../../domain";

type TextPos = 'left' | 'right' | 'centered'

interface ContentSectionProps {
    textSection: TextSection,
    textPos?: TextPos,
}

export const ContentSection = ({textSection, textPos = 'left'}: ContentSectionProps) => {

    function mapTextToParagraph(text: string | string[], textPos: TextPos): JSX.Element {

        if (Array.isArray(text)) {
            return (
                <ul className="mb-8 ml-6 list-disc">
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

    return (
        <div className="my-5">
            <h2 className="mb-2">{textSection.title}</h2>
            {mapTextToParagraph(textSection.text, textPos)}
            {textSection.subSection && textSection.subSection.map((subSection, i) => (
                <span key={i}>
                    <h3 className="mb-1 mt-2">{subSection.title}</h3>
                    {mapTextToParagraph(subSection.text, textPos)}
                </span>
            ))}
        </div>
    );
}
