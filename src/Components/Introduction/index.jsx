import React, { useState, useEffect } from 'react';
import './Introduction.css';
import { UseApiMockSportSee } from '../../Services/UseApiMockSportSee';

function Introduction () {
    const [firstName, setFirstName] = useState('Loading...');
    const useApiMockSportSee = new UseApiMockSportSee();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const userIdParam = params.get('user');
        const userId = userIdParam ? parseInt(userIdParam) : 12; // Si user n'est pas spécifié, utiliser 12 par défaut //

        const userFirstName = useApiMockSportSee.getFirstNameById(userId);
        setFirstName(userFirstName);
    }, []);

    return (
        <div className="container-introduction">
            <span className="line1">
                <h2 className="title-introduction">Bonjour</h2>
                <p className="firstname">{firstName}</p>
            </span>
            <span className="txt-introduction">Félicitations, vous avez explosé vos objectifs hier &#x1F44F;</span>
        </div>
    )
}

export default Introduction;


