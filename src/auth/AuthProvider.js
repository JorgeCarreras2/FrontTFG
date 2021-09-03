import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

const Authprovider = ({ children }) => {
    //Se obtiene de localStorage el usuario, en caso de ser la primera carga se carga null, porque no existe basicamente, no hay que ser un genio
    const[user,setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null  
    ); 

     useEffect(()=>{
         try{
            localStorage.setItem("user", JSON.stringify(user));
         }catch(error){
            localStorage.removeItem("user");
         }
     }, [user]);

    const contextValue = {
        user,
        login(){
            //aqui hay que hacer la consulta etc....
            setUser({id:1, username: "Paquito75"})
        },
        logout(){
            //hacer la peticioon a api
            setUser(null);
        },
        isLogged(){
            return !!user;
        }
    }
    
    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}

export default Authprovider;
