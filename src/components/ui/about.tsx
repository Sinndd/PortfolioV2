import React from 'react';
import QualityCard from './QualityCard';
import { FaSmile, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="p-4">
      <h2 className="text-3xl font-bold">About</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <QualityCard
          title="Versatile"
          description="I love learning new languages."
          illustration={<FaLightbulb className="w-10 h-10 text-yellow-500" />}
        />
        <QualityCard
          title="Positivity"
          description="I maintain a positive attitude in all situations."
          illustration={<FaSmile className="w-10 h-10 text-green-500" />}
        />
        <QualityCard
          title="Innovation"
          description="I strive to innovate and improve constantly."
          illustration={<FaRocket className="w-10 h-10 text-red-500" />}
        />
        {/* Ajoutez plus de QualityCard ici selon vos besoins */}
      </div>
    </section>
  );
};

export default About;