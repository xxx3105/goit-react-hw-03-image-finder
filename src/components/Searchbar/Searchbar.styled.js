import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: gray;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
`;

export const StyledButton = styled.button`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 16px;
  border: none;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledInput = styled.input`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px;
  border: none;
  line-height: 2;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const StyledSearch = styled.div`
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
