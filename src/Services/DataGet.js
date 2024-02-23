// API call imports
import { getUserActivity, getUserAverageSessions, getUserMainData, getUserPerformance } from "../Services/UseApiSportSee";

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
    
    