import styled from 'styled-components';

const Logo = styled.div`
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
`;

export default Logo;
