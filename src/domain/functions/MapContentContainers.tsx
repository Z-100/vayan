import React from "react";

export function mapContentContainers(containers: JSX.Element[]): JSX.Element {

    return (
        <div className="flex flex-col items-center">
            {containers.map((container, index) => (
                <div className="w-full md:bg-dark-3 my-2 px-4 md:rounded-xl">
                    {container}
                </div>
            ))}
        </div>
    );
}
