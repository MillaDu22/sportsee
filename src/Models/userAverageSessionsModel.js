// Modèle pour les durees moyennes sessions d'activité de l'utilisateur //
import PropTypes from 'prop-types';

const UserAverageSessionsModel = PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired
    })).isRequired
});

export default UserAverageSessionsModel;
