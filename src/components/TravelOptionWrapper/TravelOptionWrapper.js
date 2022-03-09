import styled from 'styled-components';

const TravelOptionWrapper = styled.div`
  display: flex;

  width: 50%;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;

  border-right: ${(props) =>
    props.rightBorder ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'};
  border-left: ${(props) =>
    props.leftBorder ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'};
`;

export default TravelOptionWrapper;
