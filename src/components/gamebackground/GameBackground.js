import { useState } from 'react';
import styled from 'styled-components';
import device from '../../assets/Data/DeviceSizes';
import imgSrc from '../../assets/images/backgrounds/the-loc-nar-level.jpg';
import StyledCrosshair from './Crosshair';
import cursorSrc from './crosshairs-2.png';

const StyledImg = styled.img`
  display: block;
  user-select: none;
  -webkit-user-drag: none;

  @media ${device.laptop} {
    width: 1000px;
  }

  @media ${device.mobileL} {
    width: 900px;
  }

  @media ${device.mobileS} {
    width: 800px;
  }
`;

const ImgContainer = ({ className }) => {
  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [crosshairIsVisible, setCrosshairIsVisible] = useState(false);

  const handleMouseMove = (ev) => {
    setMousePosition({
      x: ev.nativeEvent.layerX,
      y: ev.nativeEvent.layerY,
    });
  };

  const toggleCrosshair = () => {
    crosshairIsVisible === true
      ? setCrosshairIsVisible(false)
      : setCrosshairIsVisible(true);
  };
  return (
    <div
      className={className}
      onClick={(ev) => {
        handleMouseMove(ev);
        toggleCrosshair();
      }}
    >
      <StyledCrosshair
        isVisible={crosshairIsVisible}
        left={MousePosition.x}
        top={MousePosition.y}
      />
      <StyledImg src={imgSrc} alt="The Loc Nar Level" />
    </div>
  );
};

const StyledImgContainer = styled(ImgContainer)`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const GameBackground = ({ className }) => {
  return (
    <div className={className}>
      <StyledImgContainer />
    </div>
  );
};

const StyledGamebackground = styled(GameBackground)`
  overflow: auto;
  cursor: url(${cursorSrc}) 16 16, pointer;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: var(--clr-milk-white);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-blueberry);
  }

  &::-webkit-scrollbar-track {
    background-color: var(--clr-milk-white);
  }
`;

export default StyledGamebackground;
