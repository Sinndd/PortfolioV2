import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface QualityCardProps {
  title: string;
  description?: string;
  illustration?: React.ReactNode;
  children?: React.ReactNode;
  titleClassName?: string;
  email?: string;
  singleDiv?: boolean;
}

const QualityCard: React.FC<QualityCardProps> = ({ title, description, illustration, children, titleClassName, email, singleDiv }) => {
  const [emailText, setEmailText] = useState(email);

  const handleEmailClick = () => {
    if (email) {
      navigator.clipboard.writeText(email);
      setEmailText('Copied to clipboard !');
      setTimeout(() => {
        setEmailText(email);
      }, 4000); // Réinitialiser le texte après 2 secondes
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
      <div className="relative flex flex-col items-center justify-center h-full">
        {singleDiv ? (
          <div className="w-full p-7 text-center relative z-10">
            {children}
            <h3 className={`text-xl font-bold ${titleClassName} ${title === "Contact me" ? "text-center" : ""}`}>{title}</h3>
            {description && <p className="mt-2 text-sm">{description}</p>}
            {email && (
              <div className="flex justify-center mt-4">
                <button
                  className="email-button text-sm"
                  onClick={handleEmailClick}
                >
                  <span className="flex email-text align-center justify-center">{emailText}</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="mb-2 w-full h-full flex justify-center items-center relative z-10">
              {illustration}
            </div>
            <div className="w-full p-7 text-center relative z-10">
              {children}
              <h3 className={`text-xl font-bold ${titleClassName}`}>{title}</h3>
              {description && <p className="mt-2 text-sm">{description}</p>}
              {email && (
                <div className="flex justify-center mt-4">
                  <button
                    className="email-button text-sm"
                    onClick={handleEmailClick}
                  >
                    <span className="flex email-text align-center justify-center">{emailText}</span>
                  </button>
                </div>
              )}
            </div>
          </>
        )}
        {illustration && <div className="absolute inset-0 z-0">{illustration}</div>}
      </div>
    </motion.div>
  );
};

export default QualityCard;