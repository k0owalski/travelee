import React from 'react';
import styled from 'styled-components';

import LogoImage from 'img/Logo.png';

const StyledLogo = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-weight: 500;

  & > span {
    color: #f82b50;
  }

  & > img {
    height: 3rem;
    aspect-ratio: 1 / 1;

    margin: 0 0.5rem 0 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;

    & > img {
      height: 2.5rem;
    }
  }
`;

const Logo = () => (
  <StyledLogo>
    <img src={LogoImage} alt="Logo" />
    <span>Travel</span>ee
  </StyledLogo>
);

export default Logo;
