import { useTheme } from '@/styles/ThemeProvider';
import lightTheme from '@/theme/light';
import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const MyComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <StyledComponent>
      <div>Themed Component</div>
      <p>Current Theme: {theme === lightTheme ? 'Light' : 'Dark'}</p>
    </StyledComponent>
  );
};

export default MyComponent;
