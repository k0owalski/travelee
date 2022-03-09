import styled from 'styled-components';

const TravelOptions = styled.section`
  display: flex;

  width: 100%;

  padding: 2rem 0;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    254.12deg,
    rgba(255, 255, 255, 0.42) 0%,
    rgba(255, 255, 255, 0.1008) 100%
  );
  border-radius: 1rem;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);

  @supports (backdrop-filter: none) {
    backdrop-filter: blur(12px);
    box-shadow: none;
  }

  cursor: default;
  user-select: none;

  & > .TravelOptionsFlexBox {
    display: flex;

    width: 100%;

    margin: 4rem 0 0;
  }
`;

export default TravelOptions;
