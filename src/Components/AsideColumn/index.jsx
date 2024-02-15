import './AsideColumn.css';
import Card from '../Card/index.jsx';
import CaloriesIcon from '../../assets/images/calories-icon.png';
import ProteinesIcon from '../../assets/images/proteines-icon.png';
import GlucidesIcon from '../../assets/images/glucides-icon.png';
import LipidesIcon from '../../assets/images/lipidesicon.png';

function AsideColumn() {
    return (
        <div className = "container-cards"> 
            <span className = "back-card">
                <Card name = "Calories" quantity = "2500kCal" cover = { CaloriesIcon } />
            </span>
            <span className = "back-card">
                <Card name = "Protéines" quantity = "90g" cover = { ProteinesIcon } />
            </span>
            <span className = "back-card">
                <Card name = "Gucides" quantity = "150g" cover = { GlucidesIcon } /> 
            </span>
            <span className = "back-card">
                <Card name = "Lipides" quantity = "120g" cover= { LipidesIcon } />
            </span>
        </div>
    )
}
export default AsideColumn;