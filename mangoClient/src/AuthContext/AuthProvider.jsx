import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";



const AuthProvider = ({ children }) => {

  const[user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  const signIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout=()=>{
    return signOut(auth)
  }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        if (currentUser && currentUser.email) {
          setUser(currentUser);
         
        } else {
          setUser(null);
          
        }
        setLoading(false)
      });
      return () => unsubscribe();
    }, []);
  return (
    <AuthContext.Provider
      value={{
        signIn,
        login,
        googleLogin,
        user,
        setUser,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
