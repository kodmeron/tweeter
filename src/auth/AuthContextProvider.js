import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updatePassword,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendPasswordResetEmail
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
  const createUser = (email, password, setSuccess, setError) => {
    console.log("created user" + email)
    return createUserWithEmailAndPassword(auth, email, password)
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

  const updateCredentials = (newEmail, newPassword, currentPassword, setError, setSuccess) => {
    if (user) {
      if (newPassword.length < 4) {
        setError('newPassword', 'Password must be at least 4 characters long.');
        return;
      }

      if (newPassword === user.password) {
        setError('New password cannot be the same as the current password.');
        return;
      }

      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(newEmail)) {
        setError("Something went wrong");
        return;
      }

      if (newEmail === user.email) {
        setError("Something went wrong");
        return;
      }

      let successCount = 0; // Counter for successful updates

      const credential = EmailAuthProvider.credential(user.email, currentPassword);

      reauthenticateWithCredential(auth.currentUser, credential)
        .then(() => {
          updateEmail(auth.currentUser, newEmail)
            .then(() => {
              successCount++; // Increment success count
              if (successCount === 2) {
                setSuccess('Email and password updated successfully.');
              }
            })
            .catch((error) => {
              setError("Something went wrong");
            });

          updatePassword(auth.currentUser, newPassword)
            .then(() => {
              successCount++; // Increment success count
              if (successCount === 2) {
                setSuccess('Email and password updated successfully.');
              }
            })
            .catch((error) => {
              setError("Something went wrong");
            });
        })
        .catch((error) => {
          setError("Something went wrong");
        });
    }
  };

  const resetPassword = (email, setSuccess, setError) => {
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setSuccess('Password reset email sent successfully. Please check your email.');
        })
        .catch((error) => {
          setError('Failed to send password reset email. Please try again.');
        });
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
    <UserContext.Provider value={{ createUser, user, signIn, signInWithGoogle, handleLogout, updateCredentials, resetPassword }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
