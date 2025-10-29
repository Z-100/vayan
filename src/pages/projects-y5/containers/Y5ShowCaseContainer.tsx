import React from 'react';
import {y5ImageData} from '../../../domain';

export const Y5ShowCaseContainer = () => {
    return (
        <div className="px-5 py-6 space-y-10">
            <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>

            {y5ImageData.map((image, index) => (
                <div key={index}
                     className="w-full flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden">
                    <h3 className="text-2xl font-semibold mt-4">{image.name}</h3>
                    <p className="text-gray-600 mb-4 px-4 text-left">
                        {image.shortDesc.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <img
                        src={image.url}
                        alt={image.shortDesc}
                        className="w-full max-w-4xl h-auto object-cover"
                    />
                </div>
            ))}
        </div>
    );
};
