"use client"
import React, { createContext,useEffect,useState,useContext} from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/configs/firebaseconfig';
import { AuthContext } from './_context/AuthContext';
import { ConvexProvider, ConvexReactClient, useMutation } from "convex/react";
import {api} from "@/convex/_generated/api";


function Provider( {children} ) {

const [user, setUser] = useState();  
const CreateUser = useMutation(api.users.CreateNewUser);
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth,async(user)=> {

    const result = await CreateUser({
      name: user?.displayName,
      email: user?.email,
      pictureURL: user?.photoURL,
    });
    setUser(result);
    
  })
  return () => 
    unsubscribe();
  
});

  return (
    <div>
     
      <AuthContext.Provider value={{user}}>
       <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
         {children}
       </NextThemesProvider>
       </AuthContext.Provider>
    </div>
  )
}

export const useAuthContext = ()=> {
  const context = useContext(AuthContext);
  return context;
}

export default Provider