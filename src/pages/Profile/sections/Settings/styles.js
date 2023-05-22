import styled from "styled-components";


// Här skriver man vanlig scss/css
// Den här är local scope och används bara där den här importeras och där komponenten används
export const ProfileSettingsStyles = styled.section`
width: 100%;
height: 100%;
background-color: #ACBCFF;

  h1 {
    font-size: 3rem;
    text-align: center;
  }
`
export const SettingsForm = styled.section`
display: grid;
flex-direction: column;
align-items: center;
  div {
    display:flex;
    flex-direction: column;
    margin: 10px;
  }
  label {
    font-size: 2rem;
    margin-left: 5px;
    font-weight: bold;
  }
  input {
    padding: 1rem 2rem;
    border-radius: 15px;
    border:none;
    font-size: 1.5rem;
    background-color: #E6FFFD;
  }
  button {
    display: flex;
    text-align: center;
    justify-content: center;
    width: 15rem;
    margin: 0 auto;
    cursor:pointer;
    border: none;
    padding: 1rem 2rem;
    border-radius: 15px;
    font-weight:bold;
    background-color: #AEE2FF;
  }
`

export const SettingsChangeUserInfo = styled.section`
`