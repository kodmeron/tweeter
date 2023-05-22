import React, { useEffect, useState } from 'react';
import { ProfileLeftSideStyles, ProfileInformationContainer, ProfilePic, ProfileName, Sidebar, SidebarButton } from './styles';
import { CiSettings } from 'react-icons/ci';
import { AiFillCaretRight } from 'react-icons/ai';
import { UserAuth } from '../../../../auth/AuthContextProvider';

const ProfileLeftSide = ({ setActiveComponent }) => {
  const { user, handleLogout } = UserAuth()
  const [userEmail, setUserEmail] = useState("")
  const [activeButton, setActiveButton] = useState('posts');

  useEffect(() => {
    const emailParts = user?.email?.split('@');
    const firstPartOfEmail = emailParts ? emailParts[0] : '';
    setUserEmail(firstPartOfEmail)
  }
    , [user])

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setActiveButton(component);
  };


  return (
    <ProfileLeftSideStyles>
      <ProfileInformationContainer>
        <ProfilePic />
        <ProfileName>{user?.email && userEmail}</ProfileName>
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
