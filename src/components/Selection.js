import { useState } from 'react';
import styled from 'styled-components';
import StyledCharSelection from './gamebackground/CharSelection';
import StyledCrosshair from './gamebackground/Crosshair';

const SelectionContainer = ({
  className,
  isVisible,
  left,
  top,
  selectionLocation,
  coords,
}) => {
  const [characters, setCharacters] = useState([
    { name: 'Bowser', isClicked: false },
    { name: 'Kratos', isClicked: false },
    { name: 'Patrick', isClicked: false },
    { name: 'Ryuk', isClicked: false },
    { name: 'Waldo', isClicked: false },
  ]);

  const [selectedChar, setSelectedChar] = useState('');

  return (
    <div className={className}>
      <StyledCrosshair isVisible={isVisible} left={left} top={top} />
      <StyledCharSelection
        selectionLocation={selectionLocation}
        characters={characters}
        setSelectedChar={setSelectedChar}
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
