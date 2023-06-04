import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { ProfileStyles } from './styles';
import ProfileLeftSide from './sections/ProfileLeftSide/ProfileLeftSide';
import Posts from './sections/Posts/Posts';
import Settings from './sections/Settings/Settings';
import { UserAuth } from '../../auth/AuthContextProvider';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';

const Profile = () => {
  const [activeComponent, setActiveComponent] = useState('posts');
  const { user } = UserAuth()
  const navigate = useNavigate()
  const { userid } = useParams()
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [profileUsername, setProfileUsername] = useState("");
  const [profileEmail, setProfileEmail] = useState("");


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, "users", userid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setProfilePictureUrl(userData.profilePicture);
          setProfileUsername(userData.username);
          setProfileEmail(userData.email);
        }
      } catch (error) {
        console.log("Error retrieving user data:", error);
      }
    };

    fetchUserData();
  }, [user, userid]);
  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, navigate]);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'posts':
        return <Posts userid={userid} profileEmail={profileEmail} />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <ProfileStyles>
      <ProfileLeftSide userid={userid} setActiveComponent={setActiveComponent} profilePictureUrl={profilePictureUrl} profileUsername={profileUsername} />
      <div>{renderComponent()}</div>
      {/* :) */}
    </ProfileStyles>
  );
};

export default Profile;
