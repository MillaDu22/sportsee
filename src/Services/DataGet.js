import { getUserActivity, getUserAverageSessions, getUserMainData, getUserPerformance } from "../Services/UseApiSportSee";
import { getUserActivityMock, getUserAverageSessionsMock, getUserMainDataMock, getUserPerformanceMock } from "../Services/DataMock";

/**
* Récupère les données spécifiques à un utilisateur en fonction du type spécifié.
* @async
* @param {string} type - Le type de données à récupérer. Peut être l'un des suivants : 'USER_ACTIVITY', 'USER_PERFORMANCE', 'USER_AVERAGE_SESSIONS', 'USER_MAIN_DATA'.
* @param {string} userId - L'identifiant de l'utilisateur pour lequel récupérer les données.
* @returns {Promise<Array>} - Une promesse résolue avec un tableau de données correspondant au type spécifié pour l'utilisateur donné.
*/
export const DataGet = async (type, userId, mock=false) => {
    let data = []; 

    switch (type) {
        case 'USER_ACTIVITY':
            if(!mock) {
                data = await getUserActivity(userId);
            } else {
                data = getUserActivityMock(userId)
            }
        break;
        case 'USER_PERFORMANCE':
            if(!mock) {
                data = await getUserPerformance(userId);
            } else {
                data = getUserPerformanceMock(userId)
            }
        break;
        case 'USER_AVERAGE_SESSIONS':
            if(!mock) {
                data = await getUserAverageSessions(userId);
            } else {
                data = getUserAverageSessionsMock(userId)
            }
        break;
        case 'USER_MAIN_DATA':
            if(!mock) {
                data = await getUserMainData(userId);
            } else {
                data = getUserMainDataMock(userId)
            }
        break;
        default: data=[]
    }
    return data;
};
    
    