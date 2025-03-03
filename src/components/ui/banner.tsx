import React from 'react';
import Image from 'next/image';

const Banner = () => {
  const items = [
    'Adaptability',
    'Teamwork',
    'Creativity',
    'Patience',
    'Problem Solving'
  ];

  return (
    <div className="banner-container">
      <div className="banner-back"></div>
      <div className="banner-front">
        <div className="banner-content">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex shrink-0 justify-around items-center [gap:var(--gap)] animate-marquee flex-row">
              {/* Dupliquer les éléments deux fois pour une boucle fluide */}
              {items.concat(items).map((item, index) => (
                <span key={`${item}-${index}`} className="text-sm font-semibold uppercase leading-6 tracking-[0.2em] text-gray-50 md:text-lg lg:text-xl flex items-center">
                  <Image src="/icons/star.png" alt="star" width={28} height={28} className="mr-2 filter invert" />
                  {item}
                </span>
              ))}
              {items.concat(items).map((item, index) => (
                <span key={`${item}-duplicate-${index}`} className="text-sm font-semibold uppercase leading-6 tracking-[0.2em] text-gray-50 md:text-lg lg:text-xl flex items-center">
                  <Image src="/icons/star.png" alt="star" width={28} height={28} className="mr-2 filter invert" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;