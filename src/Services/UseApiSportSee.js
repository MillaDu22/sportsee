import axios from 'axios';
const UseApiSportSee = axios.create({
    baseURL: `http://localhost:3000/` 
});

// Get user data Infos firstName, score, keyDataCards  //
export const getUserMainData = async (userId) => {
    try {
        const res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}`);
        console.log('Data returned by API:', res.data); 
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

// Get user data Activity //
export const getUserActivity = async (userId) => {
    try {
        const res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}/activity`);
        console.log('Data returned by API:', res.data); 
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

// Get user data Average Sessions //
export const getUserAverageSessions = async (userId) => {
    try {
        const res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}/average-sessions`);
        console.log('Data returned by API:', res.data); 
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

// Get user data Performance //
export const getUserPerformance = async (userId) => {
    try {
        const res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}/performance`);
        console.log('Data returned by API:', res.data); 
        return res.data;
    } catch (e) {
        console.log(e);
    }
};



