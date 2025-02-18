import React from 'react';

interface QualityCardProps {
  title: string;
  description: string;
  illustration: React.ReactNode;
}

const QualityCard: React.FC<QualityCardProps> = ({ title, description, illustration }) => {
  return (
    <div className="relative p-6 bg-neutral-900 text-white rounded-2xl shadow-inner overflow-hidden h-64 flex flex-col justify-end" style={{ boxShadow: 'inset 0 0 20px 10px rgba(156, 163, 175, 0.1)' }}>
      <div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] flex items-center justify-center">
        {illustration}
      </div>
      <div className="relative z-10 mt-auto">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default QualityCard;