import React, {useEffect, useRef} from 'react'
import {crappyNoise, crappyNoiseToColor} from "../../../domain";


export const Perlin2DContainer = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {

        let canvas = canvasRef.current;

        if (!canvas) {
            console.log("No canvas");
            return;
        }

        const canvasCtx = canvas.getContext('2d')
        if (!canvasCtx) {
            console.log("Failed loading canvas ctx")
            return;
        }

        const width = canvas.width;
        const height = canvas.height;

        const zoomScale = 12;
        const xOffset = 0;
        const yOffset = 0;

        for (let y = 0; y < width; y++) {
            for (let x = 0; x < height; x++) {

                let perlinVal = crappyNoise(x, y, width, height, zoomScale, xOffset, yOffset);
                let perlinCol = crappyNoiseToColor(perlinVal);

                canvasCtx.fillStyle = `rgba(${perlinCol}, ${perlinCol}, ${perlinCol}, 1)`
                canvasCtx.fillRect(x, y, 1, 1)
            }
        }
    }, [])

    return <canvas ref={canvasRef} id="canvas" className="w-full h-full border-red"/>;
}
