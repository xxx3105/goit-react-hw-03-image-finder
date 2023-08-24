import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul{
    margin:0;
    padding:0;
    list-style: none;
}

img{
    display:block;
    max-width:100%;
    object-fit:cover;

}

h2{
margin: 0;
padding: 0;
padding-left: 0;

}

`;

export const Container = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
`;

export const TitleOfBlocks = styled.p`
  text-align: left;
  margin-left: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const NameOfList = styled.h2`
  font-weight: 600;
  margin: 0;
`;

export const OutputPlace = styled.ul`
  font-size: 18px;
`;

export const OutputConainer = styled.ul`
  max-width: 400px;
  height: auto;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1px solid black;
  margin: 0 auto;
  padding: 25px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 100px;
`;
export const СontactDesign = styled.li`
  margin: 10px 0;
`;
