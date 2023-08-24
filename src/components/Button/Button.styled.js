import { styled } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px;
  border: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  transition: transform 0.2s ease-in-out;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: gray;
    color: white;
  }
`;
