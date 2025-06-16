// "use client"
// import React, { createContext,useEffect,useState,useContext} from 'react'
// import { ThemeProvider as NextThemesProvider } from "next-themes"
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '@/configs/firebaseconfig';
// import { AuthContext } from './_context/AuthContext';
// import { ConvexProvider, ConvexReactClient, useMutation } from "convex/react";
// import {api} from "@/convex/_generated/api";


// function Provider( {children} ) {

// const [user, setUser] = useState();  
// const CreateUser = useMutation(api.users.CreateNewUser);
// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth,async(user)=> {

//     const result = await CreateUser({
//       name: user?.displayName,
//       email: user?.email,
//       pictureURL: user?.photoURL,
//     });
//     setUser(result);
    
//   })
//   return () => 
//     unsubscribe();
  
// });

//   return (
//     <div>
     
//       <AuthContext.Provider value={{user}}>
//        <NextThemesProvider
//             attribute="class"
//             defaultTheme="dark"
//             enableSystem
//             disableTransitionOnChange>
//          {children}
//        </NextThemesProvider>
//        </AuthContext.Provider>
//     </div>
//   )
// }

// export const useAuthContext = ()=> {
//   const context = useContext(AuthContext);
//   return context;
// }

// export default Provider



// gpt code

"use client";
import React, {
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/firebaseconfig";
import { AuthContext } from "./_context/AuthContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function Provider({ children }) {
  const [user, setUser] = useState(null);
  const CreateUser = useMutation(api.users.CreateNewUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser?.email) {
        try {
          const result = await CreateUser({
            name: firebaseUser.displayName || "Anonymous",
            email: firebaseUser.email,
            pictureURL: firebaseUser.photoURL || "",
          });
          setUser(result);
        } catch (error) {
          console.error("CreateUser error:", error);
        }
      } else {
        console.warn("User email missing. Skipping CreateUser call.");
      }
    });

    return () => unsubscribe();
  }, [CreateUser]); // dependency added to avoid reruns

  return (
    <AuthContext.Provider value={{ user }}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default Provider;
