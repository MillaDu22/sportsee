// Modèle pour les informations principales de l'utilisateur //
import PropTypes from 'prop-types';

export const UserMainDataModel =  PropTypes.shape({
    id: PropTypes.number.isRequired,
    keyData: PropTypes.shape({
        calorieCount: PropTypes.number.isRequired,
        proteinCount: PropTypes.number.isRequired,
        carbohydrateCount: PropTypes.number.isRequired,
        lipidCount: PropTypes.number.isRequired,
    }).isRequired,
    todayScore: PropTypes.number,  
    score: PropTypes.number ,
    userInfos: PropTypes.shape({
        age: PropTypes.number,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string,
    }).isRequired
}).isRequired;

export default UserMainDataModel;

