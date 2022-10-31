import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
`;

export const Button = styled.button`
  margin-bottom: 15px;
  
  width: 100%;
  padding: 0.35em 1.2em;
  background-color: grey;
  border: 0.1em solid #ffffff;
  margin-bottom: 15px;
  border-radius: 0.12em;
  
  text-decoration: none;
  font-size: 15px;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  
  :hover {
    color: #ffffff;
    background-color: #000000;
  }
`;
