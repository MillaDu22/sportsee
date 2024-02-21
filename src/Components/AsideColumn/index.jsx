import './AsideColumn.css';
import Card from '../Card/index.jsx';
import CaloriesIcon from '../../assets/images/calories-icon.png';
import ProteinesIcon from '../../assets/images/proteines-icon.png';
import GlucidesIcon from '../../assets/images/glucides-icon.png';
import LipidesIcon from '../../assets/images/lipidesicon.png';
//import USER_MAIN_DATA from '../../Services/DataMock.js';
//import React, { useState, useEffect } from 'react';

function AsideColumn() {
    return (
        <div className = "column-cards"> 
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

/*function AsideColumn() {
    const [keyData, setKeyData] = useState(null);

    useEffect(() => {
        // Fetch data user Cecilia //
        const fetchUserMainData = async () => {
            const userData = USER_MAIN_DATA[18]; // Utilisateur avec l'ID 18 //
            if (userData) {
                const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData.keyData;
                setKeyData({ calorieCount, proteinCount, carbohydrateCount, lipidCount });
            }
        };
        fetchUserMainData();
    }, []);
    return (
        <div className="column-cards">
            {keyData !== null && ( 
                <>
                <span className = "back-card">
                    <Card name = "Calories" quantity = { `${ keyData.calorieCount } kCal` } cover = { CaloriesIcon } />
                </span>
                <span className = "back-card">
                    <Card name = "Protéines" quantity = { `${keyData.proteinCount } g` } cover = { ProteinesIcon } />
                </span>
                <span className = "back-card">
                    <Card name = "Gucides" quantit = { `${keyData.carbohydrateCount } g` } cover = { GlucidesIcon } /> 
                </span>
                <span className = "back-card">
                    <Card name = "Lipides" quantity = { `${keyData.lipidCount } g` } cover= { LipidesIcon } />
                </span>
            </>
            )}
        </div>
    )
}
export default AsideColumn;*/

