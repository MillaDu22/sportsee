/**
 * Récupère les données principales d'un utilisateur.
 * @param {string} userId - L'identifiant de l'utilisateur pour lequel récupérer les données.
 * @returns {Object} - Les données principales de l'utilisateur.
 */
export function getUserMainDataMock(userId) {
    if ( userId === 12 ) {
        return {
            data: {
                id: 12,
                userInfos: {
                    age: 31,
                    firstName: 'Benito',
                    lastName: 'Andorra',
                },
                todayScore: 0.12,
                keyData: {
                    calorieCount: 1930,
                    proteinCount: 155,
                    carbohydrateCount: 290,
                    lipidCount: 50
                }
            }
        }
    }
    return {
        data: {
            id: 18,
            userInfos: {
                age: 34,
                firstName: 'Margarita',
                lastName: 'Puigcerda',
            },
            score: 0.3,
            keyData: {
                calorieCount: 2500,
                proteinCount: 90,
                carbohydrateCount: 150,
                lipidCount: 120
            }
        }
    }
}

/**
 * Récupère les données d'activité d'un utilisateur.
 * @param {string} userId - L'identifiant de l'utilisateur pour lequel récupérer les données.
 * @returns {Object} - Les données d'activité de l'utilisateur.
 */
export function getUserActivityMock(userId) {
    if ( userId === 12 ) {
        return {
            data: {
                userId: 12,
                sessions: [
                    {
                        day: '2020-07-01',
                        kilogram: 80,
                        calories: 240
                    },
                    {
                        day: '2020-07-02',
                        kilogram: 80,
                        calories: 220
                    },
                    {
                        day: '2020-07-03',
                        kilogram: 81,
                        calories: 280
                    },
                    {
                        day: '2020-07-04',
                        kilogram: 81,
                        calories: 290
                    },
                    {
                        day: '2020-07-05',
                        kilogram: 80,
                        calories: 160
                    },
                    {
                        day: '2020-07-06',
                        kilogram: 78,
                        calories: 162
                    },
                    {
                        day: '2020-07-07',
                        kilogram: 76,
                        calories: 390
                    }
                ]
            }
        }
    }
    return {
        data: {
            userId: 18,
            sessions: [
                {
                    day: '2020-07-01',
                    kilogram: 70,
                    calories: 240
                },
                {
                    day: '2020-07-02',
                    kilogram: 69,
                    calories: 220
                },
                {
                    day: '2020-07-03',
                    kilogram: 70,
                    calories: 280
                },
                {
                    day: '2020-07-04',
                    kilogram: 70,
                    calories: 500
                },
                {
                    day: '2020-07-05',
                    kilogram: 69,
                    calories: 160
                },
                {
                    day: '2020-07-06',
                    kilogram: 69,
                    calories: 162
                },
                {
                    day: '2020-07-07',
                    kilogram: 69,
                    calories: 390
                }
            ]
        }
    }
}

/**
 * Récupère les données de sessions moyennes d'un utilisateur.
 * @param {string} userId - L'identifiant de l'utilisateur pour lequel récupérer les données.
 * @returns {Object} - Les données de sessions moyennes de l'utilisateur.
 */
export function getUserAverageSessionsMock(userId) {
    if ( userId === 12 ) {
        return {
            data: {
                userId: 12,
                sessions: [
                    {
                        day: 1,
                        sessionLength: 30
                    },
                    {
                        day: 2,
                        sessionLength: 23
                    },
                    {
                        day: 3,
                        sessionLength: 45
                    },
                    {
                        day: 4,
                        sessionLength: 50
                    },
                    {
                        day: 5,
                        sessionLength: 0
                    },
                    {
                        day: 6,
                        sessionLength: 0
                    },
                    {
                        day: 7,
                        sessionLength: 60
                    }
                ]
            }
        }
    }
    return {
        data: {
            userId: 18,
            sessions: [
                {
                    day: 1,
                    sessionLength: 30
                },
                {
                    day: 2,
                    sessionLength: 40
                },
                {
                    day: 3,
                    sessionLength: 50
                },
                {
                    day: 4,
                    sessionLength: 30
                },
                {
                    day: 5,
                    sessionLength: 30
                },
                {
                    day: 6,
                    sessionLength: 50
                },
                {
                    day: 7,
                    sessionLength: 50
                }
            ]
        }
    }
}

/**
 * Récupère les données de performance d'un utilisateur.
 * @param {string} userId - L'identifiant de l'utilisateur pour lequel récupérer les données.
 * @returns {Object} - Les données de performance de l'utilisateur.
 */
export function getUserPerformanceMock(userId) {
    if ( userId === 12 ) {
        return {
            data: {
                userId: 12,
                kind: {
                    1: 'cardio',
                    2: 'energy',
                    3: 'endurance',
                    4: 'strength',
                    5: 'speed',
                    6: 'intensity'
                },
                data: [
                    {
                        value: 80,
                        kind: 1
                    },
                    {
                        value: 120,
                        kind: 2
                    },
                    {
                        value: 140,
                        kind: 3
                    },
                    {
                        value: 50,
                        kind: 4
                    },
                    {
                        value: 200,
                        kind: 5
                    },
                    {
                        value: 90,
                        kind: 6
                    }
                ]
                
            }
        }
    }
    return {
        data: {
            userId: 18,
            kind: {
                1: 'cardio',
                2: 'energy',
                3: 'endurance',
                4: 'strength',
                5: 'speed',
                6: 'intensity'
            },
            data: [
                {
                    value: 200,
                    kind: 1
                },
                {
                    value: 240,
                    kind: 2
                },
                {
                    value: 80,
                    kind: 3
                },
                {
                    value: 80,
                    kind: 4
                },
                {
                    value: 220,
                    kind: 5
                },
                {
                    value: 110,
                    kind: 6
                }
            ]
        }
    }
}




