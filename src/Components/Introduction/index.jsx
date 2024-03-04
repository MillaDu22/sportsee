import React, { useState, useEffect } from 'react';
import './Introduction.css';
import { getUserMainData } from '../../Services/UseApiSportSee';
import { UserMainDataModel }  from '../../Models/userMainDataModel.js';
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
                const params = new URLSearchParams(window.location.search);
                const userId = parseInt(params.get('user') ?? 12);
                const userData = await getUserMainData(userId); 
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

    // Fonction de validation des données utilisateur via Prop-types model //
    const checkUserMainData = (data) => {
        if (!data || !data.id || !data.userInfos || !data.keyData || (!data.todayScore && data.todayScore !== 0 && !data.score && data.score !== 0)) {
            console.error("Données utilisateur manquantes ou incorrectes");
            return;
        }
        console.log("Modèle de données utilisateur :", UserMainDataModel); 
        console.log("Données utilisateur validées :", data); 
        // Vérifie que toutes les propriétés requises sont définies dans les données //
        if (data.id && data.keyData && data.userInfos && ((data.todayScore !== undefined && data.todayScore !== null) || (data.score !== undefined && data.score !== null))) {
            PropTypes.checkPropTypes(UserMainDataModel, data, 'data', 'Introduction');
        }
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
