import { useState } from 'react';
import styled from 'styled-components';
import StyledCharSelection from './gamebackground/CharSelection';
import StyledCrosshair from './gamebackground/Crosshair';
import { getCharData } from './gamebackground/characterData';

const SelectionContainer = ({
  className,
  isVisible,
  left,
  top,
  selectionLocation,
  coords,
  screenSize,
}) => {
  const [characters, setCharacters] = useState([
    { name: 'Bowser', isClicked: false },
    { name: 'Kratos', isClicked: false },
    { name: 'Patrick', isClicked: false },
    { name: 'Ryuk', isClicked: false },
    { name: 'Waldo', isClicked: false },
  ]);

  const getDistance = () => {
    let distance;
    if (screenSize === 2000) distance = 100;
    if (screenSize === 1000) distance = 80;
    if (screenSize === 900) distance = 40;

    return distance;
  };

  const checkFound = async (charName) => {
    const charData = await getCharData(screenSize);
    const charCoords = charData[charName];
    let distance = getDistance();

    const isInXRange =
      coords.x > charCoords.x - distance && coords.x < charCoords.x + distance;

    const isInYRange =
      coords.y > charCoords.y - distance && coords.y < charCoords.y + distance;

    if (isInXRange && isInYRange) {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  return (
    <div className={className}>
      <StyledCrosshair isVisible={isVisible} left={left} top={top} />
      <StyledCharSelection
        selectionLocation={selectionLocation}
        characters={characters}
        checkFound={checkFound}
      />
    </div>
  );
};

const StyledSelectionContainer = styled(SelectionContainer)`
  display: block;
  position: absolute;
  opacity: 0;
  transition: opacity 200ms;
  height: 100px;
  width: 100px;

  ${({ isVisible, left, top }) => {
    if (isVisible === true) {
      return `
      opacity: 1;
      top: ${top - 50}px;
      left: ${left - 50}px;
    `;
    } else {
      return `
      top: ${top - 50}px;
      left: ${left - 50}px;
      pointer-events: none;
      `;
    }
  }}
`;

export default StyledSelectionContainer;
