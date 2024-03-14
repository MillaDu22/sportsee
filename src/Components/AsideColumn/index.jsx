import React, { useState, useEffect } from 'react';
import './AsideColumn.css';
import Card from '../Card/index.jsx';
import CaloriesIcon from '../../assets/images/calories-icon.png';
import ProteinesIcon from '../../assets/images/proteines-icon.png';
import GlucidesIcon from '../../assets/images/glucides-icon.png';
import LipidesIcon from '../../assets/images/lipidesicon.png';
import  { DataGet } from '../../Services/DataGet.js';
import { getUserData } from '../../Services/DataGet.js';
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
                const { userId, mock, dataType } = getUserData('USER_MAIN_DATA');
                const userData = await DataGet(dataType, userId, mock);

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
        // Vérifie si les données ne sont pas définies ou si certaines propriétés essentielles sont absentes //
        if (!data || !data.id || !data.userInfos || !data.keyData || (!data.todayScore && data.todayScore !== 0 && !data.score && data.score !== 0)) {
            console.error("Données utilisateur manquantes ou incorrectes", data);
            return false;
        }
    
        // Vérifie le modèle global UserMainDataModel //
        const globalValidation = PropTypes.checkPropTypes(UserMainDataModel, data, 'data', 'checkUserMainData');
    
        // Vérifie les types de données pour l'objet keyData //
        let keyDataValidation = PropTypes.checkPropTypes({
            calorieCount: PropTypes.number.isRequired,
            proteinCount: PropTypes.number.isRequired,
            carbohydrateCount: PropTypes.number.isRequired,
            lipidCount: PropTypes.number.isRequired,
        }, data.keyData, 'keyData', 'checkUserMainData');
    
        // Si les deux validations sont réussies, retourne true, sinon retourne false //
        return globalValidation && keyDataValidation;
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




