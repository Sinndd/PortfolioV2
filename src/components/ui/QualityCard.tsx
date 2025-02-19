import React from 'react';
import { motion } from 'framer-motion';

interface QualityCardProps {
  title: string;
  description?: string;
  illustration?: React.ReactNode;
  children?: React.ReactNode;
  titleClassName?: string; // Ajouter une prop pour les classes personnalisées du titre
  email?: string; // Ajouter une prop pour l'adresse e-mail
  singleDiv?: boolean; // Ajouter une prop pour contrôler si le contenu doit être dans un seul div
}

const QualityCard: React.FC<QualityCardProps> = ({ title, description, illustration, children, titleClassName, email, singleDiv }) => {
  const handleEmailClick = () => {
    if (email) {
      navigator.clipboard.writeText(email);
      alert('Adresse e-mail copiée dans le presse-papiers');
    }
  };

  return (
    <motion.div
      className={`relative bg-neutral-900 text-white rounded-2xl shadow-inner overflow-hidden h-full flex flex-col ${title === "Contact me" ? "justify-center" : "justify-between"}`}
      style={{ boxShadow: 'inset 0 0 20px 10px rgba(156, 163, 175, 0.5)' }}
    >
      {title === "Contact me" && (
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/monLogo.png')" }}></div>
      )}
      <div className="relative flex flex-col items-center h-full justify-center">
        {singleDiv ? (
          <div className="w-full p-7">
            {children}
            <h3 className={`text-xl font-bold ${titleClassName}`}>{title}</h3>
            {description && <p className="mt-2 text-sm">{description}</p>}
            {email && (
              <div className="flex justify-center mt-4">
                <button
                  className="email-button text-sm"
                  onClick={handleEmailClick}
                >
                  <span className="flex email-text align-center justify-center">{email}</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="mb-2 w-full h-full flex justify-center items-center"> {/* Réduire l'espacement */}
              {illustration}
            </div>
            <div className="w-full p-7 text-center">
              {children}
              <h3 className={`text-xl font-bold ${titleClassName}`}>{title}</h3>
              {description && <p className="mt-2 text-sm">{description}</p>}
              {email && (
                <div className="flex justify-center mt-4">
                  <button
                    className="email-button text-sm"
                    onClick={handleEmailClick}
                  >
                    <span className="flex email-text align-center justify-center">{email}</span>
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default QualityCard;