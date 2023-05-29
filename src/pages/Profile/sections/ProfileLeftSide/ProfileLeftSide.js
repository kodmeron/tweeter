import React, { useEffect, useState } from 'react';
import { ProfileLeftSideStyles, ProfileInformationContainer, ProfilePic, ProfileName, Sidebar, SidebarButton } from './styles';
import { CiSettings } from 'react-icons/ci';
import { AiFillCaretRight } from 'react-icons/ai';
import { UserAuth } from '../../../../auth/AuthContextProvider';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../../firebase';

const ProfileLeftSide = ({ setActiveComponent }) => {
  const { user, handleLogout } = UserAuth()
  const [userEmail, setUserEmail] = useState("")
  const [activeButton, setActiveButton] = useState('posts');
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [profileUsername, setProfileUsername] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, "users", user?.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setProfilePictureUrl(userData.profilePicture);
          setProfileUsername(userData.username);
        }
      } catch (error) {
        console.log("Error retrieving user data:", error);
      }
    };

    fetchUserData();
  }, [user]);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setActiveButton(component);
  };


  return (
    <ProfileLeftSideStyles>
      <ProfileInformationContainer>
        <ProfilePic >
          <img src={profilePictureUrl} alt="" />
        </ProfilePic>
        <ProfileName>{user?.email && profileUsername}</ProfileName>
      </ProfileInformationContainer>
      <Sidebar>
        <SidebarButton
          className={activeButton === 'posts' ? 'active' : ''}
          onClick={() => handleButtonClick('posts')}
        >
          Posts <AiFillCaretRight className="icon" />
        </SidebarButton>
        <SidebarButton
          className={activeButton === 'settings' ? 'active' : ''}
          onClick={() => handleButtonClick('settings')}
        >
          Settings <CiSettings className="icon" />
        </SidebarButton>
        <SidebarButton
          className={activeButton === 'component3' ? 'active' : ''}
          onClick={() => handleButtonClick('component3')}
        >
          Component 3 <CiSettings className="icon" />
        </SidebarButton>
        <SidebarButton
          onClick={() => handleLogout()}
        >
          Logout
        </SidebarButton>
      </Sidebar>
    </ProfileLeftSideStyles>
  );
};

export default ProfileLeftSide;
