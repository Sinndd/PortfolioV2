"use client";

import React from 'react';
import QualityCard from './QualityCard';
import { FaSmile, FaLightbulb } from 'react-icons/fa';
import FloatingLogos from './FloatingLogos';
import MatrixEffect from './MatrixEffect';

const About = () => {
  return (
    <section id="about" className="md:mt-5 min-h-screen flex flex-col justify-center">
      <div className="mt-4 mx-auto grid w-full grid-cols-1 md:grid-cols-6 gap-4 md:max-w-full my-20 auto-rows-fr flex-grow">
        <div className="col-span-1 md:col-span-3 lg:col-span-4 h-[255px] md:h-auto">
          <QualityCard
            title="Curious"
            description="I love learning new languages."
            illustration={<FaLightbulb className="w-10 h-10 text-yellow-500" />}
          />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-2 md:row-span-2 h-[255px] md:h-auto">
          <QualityCard
            title="Positivity"
            description="I maintain a positive attitude in all situations."
            illustration={<FaSmile className="w-10 h-10 text-green-500" />}
          />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-2 md:row-span-2 h-[255px] md:h-auto">
          <QualityCard
            title="Techno"
            description="Technologies I use."
            illustration={<FloatingLogos />}
            singleDiv={true}
          />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-2 h-[255px] md:h-auto">
          <QualityCard
            title="Contact me"
            titleClassName="shiny-text w-full -translate-y-4 text-center text-5xl font-bold text-balance"
            email="votre.email@example.com"
            singleDiv={true}
          />
        </div>
        <div className="col-span-1 md:col-span-6 lg:col-span-4 h-[255px] md:h-auto relative">
          <QualityCard
            title="Versatile"
            description="I love learning new languages."
            illustration={<MatrixEffect />}
            singleDiv={true} // Passer la prop singleDiv pour cet encart
          />
        </div>
        {/* Ajoutez plus de QualityCard ici selon vos besoins */}
      </div>
    </section>
  );
};

export default About;