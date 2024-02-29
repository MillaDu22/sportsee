// Modèle pour les performances de l'utilisateur //
import PropTypes from 'prop-types';

const UserPerformanceModel = PropTypes.shape({
    userId: PropTypes.number.isRequired,
    kind: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired
    })).isRequired
});

export default UserPerformanceModel;
