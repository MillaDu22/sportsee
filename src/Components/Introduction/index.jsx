import React, { useState, useEffect } from 'react';
import './Introduction.css';
import { getUserMainData } from '../../Services/UseApiSportSee';
import { UserMainDataModel }  from '../../Models/userMainDataModel.js';
import PropTypes from 'prop-types';

function Introduction() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserMainData = async (userId) => {
            try {
                const userData = await getUserMainData(userId);
                checkUserMainData(userData.data); // Appel de la fonction de validation //
                setUserData(userData.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données utilisateur:", error);
            }
        };

        const params = new URLSearchParams(window.location.search);
        const userId = params.get('user') ?? '12'; 
        fetchUserMainData(userId);
    }, []);

    // Fonction de validation des données utilisateur via Prop-types model //
    const checkUserMainData = (data) => {
        if (!data || !data.id || !data.userInfos || !data.keyData) {
            console.error("Données utilisateur manquantes ou incorrectes");
            return;
        }
        console.log("Modèle de données utilisateur :", UserMainDataModel); 
        console.log("Données utilisateur validées :", data); 
        // Vérifie que toutes les propriétés requises sont définies dans les données //
        if (data.id && data.keyData && data.userInfos) {
            PropTypes.checkPropTypes(UserMainDataModel, data, 'data', 'Introduction');
        }
    };
    return (
        <div className="container-introduction">
            {userData ? (
                <span className="line1">
                    <h2 className="title-introduction">Bonjour</h2>
                    <p className="firstname">{userData.userInfos.firstName}</p>
                </span>
                ) : (
                <p>Loading...</p>
            )}
            <span className="txt-introduction">Félicitations, vous avez explosé vos objectifs hier &#x1F44F;</span>
        </div>
    );
}
export default Introduction;
