import React, { useState, useEffect } from 'react';
import './Introduction.css';
import { getUserMainData } from '../../Services/UseApiSportSee';

function Introduction() {
    const [firstName, setFirstName] = useState('Loading...');

    useEffect(() => {
        const fetchUserMainData = async (userId) => {
            try {
                const userData = await getUserMainData(userId); 
                if (userData && userData.data && userData.data.userInfos && userData.data.userInfos.firstName) {
                    setFirstName(userData.data.userInfos.firstName);
                } else {
                    console.error("Les données utilisateur ne contiennent pas le prénom attendu");
                }
                
            } catch (error) {
                console.error("Erreur lors de la récupération des données utilisateur:", error);
            }
        };

        const params = new URLSearchParams(window.location.search);
        const userId = params.get('user') ?? '12'; 
        fetchUserMainData(userId);
    }, []);

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

// En cas d'erreur API basculement sur mock //
/*import React, { useState, useEffect } from 'react';
import { getUserMainData } from '../../Services/UseApiSportSee.js';
import { getUserMockMainData } from '../../Services/DataMock.js';

export default function Introduction() {
    const [firstName, setFirstName] = useState('Loading...');

    useEffect(() => {
        const fetchUserMainData = async (userId) => {
            try {
                const userData = await getUserMainData(userId); 
                if (userData && userData.data && userData.data.userInfos && userData.data.userInfos.firstName) {
                    setFirstName(userData.data.userInfos.firstName);
                } else {
                    console.error("Les données utilisateur ne contiennent pas le prénom attendu");
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
                // En cas d'erreur, bascule sur l'API mock pour récupérer les données //
                const mockUserData = await getUserMockMainData(userId);
                if (mockUserData && mockUserData.userInfos && mockUserData.userInfos.firstName) {
                    setFirstName(mockUserData.userInfos.firstName);
                } else {
                    console.error("Les données utilisateur (mock) ne contiennent pas le prénom attendu");
                }
            }
        };
        fetchUserMainData();
    }, []);

    return (
        <div className="container-introduction">
            <span className="line1">
                <h2 className="title-introduction">Bonjour</h2>
                <p className="firstname">{firstName}</p>
            </span>
            <span className="txt-introduction">Félicitations, vous avez explosé vos objectifs hier &#x1F44F;</span>
        </div>
    );
}*/





