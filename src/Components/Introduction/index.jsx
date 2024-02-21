import React, { useState, useEffect } from 'react';
import './Introduction.css';
import { getUserMainData } from '../../Services/DataMock';

function Introduction () {
    const [ userData, setUserData ] = useState( null );
    useEffect(() => {
        // Fetch user data //
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        let userId = params.user ?? 12;
        userId = parseInt(userId)

        const user = getUserMainData(userId);
        setUserData(user);
    }, []);
    if ( !userData ) {
        return <div>Loading...</div>;
    }
    const { userInfos } = userData;
    return (
        <div className = "container-introduction" >
            <span className = "line1">
                <h2 className = "title-introduction" >Bonjour</h2>
                <p className = "firstname" >{ userInfos.firstName }</p>
            </span>
            <span className = "txt-introduction" >Félicitations, vous avez explosé vos objectifs hier &#x1F44F;</span>
        </div>
    )
}
export default Introduction;