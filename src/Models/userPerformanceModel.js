import PropTypes from 'prop-types';

/**
 * Modèle représentant les performances d'un utilisateur.
 * @typedef {Object} UserPerformanceModel
 * @property {number} userId - L'identifiant de l'utilisateur.
 * @property {Object<string, string>} kind - Les types de performances avec leur libellé associé.
 * @property {Array<Object>} data - Les données de performance de l'utilisateur.
 * @property {number} data.value - La valeur de la performance.
 * @property {number} data.kind - Le type de performance associé.
 */

/**
 * Modèle pour les performances d'un utilisateur.
 * @type {UserPerformanceModel}
 */
export const UserPerformanceModel = PropTypes.shape({
    userId: PropTypes.number.isRequired,
    kind: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired
    })).isRequired
}).isRequired;

export default UserPerformanceModel;
