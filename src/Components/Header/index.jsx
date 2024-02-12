import './Header.css';
import LogoHeader from '../../assets/logo/logo-header-sportsee.png';

function Header() {
    return (
        <div className ="header">
            <img src = {LogoHeader} className = "logo-sportsee" alt = "logo-sportsee"/>
            <nav className = "nav-header">
                <ul className= "ul-nav-header">
                    <li className ="li-ul-nav-header">
                        <p className = "a-li-ul-nav-header">Accueil</p>
                    </li>
                    <li className ="li-ul-nav-header">
                        <p className = "a-li-ul-nav-header">Profil</p>
                    </li>
                    <li className ="li-ul-nav-header">
                        <p className = "a-li-ul-nav-header">Réglage</p>
                    </li>
                    <li className ="li-ul-nav-header">
                        <p className = "a-li-ul-nav-header">Communauté</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;