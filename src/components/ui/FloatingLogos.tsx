import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const FloatingLogos: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 10; // Adjust camera position to accommodate larger sphere

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Sphere geometry
    const radius = 6; // Double the radius

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
      const material = new THREE.SpriteMaterial({ map: texture, color: 0xffffff }); // Adjust color to make it more vibrant
      const sprite = new THREE.Sprite(material);

      const phi = Math.acos(-1 + (2 * index) / logos.length);
      const theta = Math.sqrt(logos.length * Math.PI) * phi;

      sprite.position.setFromSphericalCoords(radius, phi, theta);
      sprite.scale.set(2, 2, 2); // Adjust size of logos
      scene.add(sprite);
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (!isHovered) {
        scene.rotation.x -= 0.001; // Adjust speed of rotation for top to bottom
        scene.rotation.y += 0.0005; // Slightly rotate on the Y axis
      }
      renderer.render(scene, camera);
    };

    animate();

    // Mouse events
    const onMouseEnter = () => {
      setIsHovered(true);
    };

    const onMouseLeave = () => {
      setIsHovered(false);
    };

    mount.addEventListener('mouseenter', onMouseEnter);
    mount.addEventListener('mouseleave', onMouseLeave);

    // Cleanup
    return () => {
      mount.removeEventListener('mouseenter', onMouseEnter);
      mount.removeEventListener('mouseleave', onMouseLeave);
      mount.removeChild(renderer.domElement);
    };
  }, [isHovered]);

  return <div ref={mountRef} className="relative w-full h-full flex justify-center items-center" style={{ height: '100%' }} />;
};

export default FloatingLogos;