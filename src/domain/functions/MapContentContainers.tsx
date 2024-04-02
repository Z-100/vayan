import React from "react";

export function mapContentContainers(containers: JSX.Element[]): JSX.Element {

    return (
        <div className="flex flex-col items-center">
            {containers.map((container, index) => (
                <div className="w-full my-2 px-4 border-t-[1px] border-t-light-0 md:border-none md:bg-dark-3 md:rounded-xl">
                    {container}
                </div>
            ))}
        </div>
    );
}
