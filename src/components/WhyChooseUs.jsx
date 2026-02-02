import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Fast Service',
      description: 'Quick turnaround times without compromising quality',
      icon: 'fa-bolt',
      color: 'text-yellow-500',
    },
    {
      id: 2,
      title: 'Affordable Pricing',
      description: 'Competitive rates that fit your budget',
      icon: 'fa-indian-rupee-sign',
      color: 'text-green-500',
    },
    {
      id: 3,
      title: 'Quality Cleaning',
      description: 'Premium detergents and modern equipment for best results',
      icon: 'fa-star',
      color: 'text-aqua-500',
    },
    {
      id: 4,
      title: 'Trusted Local Laundry',
      description: 'Serving the community with reliability and care',
      icon: 'fa-handshake',
      color: 'text-blue-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            We're committed to providing exceptional laundry services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className={`text-4xl mb-4 ${feature.color}`}>
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

