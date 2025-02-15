import React, { useState, useEffect } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  db,
  doc,
  setDoc,
  getDoc,
} from "./firebase";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import {
  Button,
  Container,
  Typography,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import Header from './Header'

const App = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        setUser(authUser);
        await saveUserToFirestore(authUser); // Save user to Firestore
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
console.log(user,'here')
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  const saveUserToFirestore = async (user) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        });
      }
    } catch (error) {
      console.error("Firestore error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center"}}>
     
      {user ? (

        <>
          <Header src={user.photoURL} name={user.displayName} signOut={handleSignOut}/>

          <TaskForm onTaskAdded={(task) => setTasks([...tasks, task])} />
          <TaskList />
        </>
      ) : (
        <Button variant="contained" color="primary" onClick={handleSignIn}>
          Sign In with Google
        </Button>
      )}
    </div>
  );
};

export default App;
