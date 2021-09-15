import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { BaseUrl } from "../routers/RoutesConts";


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
        login(credentials){          
                axios.post(BaseUrl.prodLogin, {
                    "email": credentials.email,
                    "password": credentials.password
                    })
                  .then((response) => {
                    console.log(response);
                  }, (error) => {
                    console.log(error);
                  });
            //set user      
        },
        register(credentials){
            axios.post(BaseUrl.prodRegister, {
                "email": credentials.email,
                "password": credentials.password
                })
              .then((response) => {
                console.log(response);
              }, (error) => {
                console.log(error);
              });
            //setUser              
        },
        logout(){
            //hacer la peticioon a api
            setUser(null);
        },
        isLogged(){
            localStorage.removeItem("user");
            
            return !!user;
        }
    }
    
    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}

export default Authprovider;
