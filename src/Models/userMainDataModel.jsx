// Modèle pour les informations principales de l'utilisateur //
const UserMainDataModel = {
    id: Number,
    userInfos: {
        firstName: String,
        lastName: String,
        age: Number,
    },
    todayScore: Number,
    keyData: {
        calorieCount: Number,
        proteinCount: Number,
        carbohydrateCount: Number,
        lipidCount: Number
    }
}
export { UserMainDataModel};
