import React from 'react';

const LogoComponent = ({ className, ...props }) => (
  <div className={`logo-container ${className || ''}`} {...props}>
    <div className="logo-icon">
      🦷
    </div>
    <div className="logo-text">
      <div className="logo-title">ODONTÓLOGA</div>
      <div className="logo-subtitle">NATALIA ORTIZ</div>
    </div>
  </div>
);

export default LogoComponent;