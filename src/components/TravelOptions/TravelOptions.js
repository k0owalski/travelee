import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from 'components/Logo/Logo';
import TravelOptionWrapper from 'components/TravelOptionWrapper/TravelOptionWrapper';
import AirportSelect from 'components/AirportSelect/AirportSelect';

const StyledTravelOptions = styled.section`
  display: flex;

  width: 100%;

  padding: 2rem 0;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    254.12deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  border-radius: 1rem;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);

  @supports (backdrop-filter: none) {
    background: linear-gradient(
      254.12deg,
      rgba(255, 255, 255, 0.42) 0%,
      rgba(255, 255, 255, 0.1008) 100%
    );

    backdrop-filter: blur(12px);
    box-shadow: none;
  }

  cursor: default;
  user-select: none;
  z-index: 1;

  & > .travelOptionsFlexBox {
    display: flex;

    width: 100%;

    margin: 4rem 0 0;

    @media screen and (max-width: 678px) {
      flex-direction: column;
    }

    @media screen and (max-width: 480px) {
      margin: 2rem 0 0;
    }
  }
`;

const TravelOptions = ({ availablePorts, travelPoints, setTravelPoints }) => (
  <StyledTravelOptions>
    <Logo />
    <div className="travelOptionsFlexBox">
      <TravelOptionWrapper rightBorder>
        Punkt odlotu
        <AirportSelect
          availablePorts={availablePorts}
          travelPoints={travelPoints}
          setTravelPoints={setTravelPoints}
          departures
        />
      </TravelOptionWrapper>
      <TravelOptionWrapper leftBorder>
        Punkt przylotu
        <AirportSelect
          availablePorts={availablePorts}
          travelPoints={travelPoints}
          setTravelPoints={setTravelPoints}
          departures={false}
        />
      </TravelOptionWrapper>
    </div>
  </StyledTravelOptions>
);

TravelOptions.propTypes = {
  availablePorts: PropTypes.arrayOf(PropTypes.string).isRequired,
  travelPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTravelPoints: PropTypes.func.isRequired,
};

export default TravelOptions;
