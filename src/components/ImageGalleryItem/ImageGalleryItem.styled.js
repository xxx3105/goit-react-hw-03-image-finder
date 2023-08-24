import { styled } from 'styled-components';

export const GalleryItem = styled.img`
  width: 280px;
  height: 210px;
  margin: 0 auto;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const ListItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
