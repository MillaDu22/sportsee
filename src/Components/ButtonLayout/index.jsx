import React from 'react';
import './ButtonLayout.css';

/**
 * Composant de bouton avec une image logo.
 * @param {Object} props - Les propriétés du bouton.
 * @param {string} props.logoSrc - L'URL de l'image du logo.
 * @param {string} props.altText - Le texte alternatif pour l'image du logo.
 * @returns {JSX.Element} - Élément JSX représentant le bouton avec le logo.
 */
function ButtonLayout({ logoSrc, altText }) {
    return (
        <button className = "nav-button">
            <img src = { logoSrc } className = "nav-logo" alt = { altText } />
        </button>
    );
}
export default ButtonLayout;