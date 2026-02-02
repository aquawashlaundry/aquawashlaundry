import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Laundry Wash',
      icon: 'fa-shirt',
      description: 'Professional washing with quality detergents',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      name: 'Ironing',
      icon: 'fa-fire-flame-simple',
      description: 'Crisp, wrinkle-free ironing service',
      color: 'from-aqua-400 to-aqua-600',
    },
    {
      id: 3,
      name: 'Dry Clean',
      icon: 'fa-spray-can',
      description: 'Expert dry cleaning for delicate fabrics',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      id: 4,
      name: 'Roll Press',
      icon: 'fa-roller',
      description: 'Professional roll pressing for perfect finish',
      color: 'from-blue-500 to-aqua-500',
    },
    {
      id: 5,
      name: 'Petrol Wash',
      icon: 'fa-droplet',
      description: 'Specialized petrol wash for tough stains',
      color: 'from-aqua-500 to-blue-500',
    },
    {
      id: 6,
      name: 'Color Wash',
      icon: 'fa-palette',
      description: 'Color-safe washing to preserve vibrancy',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive laundry solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl`}>
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">
                {service.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

