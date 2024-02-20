import React, { useState, useEffect } from 'react';
import './Introduction.css';
import { USER_MAIN_DATA } from '../../Services/DataMock';

function Introduction () {
    const [ userData, setUserData ] = useState( null );
    useEffect(() => {
        // Fetch user data //
        const user = USER_MAIN_DATA.find(user => user.userInfos.firstName === 'Cecilia');
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