import React, { useState } from 'react';
import { ProfileStyles } from './styles';
import ProfileLeftSide from './sections/ProfileLeftSide/ProfileLeftSide';
import Component1 from './sections/Posts/Posts';
import Component2 from './sections/Settings/Settings';
import Component3 from './sections/Component3/Component3';

const Profile = () => {
  const [activeComponent, setActiveComponent] = useState('posts');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'posts':
        return <Component1 />;
      case 'settings':
        return <Component2 />;
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
    </ProfileStyles>
  );
};

export default Profile;
