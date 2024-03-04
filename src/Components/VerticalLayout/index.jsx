import './verticalLayout.css';
import Button from '../ButtonLayout/index.jsx';
import LogoMeditation from '../../assets/images/icon-meditation.png';
import LogoSwimming from '../../assets/images/icon-swiming.png';
import LogoBiker from '../../assets/images/icon-biker.png';
import LogoBodyBuilding from '../../assets/images/icon-body-building.png';
import Copyright from '../../assets/images/copyright.png';

/**
 * Composant React représentant une disposition verticale de boutons.
 * @returns {JSX.Element} - Élément JSX représentant la disposition verticale de boutons.
 */
function VerticalLayout() {
    const buttons = [   
        { logoSrc: LogoMeditation, altText: 'logo-meditation' },
        { logoSrc: LogoSwimming, altText: 'logo-swimming' },
        { logoSrc: LogoBiker, altText: 'logo-biker' },
        { logoSrc: LogoBodyBuilding, altText: 'logo-body-building' }
    ];   
    return (
        <div className = "vertical-layout">
            <nav className = "nav-vertical-layout">
                { buttons.map(( button, index ) => (
                <Button key = { index } logoSrc = { button.logoSrc } altText={ button.altText } />
                ))}
            </nav>
            <img src = { Copyright } className = "copyright" alt = "copyright"/>
        </div>
    )
}
export default VerticalLayout;