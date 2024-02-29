// Modèle pour les informations principales de l'utilisateur //
import PropTypes from 'prop-types';

const UserMainDataModel = PropTypes.shape({
    id: PropTypes.number.isRequired,
    userInfos: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string,
        age: PropTypes.number,
    }).isRequired,
    todayScore: PropTypes.number,
    keyData: PropTypes.shape({
        calorieCount: PropTypes.number.isRequired,
        proteinCount: PropTypes.number.isRequired,
        carbohydrateCount: PropTypes.number.isRequired,
        lipidCount: PropTypes.number.isRequired
    }).isRequired
});

export default UserMainDataModel;

