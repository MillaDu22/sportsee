// Modèle pour les durees moyennes sessions d'activité de l'utilisateur //
import PropTypes from 'prop-types';

export const UserAverageSessionsModel = PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired
    })).isRequired
}).isRequired;

export default UserAverageSessionsModel;
