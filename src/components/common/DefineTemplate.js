import React from 'react';
import '../../styles/Common.css';

const DefineTemplate = ({ title, text }) => (
  <div className="define-container">
    <h2 className="define-title">{title}</h2>
    <p className="define-text">{text}</p>
  </div>
);

export default DefineTemplate;
