import React from 'react';

const WhatsAppButton = () => {
  const whatsappNumber = '9726559892';
  const defaultMessage = encodeURIComponent("Hello AquaWash Laundry, I'd like to inquire about your services.");

  return (
    <a
      href={`https://wa.me/91${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 animate-bounce-slow hover:animate-none hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;

