import styled from "styled-components";

export const Form = styled.form`
width: 90%;
margin: 15px auto;
padding: 1rem;
display: grid;
flex-direction: column;
align-items: center;
background-color:#F7F7F7;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
border-radius: 25px;
  div {
    display:flex;
    flex-direction: column;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
  }
  h4 {
    margin: 10px 0;
    text-align: center;
    font-size: 2rem;
    > * {
      color: #A199FF;

    }
  }

`;

export const Input = styled.input`
    margin: 0 10px;
    padding: 1rem 2rem;
    border-radius: 15px;
    border:none;
    font-size: 1.5rem;
    position: relative;
    background-color: #E6FFFD;
`;

export const Label = styled.label`
    font-size: 2rem;
    margin-left: 5px;
    font-weight: bold;
    margin: 15px 10px 0 15px;
    cursor: pointer;
`;

export const FileInput = styled.input`
  margin-bottom: 10px;
  opacity: 0;
  height:150px;
  width:150px;

`;

export const ShowPasswordButton = styled.button`
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
  color: #222;
  `
export const Button = styled.button`
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 15px auto;
    cursor:pointer;
    border: none;
    padding: 1rem 2rem;
    border-radius: 4px;
    font-weight:bold;
    background-color: #B799FF;
    color: #FFFFFF;
    font-size: 16px;
`;
