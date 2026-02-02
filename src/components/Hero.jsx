import React from 'react';

const Hero = () => {
  const phoneNumber = '9726559892';
  const whatsappNumber = '9726559892';
  const defaultMessage = encodeURIComponent("Hello AquaWash Laundry, I'd like to inquire about your services.");

  return (
    <section className="relative bg-gradient-to-br from-aqua-500 via-aqua-400 to-blue-500 text-white py-20 md:py-32 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow animate-fade-in">
            AquaWash Laundry
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-aqua-50 font-light">
            Fresh. Clean. Reliable Laundry Service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <a
              href={`tel:+91${phoneNumber}`}
              className="bg-white text-aqua-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <i className="fas fa-phone"></i>
              Call Now
            </a>
            
            <a
              href={`https://wa.me/91${whatsappNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <i className="fab fa-whatsapp"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

