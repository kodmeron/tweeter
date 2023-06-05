import React, { useState } from 'react';
import { ProfileLeftSideStyles, ProfileInformationContainer, ProfilePic, ProfileName, Sidebar, SidebarButton } from './styles';
import { CiSettings } from 'react-icons/ci';
import { AiFillCaretRight } from 'react-icons/ai';
import { GoSignOut } from 'react-icons/go';
import { IoMdCreate } from 'react-icons/io';
import { UserAuth } from '../../../../auth/AuthContextProvider';

import { useNavigate } from 'react-router-dom';

const ProfileLeftSide = ({ setActiveComponent, profilePictureUrl, profileUsername, userid }) => {
  const { user, handleLogout } = UserAuth()
  const [activeButton, setActiveButton] = useState('posts');
  const navigate = useNavigate()


  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setActiveButton(component);
  };



  return (
    <ProfileLeftSideStyles>
      <ProfileInformationContainer>
        <ProfilePic >
          {profilePictureUrl ? <img src={profilePictureUrl} alt="Users profile pic" /> : <div style={{ width: "100px", height: "100px", backgroundColor: 'black', borderRadius: '50%' }}></div>}
        </ProfilePic>
        <ProfileName>{user?.email && profileUsername}</ProfileName>
      </ProfileInformationContainer>
      <Sidebar>
        {user?.uid === userid && (
          <SidebarButton
            onClick={() => navigate("/create-post")}
          >
            Create Posts <IoMdCreate className="icon" />
          </SidebarButton>
        )}
        <SidebarButton
          className={activeButton === 'posts' ? 'active' : ''}
          onClick={() => handleButtonClick('posts')}
        >
          Posts <AiFillCaretRight className="icon" />
        </SidebarButton>
        {user?.uid === userid && (
          <SidebarButton
            className={activeButton === 'settings' ? 'active' : ''}
            onClick={() => handleButtonClick('settings')}
          >
            Settings <CiSettings className="icon" />
          </SidebarButton>
        )}
        {user?.uid === userid && (
          <SidebarButton
            onClick={() => handleLogout()}
          >
            Logout <GoSignOut className="icon" />
          </SidebarButton>
        )}
      </Sidebar>
    </ProfileLeftSideStyles>
  );
};

export default ProfileLeftSide;
