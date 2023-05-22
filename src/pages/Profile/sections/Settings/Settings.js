import React, { useState } from 'react';
import { ProfileSettingsStyles, SettingsForm, SettingsChangeUserInfo } from './styles';
import { UserAuth } from '../../../../auth/AuthContextProvider';

const Settings = () => {
  const { updateCredentials } = UserAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !currentPassword || !newPassword) {
      setError('Please fill out all fields.');
      return;
    }
    updateCredentials(email, newPassword, currentPassword, setError, setSuccess);
    setEmail('');
    setNewPassword('');
    setCurrentPassword('');
  };

  return (
    <ProfileSettingsStyles>
      <h1>Settings</h1>
      <SettingsForm>
        <h1>{error}</h1>
        <h1>{success}</h1>
        <SettingsChangeUserInfo>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="currentPassword">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </SettingsChangeUserInfo>
        <button onClick={handleFormSubmit}>Save</button>
      </SettingsForm>
    </ProfileSettingsStyles>
  );
};

export default Settings;
