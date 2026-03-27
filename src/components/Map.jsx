import React, { useMemo, useState } from "react";

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const businessName = "AquaWash Laundry";
  const address =
    "Shop no.11, Asthaa Homes, New Vasna, Vishala, Ahmedabad";

  const placeQuery = `${businessName}, ${address}`;
  const encodedPlaceQuery = encodeURIComponent(placeQuery);
  const encodedAddressOnly = encodeURIComponent(address);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "";

  const mapUrl = useMemo(() => {
    if (apiKey) {
      return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(
        apiKey
      )}&q=${encodedPlaceQuery}&zoom=16`;
    }
    return `https://www.google.com/maps?q=${encodedAddressOnly}&output=embed&z=16`;
  }, [apiKey, encodedPlaceQuery, encodedAddressOnly]);

  const directionsLink = "https://maps.app.goo.gl/1CPx7Remr3zCd2x48";

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find Us
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-2">
            Visit us at our location
          </p>
          <div className="flex items-center justify-center gap-2 text-aqua-600 font-medium">
            <i className="fas fa-map-marker-alt"></i>
            <p>{address}</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative">
          <div className="absolute top-4 left-4 z-10 bg-white rounded-lg px-4 py-2 shadow-lg flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-800">
              {businessName}
            </span>
          </div>

          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={mapUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${businessName} Location`}
              onLoad={() => setMapLoaded(true)}
            ></iframe>
            {!mapLoaded && (
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <i className="fas fa-map-marked-alt text-4xl mb-2 block"></i>
                  <p>Loading map...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href={directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-aqua-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-aqua-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <i className="fas fa-directions"></i>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Map;
