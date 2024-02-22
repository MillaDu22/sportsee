// Import des données de mock //
import {
    getUserActivity,
    getUserAverageSessions,
    getUserMainData,
    getUserPerformance,
} from "./DataMock.js";
// Définition des types d'activités //
const activityByKind = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
};
// Définition de la classe UseApiMockSportSee //
export class UseApiMockSportSee {
    // Méthode pour obtenir les activités par défaut //
    get defaultActivities() {
        const activities = [];
        for (let key in activityByKind) {
            activities.push({
                activity: activityByKind[key],
                value: 0,
            });
        }
        return activities;
    }     
    // Méthode pour obtenir les sessions moyennes par défaut //
    get defaultAverageSessions() {
        const averageSessions = [{
            day: 'L',
            sessionLength: 0,
        }, {
            day: 'M',
            sessionLength: 0,
        }, {
            day: 'M',
            sessionLength: 0,
        }, {
            day: 'J',
            sessionLength: 0,
        }, {
            day: 'V',
            sessionLength: 0,
        }, {
            day: 'S',
            sessionLength: 0,
        }, {
            day: 'D',
            sessionLength: 0,
        }, ];
        return averageSessions;
    }       
    // Méthode pour obtenir l'activité quotidienne par défaut //
    get defaultDailyActivity() {
        const dailyActivity = [];
        let date = new Date(Date.now());
        // Générer des données pour une semaine //
        // eslint-disable-next-line no-unused-vars
        for (let _ of '1234567') {
            let dateFr = new Intl.DateTimeFormat('fr').format(date);
            dailyActivity.push({
                day: dateFr.slice(0, 5),
                kilogram: 0,
                calories: 0,
            });
            date.setDate(date.getDate() - 1);
        } 
        dailyActivity.reverse();  
        return dailyActivity;
    }       
    // Méthode pour obtenir les données clés par défaut //
    get defaultKeyData() {
        return {
            calorieCount: null,
            proteinCount: null,
            carbohydrateCount: null,
            lipidCount: null,
        };
    }
    // Méthode pour obtenir les activités par ID utilisateur //
    getActivitiesById(userId) {
        const activities = [];
        const userData = getUserPerformance(userId); // Appel de la fonction getUserPerformance pour obtenir les données de performance
        for (let item of userData.data) {
            activities.push({
                activity: activityByKind[item.kind],
                value: item.value,
            });
        }
        return activities;
    }
    // Méthode pour obtenir les sessions moyennes par ID utilisateur //
    getAverageSessionsById(userId) {
        const averageSessions = [{
            day: 'L',
            sessionLength: 0,
        }, {
            day: 'M',
            sessionLength: 0,
        }, {
            day: 'M',
            sessionLength: 0,
        }, {
            day: 'J',
            sessionLength: 0,
        }, {
            day: 'V',
            sessionLength: 0,
        }, {
            day: 'S',
            sessionLength: 0,
        }, {
            day: 'D',
            sessionLength: 0,
        }, ];
        const userData = getUserAverageSessions(userId);
        for (let index in userData.sessions) {
            averageSessions[index].sessionLength = userData.sessions[index].sessionLength;
        }
        return averageSessions;
    }
    // Méthode pour obtenir l'activité quotidienne par ID utilisateur //
    getDailyActivityById(userId) {
        const userData = getUserActivity(userId); 
        if (userData && userData.sessions) {
            const dailyActivity = userData.sessions.map(item => {
                // eslint-disable-next-line no-unused-vars
                const [yyyy, mm, dd] = item.day.split('-');
                return {
                    day: `${dd}/${mm}`,
                    kilogram: item.kilogram,
                    calories: item.calories,
                };
            });
            return dailyActivity;
        } else {
            return this.defaultDailyActivity;
        }
    }
    // Méthode pour obtenir le prénom par ID utilisateur //
    getFirstNameById(userId) {
        const userData = getUserMainData(userId);
        if (userData) {
            return userData.userInfos.firstName;
        } else {
            return 'Unknown User';
        }
    }
    getKeyDataById(userId) {
        const userData = getUserMainData(userId);
        return userData ? userData.keyData : this.defaultKeyData;
    }
    // Méthode pour obtenir le score journalier par ID utilisateur //
    getTodayScoreById(userId) {
        const userData = getUserMainData(userId); 
        if (userData) {
            return userId === 12 ? userData.todayScore : userData.score;
        }
        return 0; 
    } 
}
