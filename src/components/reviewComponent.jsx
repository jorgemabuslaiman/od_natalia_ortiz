import React, { useEffect } from 'react';

export const GoogleReviews = () => {
  useEffect(() => {
    // Crear el script dinámicamente
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-5042d443-899f-4c49-b36d-64ff6170b31a" data-elfsight-app-lazy></div>
  );
};

export const ReviewComponent = () => {
  return (
    <div>
      <GoogleReviews />
    </div>
  );
}
