//Constante de rutas para que todo este un poco mas organizado

export const RoutesConts = {
    home: "/",
    login: "/login",
    register: "/register",
    account: "/account",
    userHome: (userId)=> (userId ? `/home/${userId}` : '/home/:userId'),
}; 

export const BaseUrl = {
    prodLogin: "https://7f41hlh4m0.execute-api.eu-west-3.amazonaws.com/Prod/loggin",
    prodRegister: "https://7f41hlh4m0.execute-api.eu-west-3.amazonaws.com/Prod/signup"
};



