import styled from 'styled-components'
export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  @media (min-width: 768px) {
    max-width: 60%;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 3rem;
`;
export const SuccessMessage = styled.h1`
  text-align: center;
`
export const ErrorMessage = styled.h1`
  text-align: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 4px;
  font-size: 1.7rem;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 1.7rem;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 1.7rem;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #b799ff;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;