import React from 'react';
import { ProfileSettingsStyles, SettingsForm, SettingsChangeUserInfo } from './styles';

const Settings = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and update user settings
  };

  return (
    <ProfileSettingsStyles>
      <h1>Settings</h1>
      <SettingsForm onSubmit={handleFormSubmit}>
        <SettingsChangeUserInfo>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
        </SettingsChangeUserInfo>
        <button type="submit">Save</button>
      </SettingsForm>
    </ProfileSettingsStyles>
  );
};

export default Settings;
