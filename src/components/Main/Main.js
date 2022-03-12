import React, { useState } from 'react';
import styled from 'styled-components';

import TravelOptions from 'components/TravelOptions/TravelOptions';
import TravelList from 'components/TravelList/TravelList';

const StyledMain = styled.main`
  display: flex;

  max-width: 1024px;
  width: 80%;

  margin: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  const availablePorts = [
    'ATH',
    'BSL',
    'BFS',
    'BLQ',
    'BTS',
    'BRS',
    'CRL',
    'BUD',
    'DUB',
    'EDI',
    'EIN',
    'GLA',
    'HAM',
    'CTA',
    'KEF',
    'CGN',
    'SUF',
    'LCA',
    'LPL',
    'LIS',
    'LTN',
    'STN',
    'MAD',
  ];

  const [travelPoints, setTravelPoints] = useState([
    availablePorts[0],
    availablePorts[1],
  ]);

  return (
    <StyledMain>
      <TravelOptions
        availablePorts={availablePorts}
        travelPoints={travelPoints}
        setTravelPoints={setTravelPoints}
      />
      <TravelList travelPoints={travelPoints} />
    </StyledMain>
  );
};

export default Main;
