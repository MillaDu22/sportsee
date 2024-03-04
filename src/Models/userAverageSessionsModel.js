import PropTypes from 'prop-types';

/**
 * Modèle représentant les sessions moyennes d'un utilisateur.
 * @typedef {Object} UserAverageSessionsModel
 * @property {number} userId - L'identifiant de l'utilisateur.
 * @property {Array<Object>} sessions - Les sessions moyennes de l'utilisateur.
 * @property {number} sessions.day - Le jour de la session.
 * @property {number} sessions.sessionLength - La durée moyenne de la session.
 */

/**
 * Modèle pour les sessions moyennes d'un utilisateur.
 * @type {UserAverageSessionsModel}
 */
export const UserAverageSessionsModel = PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired
    })).isRequired
}).isRequired;

export default UserAverageSessionsModel;
