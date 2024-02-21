import './AsideColumn.css';
import Card from '../Card/index.jsx';
import CaloriesIcon from '../../assets/images/calories-icon.png';
import ProteinesIcon from '../../assets/images/proteines-icon.png';
import GlucidesIcon from '../../assets/images/glucides-icon.png';
import LipidesIcon from '../../assets/images/lipidesicon.png';
import { getUserMainData } from '../../Services/DataMock.js';
import React, { useState, useEffect } from 'react';

function AsideColumn() {
    const [ userData, setUserData ] = useState( null );
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const params = new URLSearchParams( window.location.search );
                let userId = params.get( 'user' ) ?? 12;
                userId = parseInt( userId );
                const data = getUserMainData( userId );
                setUserData( data );
            } catch ( error ) {
                console.error( 'Erreur lors de la récupération des données principales de l\'utilisateur :', error );
            }
        };
        fetchUserData();
    }, []);
    if ( !userData ) {
        return <div>Loading...</div>;
    }
    const { keyData } = userData;
    return (
        <div className = "column-cards">
            <span className = "back-card">
                <Card name = "Calories" quantity = { `${keyData.calorieCount}kCal` } cover = { CaloriesIcon } />
            </span>
            <span className = "back-card">
                <Card name = "Protéines" quantity = { `${keyData.proteinCount}g` } cover = { ProteinesIcon } />
            </span>
            <span className = "back-card">
                <Card name = "Glucides" quantity = { `${keyData.carbohydrateCount}g` } cover = { GlucidesIcon } />
            </span>
            <span className = "back-card">
                <Card name = "Lipides" quantity = { `${keyData.lipidCount}g` } cover = { LipidesIcon } />
            </span>
        </div>
    );
}
export default AsideColumn;



