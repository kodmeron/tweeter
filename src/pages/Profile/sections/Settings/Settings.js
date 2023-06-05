import React, { useState } from 'react';
import { ProfileSettingsStyles, SettingsForm, SettingsChangeUserInfo } from './styles';
import { UserAuth } from '../../../../auth/AuthContextProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Settings = () => {
  const { updateCredentials, resetPassword } = UserAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleForgotPassword = () => {
    setShowResetPassword(true);
  };

  const handleResetPassword = () => {
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    resetPassword(email, setSuccess, setError);
    setEmail('');
  };

  return (
    <ProfileSettingsStyles>
      <h1>Settings</h1>
      <SettingsForm>
        <h1>{error ? error : success}</h1>
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
            <div className="password-input">
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                id="currentPassword"
                name="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <button onClick={toggleShowCurrentPassword}>
                {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </SettingsChangeUserInfo>
        <button className='save-button' onClick={handleFormSubmit}>Save</button>
        {!showResetPassword && (
          <button className='forgot-password-button' onClick={handleForgotPassword}>
            Forgot your password? Press here
          </button>
        )}
        {showResetPassword && (
          <div>
            <label htmlFor="reset-email">Email:</label>
            <input
              type="text"
              id="reset-email"
              name="resetEmail"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className='save-button' onClick={handleResetPassword}>Reset Password</button>
          </div>
        )}
      </SettingsForm>
    </ProfileSettingsStyles>
  );
};

export default Settings;
