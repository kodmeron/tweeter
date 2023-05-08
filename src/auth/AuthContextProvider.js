import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();


  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      navigate("/")

    }).catch((error) => {
      console.log(error)
    })
  }
  const createUser = (email, password) => {
    console.log("created user" + email)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    console.log("signed in user" + email)
    return signInWithEmailAndPassword(auth, email, password)
  }
  // const signInWithGoogle = () => {
  //   return signInWithPopup(auth, provider)
  // }

  const logout = () => {
    return signOut(auth)
  }

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, signIn, signInWithGoogle, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
