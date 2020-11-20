import React from 'react';
import 'styles/blured-background.scss';

const BluredBackground = ({ children, onClick, rest }) => (
  <div className="blured-background" onClick={onClick} {...rest}>
    {children}
  </div>
);

export default BluredBackground;
