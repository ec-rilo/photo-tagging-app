import styled from 'styled-components';
import StyledCharSelection from './gamebackground/CharSelection';
import StyledCrosshair from './gamebackground/Crosshair';

const SelectionContainer = ({
  className,
  isVisible,
  left,
  top,
  selectionLocation,
}) => {
  return (
    <div className={className}>
      <StyledCrosshair isVisible={isVisible} left={left} top={top} />
      <StyledCharSelection
        selectionLocation={selectionLocation}
        name1={'Ryuk'}
        name2={'Patrick Star'}
        name3={'Kratos'}
        name4={'Bowser'}
        name5={'Waldo'}
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
