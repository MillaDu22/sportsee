import axios from 'axios';

const UseApiSportSee = axios.create({
    baseURL: `http://localhost:3000/` 
});

/**
 * Obtient les informations principales d'un utilisateur telles que le prénom, le score et les cartes de données clés.
 * @async
 * @param {string} userId - L'identifiant de l'utilisateur pour lequel récupérer les informations.
 * @returns {Promise<Object>} - Une promesse résolue avec les informations principales de l'utilisateur.
 */
export const getUserMainData = async (userId) => {
    try {
        let res;
        res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}`);
        return res.data;

    } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
    }
};

/**
 * Obtient les données d'activité d'un utilisateur.
 * @async
 * @param {string} userId - L'identifiant de l'utilisateur pour lequel récupérer les données d'activité.
 * @returns {Promise<Object>} - Une promesse résolue avec les données d'activité de l'utilisateur.
 */
export const getUserActivity = async (userId) => {
    try {
        const res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}/activity`);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données d\'activité utilisateur via l\'API réelle :', error);
    }
};

/**
 * Obtient les données de sessions moyennes d'un utilisateur.
 * @async
 * @param {string} userId - L'identifiant de l'utilisateur pour lequel récupérer les données de sessions moyennes.
 * @returns {Promise<Object>} - Une promesse résolue avec les données de sessions moyennes de l'utilisateur.
 */
export const getUserAverageSessions = async (userId) => {
    try {
        const res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}/average-sessions`);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données moyennes de session utilisateur via l\'API réelle :', error);
    }
};

/**
 * Obtient les données de performance d'un utilisateur.
 * @async
 * @param {string} userId - L'identifiant de l'utilisateur pour lequel récupérer les données de performance.
 * @returns {Promise<Object>} - Une promesse résolue avec les données de performance de l'utilisateur.
 */
export const getUserPerformance = async (userId) => {
    try {
        const res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}/performance`);
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de performance utilisateur via l\'API réelle :', error);
    }
};






