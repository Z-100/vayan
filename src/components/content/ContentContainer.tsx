import React from "react";

interface ContentContainerProps {
    containers: JSX.Element[]
}

export const ContentContainer = ({containers}: ContentContainerProps) => {

    return (
        <div className="w-full md:w-[50%] mx-auto flex flex-col items-center">
            {containers.map((container, i) => (
                <div
                    className={`w-full my-2 px-4 border-t-[1px] border-t-light-0 md:border-none md:rounded-xl ${i === 0 && 'border-none'} backdrop-blur-md md:backdrop-blur-sm`}>
                    {container}
                </div>
            ))}
        </div>
    );
}
