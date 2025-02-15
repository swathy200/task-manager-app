import React, { useState, useEffect } from "react";
import { db, doc, getDoc, setDoc } from "./firebase";
import { TextField, Button, Avatar, Card, CardContent, Typography } from "@mui/material";

function Profile({ user }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (user) {
      fetchUserProfile(user.uid);
    }
  }, [user]);

  const fetchUserProfile = async (uid) => {
    const userRef = doc(db, "users", uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      setName(data.name);
      setEmail(data.email);
      setPhoto(data.photo);
    }
  };

  const handleUpdateProfile = async () => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { name, email, photo }, { merge: true });
      alert("Profile updated successfully!");
    }
  };

  return (
    <Card elevation={3} style={{ marginTop: "20px", padding: "20px", textAlign: "center" }}>
      <CardContent>
        <Avatar src={photo || user.photoURL} alt="Profile" sx={{ width: 100, height: 100, margin: "auto" }} />
        <Typography variant="h6" style={{ marginTop: "10px" }}>Profile</Typography>
        
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <Button 
          variant="contained" 
          color="primary" 
          style={{ marginTop: "15px" }} 
          onClick={handleUpdateProfile}
        >
          Update Profile
        </Button>
      </CardContent>
    </Card>
  );
}

export default Profile;
