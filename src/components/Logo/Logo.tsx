import React from 'react';
import styled from 'styled-components';

const Logo: React.FC<{}> = () => (
  <StyledLogo className="logo">
    <h1>Logo</h1>
  </StyledLogo>
);

const StyledLogo = styled.div`
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
`;

export default Logo;
