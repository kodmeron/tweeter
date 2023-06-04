import styled from "styled-components";


// Här skriver man vanlig scss/css
// Den här är local scope och används bara där den här importeras och där komponenten används
export const ProfileSettingsStyles = styled.section`
width: 100%;
height: 100%;
background-color: #ACBCFF;

  h1 {
    font-size: 3rem;
    color: white;
    margin-left: 5px;
  }
`
export const SettingsForm = styled.section`
display: grid;
flex-direction: column;
align-items: center;
  div {
    display:flex;
    flex-direction: column;
  }
  label {
    font-size: 2rem;
    margin-left: 5px;
    font-weight: bold;
    margin: 15px 10px 0 10px;
  }
  input {
    margin: 0 10px;
    padding: 1rem 2rem;
    border-radius: 15px;
    border:none;
    font-size: 1.5rem;
    background-color: #E6FFFD;
  }
  .password-input {
    position: relative;
  }
  .save-button {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 15px auto;
    cursor:pointer;
    border: none;
    padding: 1rem 2rem;
    border-radius: 15px;
    font-weight:bold;
    background-color: #AEE2FF;
  }
  .forgot-password-button {
    background-color: transparent;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`

export const SettingsChangeUserInfo = styled.section`
button {
  position: absolute;
  right: 2rem;
  top:4px;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  cursor:pointer;
  border: none;
  border-radius: 15px;
  font-weight:bold;
  font-size: 3rem;
  background: transparent;
}
`