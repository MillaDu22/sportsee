// Modèle pour les sessions d'activité de l'utilisateur //
import PropTypes from 'prop-types';

const UserActivityModel = PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired
    })).isRequired
});

export default UserActivityModel;
