import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AirportList from 'components/AirportList/AirportList';

const StyledAirportSelect = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 56%;

  margin: 1rem 0 0;

  font-size: 1.5rem;

  background-color: rgba(51, 51, 51, 0.25);
  border-radius: 0.5rem;

  cursor: pointer;

  z-index: 2;

  @supports (backdrop-filter: none) {
    background-color: rgba(255, 255, 255, 0.42);
  }

  & button {
    width: 100%;

    padding: 0.5rem 0;

    font-family: 'Quicksand';
    font-size: 1.5rem;

    color: #fff;
    background: none;
    border: none;

    cursor: pointer;
  }
`;

const AirportSelect = ({
  availablePorts,
  travelPoints,
  setTravelPoints,
  departures,
}) => {
  const [isListVisible, setListVisibility] = useState(false);

  const activePortCode = departures ? travelPoints[0] : travelPoints[1];

  return (
    <StyledAirportSelect onMouseLeave={() => setListVisibility(() => false)}>
      <button
        onClick={() => setListVisibility((prev) => !prev)}
        className="activePort"
        type="button"
      >
        {activePortCode}
      </button>
      <AirportList
        availablePorts={availablePorts}
        travelPoints={travelPoints}
        setTravelPoints={setTravelPoints}
        departures={departures}
        isListVisible={isListVisible}
        setListVisibility={setListVisibility}
      />
    </StyledAirportSelect>
  );
};

AirportSelect.propTypes = {
  availablePorts: PropTypes.arrayOf(PropTypes.string).isRequired,
  travelPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTravelPoints: PropTypes.func.isRequired,
  departures: PropTypes.bool.isRequired,
};

export default AirportSelect;
