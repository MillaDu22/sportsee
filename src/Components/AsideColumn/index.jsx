import React, { useState, useEffect } from 'react';
import './AsideColumn.css';
import Card from '../Card/index.jsx';
import CaloriesIcon from '../../assets/images/calories-icon.png';
import ProteinesIcon from '../../assets/images/proteines-icon.png';
import GlucidesIcon from '../../assets/images/glucides-icon.png';
import LipidesIcon from '../../assets/images/lipidesicon.png';
import { getUserMainData } from '../../Services/UseApiSportSee';
import { UserMainDataModel } from '../../Models/userMainDataModel';
import PropTypes from 'prop-types';

function AsideColumn() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserMainData = async () => {
            try {
                const params = new URLSearchParams(window.location.search);
                const userId = params.get('user') ?? '12';
                const userData = await getUserMainData(userId);
                checkUserMainData(userData.data); // Appel de la fonction de validation //
                setUserData(userData.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données principales de l\'utilisateur :', error);
            }
        };
        fetchUserMainData();
    }, []);
    // Fonction de validation des données cards via Prop-types model //
    const checkUserMainData = (data) => {
        if (!data || !data.id || !data.userInfos || !data.keyData || (!data.todayScore && data.todayScore !== 0 && !data.score && data.score !== 0)) {
            console.error("Données cards manquantes ou incorrectes");
            return;
        }
        console.log("Modèle de données cards :", UserMainDataModel); 
        console.log("Données cards utilisateur validées :", data); 
        if (data.id && data.keyData && data.userInfos && ((data.todayScore !== undefined && data.todayScore !== null) || (data.score !== undefined && data.score !== null))) {
            PropTypes.checkPropTypes(UserMainDataModel, data, 'data', 'AsideColumn');
        }
    };

    if (!userData) {
        return <div>Loading...</div>;
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




