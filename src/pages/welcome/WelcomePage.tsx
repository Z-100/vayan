import React from 'react'
import {ContentCardWrapper} from "../../components";
import {CardContent} from "../../models";

export const WelcomePage = () => {


    const cards: CardContent[] = [
        {title: "Hello", shortDesc: "How could you say that??", image: "test", url: "https://github.com/z-100"},
        {title: "Zuko", shortDesc: "Amazing how this works", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
        {title: "Here", shortDesc: "Wow so cool", image: "test", url: "https://github.com/z-100"},
    ];

    return(
        <>
            <ContentCardWrapper cards={cards} />
        </>
    )
}
