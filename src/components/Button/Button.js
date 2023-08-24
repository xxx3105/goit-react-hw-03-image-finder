import { StyledButton } from './Button.styled';

export const Button = ({ handleLoadMore }) => {
  return <StyledButton onClick={handleLoadMore}> Load More</StyledButton>;
};
