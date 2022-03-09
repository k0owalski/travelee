import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Main from 'components/Main/Main';
import TravelOptions from 'components/TravelOptions/TravelOptions';
import Logo from 'components/Logo/Logo';
import LogoImage from 'img/Logo.png';
import TravelOptionWrapper from 'components/TravelOptionWrapper/TravelOptionWrapper';
import AirportSelect from 'components/AirportSelect/AirportSelect';

const Root = () => (
  <>
    <GlobalStyle />
    <Main>
      <TravelOptions>
        <Logo>
          <img src={LogoImage} alt="Logo" />
          <span>Travel</span>ee
        </Logo>
        <div className="TravelOptionsFlexBox">
          <TravelOptionWrapper rightBorder>
            Punkt odlotu
            <AirportSelect departures>ATH</AirportSelect>
          </TravelOptionWrapper>
          <TravelOptionWrapper leftBorder>
            Punkt przylotu
            <AirportSelect arrivals>CGN</AirportSelect>
          </TravelOptionWrapper>
        </div>
      </TravelOptions>
    </Main>
  </>
);

export default Root;
