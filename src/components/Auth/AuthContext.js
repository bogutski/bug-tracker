import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
	createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../../dbConnection";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const nav = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        nav("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

	const logIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => nav("/dashboard"))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

	const logOut = () => {
    signOut(auth)
	}

	const signUp = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        nav("/dashboard")
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
	}

const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('Password was sent to your email')
      nav("/login")
    });
};

const contextValue = {
  user,
  loading,
  error,
  googleSignIn,
  signUp,
  logIn,
  logOut,
  resetPassword
}

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setError("");
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
