import React, { useState } from 'react';
import { ProfileLeftSideStyles, ProfileInformationContainer, ProfilePic, ProfileName, Sidebar, SidebarButton } from './styles';
import { CiSettings } from 'react-icons/ci';
import { AiFillCaretRight } from 'react-icons/ai';

const ProfileLeftSide = ({ setActiveComponent }) => {
  const [activeButton, setActiveButton] = useState('posts');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setActiveButton(component);
  };

  return (
    <ProfileLeftSideStyles>
      <ProfileInformationContainer>
        <ProfilePic />
        <ProfileName>Jonathan</ProfileName>
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
      </Sidebar>
    </ProfileLeftSideStyles>
  );
};

export default ProfileLeftSide;
