import React from 'react';
import styled from 'styled-components';
import ArrowImage from 'img/arrow.png';
import ArrowImageAlt from 'img/arrowAlt.png';

const preListItemSeparator = ({ altColor }) => (
  <img src={altColor ? ArrowImageAlt : ArrowImage} alt="to" />
);

const ListItemSeparator = styled(preListItemSeparator)`
  margin: 0 1rem;
`;

export default ListItemSeparator;
