import React, {useEffect, useRef } from 'react'
import {crappyNoise, crappyNoiseToColor} from "../../../domain";
import * as THREE from 'three';



export const Perlin3DContainer = () => {

    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(90, 1, 1, 100);

        camera.position.z = 10;
        camera.position.y = 10;
        camera.position.x = 10;
        camera.rotateX(Math.PI / 2 * 3.4)

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(512, 512);
        mountRef.current!.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(60, 60, 100, 100);
        const material = new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            wireframe: true,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        scene.add(mesh);

        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(0, 1, 1);
        scene.add(light);

        geometry.attributes.position.needsUpdate = true;
        const pos = geometry.attributes.position;

        const width = 256;
        const height = 256;

        const zoomScale = 50;
        const amplifier = 10;
        const xOffset = 5;
        const yOffset = 5;

        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);
            const z = crappyNoise(x, y, width, height, zoomScale, xOffset, yOffset) * amplifier;
            pos.setZ(i, z);
        }

        const animate = () => {
            requestAnimationFrame(animate);
            mesh.rotation.z += 0.002;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} id="canvas-3d" className="w-full h-full border-red" />;
}
