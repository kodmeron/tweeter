import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ProfileStyles } from './styles';
import ProfileLeftSide from './sections/ProfileLeftSide/ProfileLeftSide';
import Posts from './sections/Posts/Posts';
import Settings from './sections/Settings/Settings';
import Component3 from './sections/Component3/Component3';
import { UserAuth } from '../../auth/AuthContextProvider';
const Profile = () => {
  const [activeComponent, setActiveComponent] = useState('posts');
  const { user } = UserAuth()
  const navigate = useNavigate()


  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, navigate]);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'posts':
        return <Posts />;
      case 'settings':
        return <Settings />;
      case 'component3':
        return <Component3 />;
      default:
        return null;
    }
  };

  return (
    <ProfileStyles>
      <ProfileLeftSide setActiveComponent={setActiveComponent} />
      <div>{renderComponent()}</div>
      {/* :) */}
    </ProfileStyles>
  );
};

export default Profile;
