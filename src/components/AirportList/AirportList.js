import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAirportList = styled.ul`
  position: absolute;

  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 11.5rem;

  /* top: 50%; */
  top: 0;

  list-style-type: none;

  /* transform: translateY(-50%); */

  /* background-color: rgba(255, 255, 255, 0.64); */
  background-color: rgba(248, 43, 80, 0.64);
  border-radius: 0.5rem;

  z-index: 3;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > li {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    border-radius: 0.5rem;

    &:hover {
      background-color: rgb(248, 43, 80);
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AirportList = ({
  availablePorts,
  travelPoints,
  setTravelPoints,
  departures,
  isListVisible,
  setListVisibility,
}) => {
  const changeTravelPoints = (portCode) => {
    if (departures && portCode !== travelPoints[1]) {
      setTravelPoints((prev) => [portCode, prev[1]]);
      setListVisibility(false);
    } else if (!departures && portCode !== travelPoints[0]) {
      setTravelPoints((prev) => [prev[0], portCode]);
      setListVisibility(false);
    }
  };

  return (
    <StyledAirportList isVisible={isListVisible}>
      {availablePorts.map((portCode) => (
        <li key={availablePorts.indexOf(portCode)}>
          <button onClick={() => changeTravelPoints(portCode)} type="button">
            {portCode}
          </button>
        </li>
      ))}
    </StyledAirportList>
  );
};

AirportList.propTypes = {
  availablePorts: PropTypes.arrayOf(PropTypes.string).isRequired,
  travelPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTravelPoints: PropTypes.func.isRequired,
  departures: PropTypes.bool.isRequired,
  isListVisible: PropTypes.bool.isRequired,
  setListVisibility: PropTypes.func.isRequired,
};

export default AirportList;
