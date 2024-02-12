import './verticalLayout.css';
import LogoMeditation from '../../assets/images/icon-meditation.png';
import LogoSwiming from '../../assets/images/icon-swiming.png';
import LogoBiker from '../../assets/images/icon-biker.png';
import LogoBodyBuilding from '../../assets/images/icon-body-building.png';
import Copyright from '../../assets/images/copyright.png';

function VerticalLayout() {
    return (
        <div className ="vertical-layout">
            <nav className = "nav-vertical-layout">
                <img src = {LogoMeditation} className = "logo-button" alt = "logo-meditation"/>
                <img src = {LogoSwiming} className = "logo-button" alt = "logo-swiming"/>
                <img src = {LogoBiker} className = "logo-button" alt = "logo-biker"/>
                <img src = {LogoBodyBuilding} className = "logo-button" alt = "logo-body-building"/>
            </nav>
            <img src = {Copyright} className = "copyright" alt="copyright"/>
        </div>
    )
}
export default VerticalLayout;