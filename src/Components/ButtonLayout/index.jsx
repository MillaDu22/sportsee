import React from 'react';
import './ButtonLayout.css';

function ButtonLayout({ logoSrc, altText }) {
    return (
        <button className = "nav-button">
            <img src = { logoSrc } className = "nav-logo" alt = { altText } />
        </button>
    );
}
export default ButtonLayout;