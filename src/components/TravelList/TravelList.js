import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItemSeparator from 'components/ListItemSeparator/ListItemSeparator';

const StyledTravelList = styled.section`
  display: grid;

  width: 100%;

  margin: 2rem 0 4rem;

  grid-template-columns: 1fr;
  gap: 2rem;

  font-size: 1.5rem;

  & > .travelListItem {
    position: relative;
    display: flex;

    padding: 1.5rem 3rem;

    flex-wrap: wrap;
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

    @media screen and (max-width: 678px) {
      display: grid;

      grid-template-columns: repeat(8, max-content);
      gap: 1rem;
    }

    @media screen and (max-width: 576px) {
      grid-template-columns: repeat(6, max-content);
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(4, max-content);
    }

    @media screen and (max-width: 340px) {
      grid-template-columns: repeat(2, max-content);
    }

    cursor: default;

    & > .shortest {
      position: absolute;

      top: 0;
      left: 50%;

      padding: 0.5rem 1rem;

      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      font-weight: 400;

      text-align: center;

      color: #fff;
      background-color: #f82b50;
      border-radius: 0.5rem;

      transform: translate(-50%, -50%);

      @media screen and (max-width: 480px) {
        width: 75%;
        width: max-content;
      }
    }

    & > img {
      margin: 0 1rem;

      user-select: none;

      &:last-of-type {
        display: none;
      }

      @media screen and (max-width: 678px) {
        margin: 0;
      }
    }
  }
`;

const TravelList = ({ travelPoints: [departurePoint, arrivalPoint] }) => {
  const defaultFlights = [
    ['ATH', 'EDI'],
    ['ATH', 'GLA'],
    ['ATH', 'CTA'],
    ['BFS', 'CGN'],
    ['BFS', 'LTN'],
    ['BFS', 'CTA'],
    ['BTS', 'STN'],
    ['BTS', 'BLQ'],
    ['CRL', 'BLQ'],
    ['CRL', 'BSL'],
    ['CRL', 'LTN'],
    ['DUB', 'LCA'],
    ['LTN', 'DUB'],
    ['LTN', 'MAD'],
    ['LCA', 'HAM'],
    ['EIN', 'BUD'],
    ['EIN', 'MAD'],
    ['HAM', 'BRS'],
    ['KEF', 'LPL'],
    ['KEF', 'CGN'],
    ['SUF', 'LIS'],
    ['SUF', 'BUD'],
    ['SUF', 'STN'],
    ['STN', 'EIN'],
    ['STN', 'HAM'],
    ['STN', 'DUB'],
    ['STN', 'KEF'],
  ];

  const traces = [[departurePoint]];

  const searchPorts = (prevPort, flights) => {
    const nextPorts = flights.filter((flight) => flight.includes(prevPort));

    nextPorts.forEach((flight) => {
      flights.splice(flights.indexOf(flight), 1);

      nextPorts[nextPorts.indexOf(flight)] =
        flight[flight.length - flight.indexOf(prevPort) - 1];
    });

    return [nextPorts, flights];
  };

  const findTraces = (prevPort, flights, traceIndex = 0) => {
    const [nextPorts, reducedFlights] = searchPorts(prevPort, flights) || [];

    if (!nextPorts.includes(arrivalPoint))
      nextPorts.forEach((port) => {
        if (typeof port === 'string') {
          traces.push([...traces[traceIndex], port]);
          findTraces(port, reducedFlights, traces.length - 1);
        } else traces[traceIndex].push(null);
      });
    else traces[traceIndex].push(arrivalPoint);
  };

  findTraces(departurePoint, defaultFlights);

  const listItems = traces
    .filter((trace) => trace.includes(arrivalPoint))
    .sort((a, b) => a.length - b.length);

  return (
    <StyledTravelList>
      {listItems.map((listItem) => (
        <div className="travelListItem" key={listItems.indexOf(listItem)}>
          {listItem.length === listItems[0].length && (
            <div className="shortest">Najkrótsze połączenie</div>
          )}
          {listItem.map((travelPoint) => (
            <React.Fragment key={listItem.indexOf(travelPoint)}>
              <span>{travelPoint}</span>
              <ListItemSeparator
                altColor={
                  window.getComputedStyle(document.querySelector('body'))
                    .color === 'rgb(51, 51, 51)'
                }
              />
            </React.Fragment>
          ))}
        </div>
      ))}
    </StyledTravelList>
  );
};

TravelList.propTypes = {
  travelPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TravelList;
