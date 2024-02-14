import './Error.css';
import { Link } from 'react-router-dom';
import Header from '../Header/index.jsx';

function Error() {
    return (
        <div className= "error-page">
            <Header />
            <p className ="oups">Oups</p>
            <p className ="erreur">Une erreur s'est produite</p>
            <Link className="link-retour" to="/" exact="true">Retour vers le tableau de bord</Link>
        </div>
    )
}
export default Error;