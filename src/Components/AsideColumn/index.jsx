import React, { useState, useEffect } from 'react';
import './AsideColumn.css';
import Card from '../Card/index.jsx';
import CaloriesIcon from '../../assets/images/calories-icon.png';
import ProteinesIcon from '../../assets/images/proteines-icon.png';
import GlucidesIcon from '../../assets/images/glucides-icon.png';
import LipidesIcon from '../../assets/images/lipidesicon.png';
import  { DataGet } from '../../Services/DataGet.js';
import { UserMainDataModel } from '../../Models/userMainDataModel';
import PropTypes from 'prop-types';

/**
 * Composant de colonne latérale affichant les données utilisateur sous forme de cartes.
 * @returns {JSX.Element} - Élément JSX représentant la colonne latérale.
 */
function AsideColumn() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserMainData = async () => {
            try {
                const params = new URLSearchParams(window.location.search);
                const userId = parseInt(params.get('user') ?? 12);

                const mock = params.get('mock') === '1' ? true: false;
                const userData = await DataGet ('USER_MAIN_DATA', userId, mock);

                checkUserMainData(userData.data); // Appel de la fonction de validation //
                setUserData(userData.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données principales de l\'utilisateur :', error);
            } finally {
                setLoading(false); 
            }
        };
        fetchUserMainData();
    }, []);
    
    /**
     * Fonction de validation des données des cartes utilisateur via le modèle PropTypes.
     * @param {Object} data - Les données utilisateur.
     */
    const checkUserMainData = (data) => {
        if (!data || !data.id || !data.userInfos || !data.keyData || (!data.todayScore && data.todayScore !== 0 && !data.score && data.score !== 0)) {
            console.error("Données cards manquantes ou incorrectes");
            return;
        }
        if (data.id && data.keyData && data.userInfos && ((data.todayScore !== undefined && data.todayScore !== null) || (data.score !== undefined && data.score !== null))) {
            PropTypes.checkPropTypes(UserMainDataModel, data, 'data', 'AsideColumn');
        }
    };

    if (!userData || loading) {
        return (
            <div className="column-cards">
                <span className="back-card">
                <Card name="Calories" quantity='0Kcal' cover={CaloriesIcon} />
                </span>
                <span className="back-card">
                    <Card name="Protéines" quantity='0g' cover={ProteinesIcon} />
                </span>
                <span className="back-card">
                <Card name="Glucides" quantity='Og' cover={GlucidesIcon} />
                </span>
                <span className="back-card">
                <Card name="Lipides" quantity='0g' cover={LipidesIcon} />
                </span>
            </div>
        );
    }

    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData.keyData;

    return (
        <div className="column-cards">
            <span className="back-card">
                <Card name="Calories" quantity={`${calorieCount}kCal`} cover={CaloriesIcon} />
            </span>
            <span className="back-card">
                <Card name="Protéines" quantity={`${proteinCount}g`} cover={ProteinesIcon} />
            </span>
            <span className="back-card">
                <Card name="Glucides" quantity={`${carbohydrateCount}g`} cover={GlucidesIcon} />
            </span>
            <span className="back-card">
                <Card name="Lipides" quantity={`${lipidCount}g`} cover={LipidesIcon} />
            </span>
        </div>
    );
}

export default AsideColumn;




