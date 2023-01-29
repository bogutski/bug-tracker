import {createContext, useContext, useEffect, useState} from 'react';
import {
  GoogleAuthProvider, onAuthStateChanged,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../../dbConnection';
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const nav = useNavigate();
  const [user, setUser] = useState({});
  const googleSignIn = () => {
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider).then(res => {
	  nav('/dashboard');
	}).catch(err =>{
	  console.log(err)
	})
  };

  useEffect(() => {
	const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
	  setUser(currentUser);
	  console.log('User', currentUser)
	});
	return () => {
	  unsubscribe();
	};
  }, []);

  return (
	<AuthContext.Provider value={{ googleSignIn, user}}>
	  {children}
	</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
