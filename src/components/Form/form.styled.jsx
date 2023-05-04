import styled from 'styled-components';

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  gap: 10px;
  width: 600px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 3px;
  &:hover,
  :focus {
    background-color: #035f5f;
  }
`;

export const Input = styled.input`
  border: 1px solid teal;
  padding: 5px 15px;
`;
