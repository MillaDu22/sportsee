import React, { useState, useEffect } from 'react';
import './Introduction.css';
import { UserMainDataModel }  from '../../Models/userMainDataModel.js';
import { DataGet } from '../../Services/DataGet.js';
import { getUserData } from '../../Services/DataGet.js';
import PropTypes from 'prop-types';

/**
 * Composant React représentant l'introduction affichée sur la page d'accueil.
 * Affiche le prénom de l'utilisateur et un message de félicitations.
 * @returns {JSX.Element} - Élément JSX représentant l'introduction.
 */
function Introduction() {
    const [firstName, setFirstName] = useState('Loading...');

    useEffect(() => {
        const fetchUserMainData = async () => {
            try {
                const { userId, mock, dataType } = getUserData('USER_MAIN_DATA');
                const userData = await DataGet(dataType, userId, mock);

                checkUserMainData(userData.data); // Appel de la function de validation //
                if (userData && userData.data && userData.data.userInfos && userData.data.userInfos.firstName) {
                    setFirstName(userData.data.userInfos.firstName);
                } else {
                    console.error("Les données utilisateur ne contiennent pas le prénom attendu");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données utilisateur:", error);
            } 
        };
        fetchUserMainData();
    }, []);

    const checkUserMainData = (data) => {
        // Vérifie si les données ne sont pas définies ou si certaines propriétés essentielles sont absentes //
        if (!data || !data.id || !data.userInfos || !data.keyData || (!data.todayScore && data.todayScore !== 0 && !data.score && data.score !== 0)) {
            console.error("Données utilisateur manquantes ou incorrectes", data);
            return false;
        }
    
        // Vérifie le modèle global UserMainDataModel //
        const globalValidation = PropTypes.checkPropTypes(UserMainDataModel, data, 'data', 'checkUserMainData');
    
        // Vérifie les types de données pour l'objet userInfos //
        let userInfosValidation = PropTypes.checkPropTypes({
            age: PropTypes.number,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string,
        }, data.userInfos, 'userInfos', 'checkUserMainData');
    
        // Si les deux validations sont réussies, retourne true, sinon retourne false //
        return globalValidation && userInfosValidation;
    };
    return (
        <div className="container-introduction">
                <span className="line1">
                    <h2 className="title-introduction">Bonjour</h2>
                    <p className="firstname">{firstName}</p>
                </span>
            <span className="txt-introduction">Félicitations, vous avez explosé vos objectifs hier &#x1F44F;</span>
        </div>
    );
}
export default Introduction;
