import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloatingLogos: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Sphere geometry
    const radius = 6;

    // Texture loader
    const textureLoader = new THREE.TextureLoader();

    // Logos
    const logos = [
      '/logos/php.svg',
      '/logos/javascript.svg',
      '/logos/react.svg',
      '/logos/nextdotjs.svg',
      '/logos/nodedotjs.svg',
      '/logos/html5.svg',
      '/logos/css3.svg',
      '/logos/vercel.svg',
      '/logos/git.svg',
      '/logos/github.svg',
      '/logos/npm.svg',
      '/logos/shadcnui.svg',
      '/logos/tailwindcss.svg',
      '/logos/mysql.svg',
      '/logos/symfony.svg',
      '/logos/typescript.svg',
      '/logos/gsap.svg',
    ];

    // Add logos to the sphere
    logos.forEach((logo, index) => {
      const texture = textureLoader.load(logo);
      const material = new THREE.SpriteMaterial({ map: texture, color: 0xffffff });
      const sprite = new THREE.Sprite(material);

      const phi = Math.acos(-1 + (2 * index) / logos.length);
      const theta = Math.sqrt(logos.length * Math.PI) * phi;

      sprite.position.setFromSphericalCoords(radius, phi, theta);
      sprite.scale.set(2, 2, 2); // Ajustez la taille des logos
      scene.add(sprite);
    });

    // Animation
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Vitesse de rotation constante
      scene.rotation.x -= 0.001; // Rotation verticale
      scene.rotation.y += 0.0005; // Rotation horizontale

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="relative w-full h-full flex justify-center items-center" style={{ height: '100%' }} />;
};

export default FloatingLogos;