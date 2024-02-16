import './Card.css';

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