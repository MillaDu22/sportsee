// Dans chaque fonction, une tentative est faite pour effectuer l'appel à l'API réelle. En cas d'échec, les données mockées sont renvoyées //
import axios from 'axios';
import * as DataMock from '../Services/DataMock.js';

const UseApiSportSee = axios.create({
    baseURL: `http://localhost:3000/` 
});

// Get user data Infos firstName, score, keyDataCards //
export const getUserMainData = async (userId) => {
    try {
        const res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}`, DataMock); 
        // ${userId} Interpollation permettant d'acceder aux informations de l'utilisateur spécifique via la route /user/:id //
        console.log('Data user id, firstName, cards & score returned by API:', res.data); 
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur via l\'API réelle :', error);
        // En cas d'erreur, retourner les données mockées //
        console.log('Chargement des données utilisateur depuis les mocks', DataMock.getUserMainData)
        return await DataMock.getUserMainData(userId);
    }
};

// Get user data Activity //
export const getUserActivity = async (userId) => {
    try {
        const res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}/activity`, DataMock);
        console.log('Data activity returned by API:', res.data); 
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données d\'activité utilisateur via l\'API réelle :', error);
        console.log('Chargement des données d\'activité depuis les mocks', DataMock.getUserActivity)
        return await DataMock.getUserActivity(userId);
    }
};

// Get user data Average Sessions //
export const getUserAverageSessions = async (userId) => {
    try {
        const res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}/average-sessions`, DataMock);
        console.log('Data average sessions returned by API:', res.data); 
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données moyennes de session utilisateur via l\'API réelle :', error);
        console.log('Chargement des données de moyennes de sessions depuis les mocks', DataMock.getUserAverageSessions)
        return await DataMock.getUserAverageSessions(userId);
    }
};

// Get user data Performance //
export const getUserPerformance = async (userId) => {
    try {
        const res = await UseApiSportSee.get(`http://localhost:3000/user/${userId}/performance`, DataMock);
        console.log('Data performances returned by API:', res.data); 
        return res.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de performance utilisateur via l\'API réelle :', error);
        console.log('Chargement des données de performance depuis les mocks', DataMock.getUserPerformance)
        return await DataMock.getUserPerformance(userId);
    }
};



