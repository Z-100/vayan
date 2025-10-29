import React, {useEffect, useRef} from 'react'
import * as THREE from 'three';
import {crappyNoise} from "../../domain";

export const BackgroundProvider = () => {

    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(90, 1, 1, 100);
        camera.position.set(10, 10, 10);

        const renderer = new THREE.WebGLRenderer();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        renderer.setSize(windowWidth, windowHeight);

        camera.aspect = windowWidth / windowHeight;
        camera.updateProjectionMatrix();

        mountRef.current!.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(60, 60, 100, 100);
        const material = new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            wireframe: true,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        scene.add(mesh);

        const light = new THREE.DirectionalLight(0xFFFFFF, 0.75);
        light.position.set(0, 10, 1);
        scene.add(light);

        const pos = geometry.attributes.position;
        pos.needsUpdate = true;

        const width = 256;
        const height = 256;

        let mouseX = 0;
        let mouseY = 0;

        const onMouseMove = (e: MouseEvent) => {
            const rect = mountRef.current!.getBoundingClientRect();
            mouseX = (e.clientX - rect.left) / rect.width;
            mouseY = (e.clientY - rect.top) / rect.height;
        };

        window.addEventListener("mousemove", onMouseMove);

        window.addEventListener("resize", () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        const clock = new THREE.Clock();
        let autoX = 0;
        let autoY = 0;

        const animate = () => {
            requestAnimationFrame(animate);

            const delta = clock.getDelta();

            autoX += delta * 0.1;
            autoY += delta * -0.05;

            const zoomScale = Math.min(Math.max(30 / Math.abs(mouseY || 0.1), 20), 75) * 0.75;

            const xOffset = (mouseX / 2 + 100) + autoX;
            const yOffset = (mouseY / 2 + 100) + autoY;

            const amplifier = 10;

            for (let i = 0; i < pos.count; i++) {
                const x = pos.getX(i);
                const y = pos.getY(i);
                const z = crappyNoise(x, y, width, height, zoomScale, xOffset, yOffset) * amplifier;
                pos.setZ(i, z);
            }

            pos.needsUpdate = true;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} id="canvas-3d" className="fixed inset-0 z-[-1] pointer-events-none"/>;
};
