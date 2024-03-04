import PropTypes from 'prop-types';

/**
 * Modèle représentant les sessions d'activité d'un utilisateur.
 * @typedef {Object} UserActivityModel
 * @property {number} userId - L'identifiant de l'utilisateur.
 * @property {Array<Object>} sessions - Les sessions d'activité de l'utilisateur.
 * @property {string} sessions.day - La date de la session.
 * @property {number} sessions.kilogram - Le poids en kilogrammes pour la session.
 * @property {number} sessions.calories - Le nombre de calories brûlées lors de la session.
 */

/**
 * Modèle pour les sessions d'activité de l'utilisateur.
 * @type {UserActivityModel}
 */
export const UserActivityModel = PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired
    })).isRequired
}).isRequired;

export default UserActivityModel;
