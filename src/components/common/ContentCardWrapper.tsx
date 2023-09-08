import React from 'react'
import {CardContent} from "../../models";
import { Button } from "./Button"

interface ContentCardWrapperProps {
    cards: CardContent[]
}

export const ContentCardWrapper = ({cards}: ContentCardWrapperProps) => {

    return (
        <div className="flex justify-center min-h-screen items-center bg-gray-100">

            <div className="grid grid-cols-4 gap-6">

                {cards.map((card, index) => (

                    <div key={index}
                         className="bg-white rounded-lg shadow-lg p-6 transform">

                        <img src={`/public/images/${card.image}.png`}
                             alt={card.title} className="w-full h-48 object-cover rounded-t-lg"
                        />

                        <h2 className="text-2xl font-semibold mt-4">{card.title}</h2>
                        <p className="text-gray-700 mt-2 text-lg">{card.shortDesc}</p>

                        <Button url={card.url}
                                text="View on GitHub" />
                    </div>
                ))}

            </div>

        </div>

    )
}
