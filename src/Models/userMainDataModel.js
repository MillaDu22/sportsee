import PropTypes from 'prop-types';

/**
 * Modèle représentant les données principales d'un utilisateur.
 * @typedef {Object} UserMainDataModel
 * @property {Object} data - Les données principales de l'utilisateur.
 * @property {number} data.id - L'identifiant de l'utilisateur.
 * @property {Object} data.keyData - Les données clés de l'utilisateur.
 * @property {number} data.keyData.calorieCount - Le nombre de calories de l'utilisateur.
 * @property {number} data.keyData.proteinCount - Le nombre de protéines de l'utilisateur.
 * @property {number} data.keyData.carbohydrateCount - Le nombre de glucides de l'utilisateur.
 * @property {number} data.keyData.lipidCount - Le nombre de lipides de l'utilisateur.
 * @property {number} [data.todayScore] - Le score de l'utilisateur pour aujourd'hui (facultatif).
 * @property {number} [data.score] - Le score de l'utilisateur (facultatif).
 * @property {Object} data.userInfos - Les informations de base de l'utilisateur.
 * @property {number} [data.userInfos.age] - L'âge de l'utilisateur (facultatif).
 * @property {string} data.userInfos.firstName - Le prénom de l'utilisateur.
 * @property {string} [data.userInfos.lastName] - Le nom de famille de l'utilisateur (facultatif).
 */

/**
 * Modèle pour les données principales d'un utilisateur.
 * @type {UserMainDataModel}
 */
export const UserMainDataModel =  PropTypes.shape({
    data: PropTypes.shape({
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
    }).isRequired
}).isRequired;

export default UserMainDataModel;

