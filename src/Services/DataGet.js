// Module util appels API fonctions getUserActivity(userId), getUserPerformance(userId), getUserAverageSessions(userId), getUserMainData(userId) //
import { getUserActivity, getUserAverageSessions, getUserMainData, getUserPerformance } from "../Services/UseApiSportSee";

/**
* Récupère les données spécifiques à un utilisateur en fonction du type spécifié.
* @async
* @param {string} type - Le type de données à récupérer. Peut être l'un des suivants : 'USER_ACTIVITY', 'USER_PERFORMANCE', 'USER_AVERAGE_SESSIONS', 'USER_MAIN_DATA'.
* @param {string} userId - L'identifiant de l'utilisateur pour lequel récupérer les données.
* @returns {Promise<Array>} - Une promesse résolue avec un tableau de données correspondant au type spécifié pour l'utilisateur donné.
*/
export const DataGet = async (type, userId) => {
    let data = []; 

    switch (type) {
        case 'USER_ACTIVITY':
        data = await getUserActivity(userId);
        break;
        case 'USER_PERFORMANCE':
        data = await getUserPerformance(userId);
        break;
        case 'USER_AVERAGE_SESSIONS':
        data = await getUserAverageSessions(userId);
        break;
        case 'USER_MAIN_DATA':
        data = await getUserMainData(userId);
        break;
        default: data=[]
    }
    return data;
};
    
    