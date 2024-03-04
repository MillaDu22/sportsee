import './Card.css';

/**
 * Composant fonctionnel représentant une carte avec une image de couverture, une quantité et un nom.
 * @param {Object} props - Les propriétés de la carte.
 * @param {string} props.cover - L'URL de l'image de couverture.
 * @param {number} props.quantity - La quantité associée à la carte.
 * @param {string} props.name - Le nom de la carte.
 * @returns {JSX.Element} - Élément JSX représentant la carte.
 */
const Card = ({ cover, quantity, name }) => {
    return (
        <div className = "box-card">
            <img src = { cover } alt = { name } className ="logo-card" />
            <span className = "card-content">
                <h5 className = "quantity">{ quantity }</h5>
                <p className ='name'>{ name }</p>
            </span>
        </div>
    )
}
export default Card;