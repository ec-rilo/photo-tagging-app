import { useState } from 'react';
import styled from 'styled-components';
import device from '../../assets/Data/DeviceSizes';
import imgSrc from '../../assets/images/backgrounds/the-loc-nar-level.jpg';
import StyledSelectionContainer from '../Selection';
import cursorSrc from './crosshairs-2.png';

const StyledImg = styled.img`
  display: block;
  user-select: none;
  -webkit-user-drag: none;
  width: 2000px;

  @media ${device.laptop} {
    width: 1000px;
  }

  @media ${device.mobileL} {
    width: 900px;
  }
`;

const ImgContainer = ({ className }) => {
  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [crosshairIsVisible, setCrosshairIsVisible] = useState(false);
  const [clicked, setClicked] = useState(0);

  const [selectionLocation, setSelectionLocation] = useState('right');

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const [screenSize, setScreenSize] = useState(0);

  const updateCoordinates = (newCoords) => {
    setCoords(newCoords);
  };

  const incrementClicked = () => {
    const newClicked = clicked + 1;
    setClicked(newClicked);
  };

  const handleMouseMove = (ev) => {
    setMousePosition({
      x: ev.nativeEvent.offsetX,
      y: ev.nativeEvent.offsetY,
    });
  };

  const toggleCrosshair = () => {
    crosshairIsVisible === true
      ? setCrosshairIsVisible(false)
      : setCrosshairIsVisible(true);
  };

  const handleSelectionLocation = (ev) => {
    if (ev.pageX < ev.target.offsetParent.parentElement.offsetWidth - 130) {
      setSelectionLocation('right');
    } else if (
      ev.pageX >
      ev.target.offsetParent.parentElement.offsetWidth - 130
    ) {
      setSelectionLocation('left');
    }

    if (
      ev.clientY < 120 &&
      ev.pageX > ev.target.offsetParent.parentElement.offsetWidth - 130
    ) {
      setSelectionLocation('bottom left');
    } else if (ev.clientY < 120 && ev) {
      setSelectionLocation('bottom right');
    } else if (
      ev.nativeEvent.offsetY >
        ev.target.offsetParent.parentElement.offsetHeight - 120 &&
      ev.pageX > ev.target.offsetParent.parentElement.offsetWidth - 130
    ) {
      setSelectionLocation('top left');
    } else if (
      ev.nativeEvent.offsetY >
      ev.target.offsetParent.parentElement.offsetHeight - 120
    ) {
      setSelectionLocation('top right');
    }
  };

  return (
    <div
      className={className}
      onClick={(ev) => {
        if (
          ev.nativeEvent.path[0].id !== 'crosshair' &&
          ev.nativeEvent.path[1].id !== 'crosshair'
        ) {
          toggleCrosshair();
          incrementClicked();
        }

        if (clicked % 2 === 0) {
          handleMouseMove(ev);
          if (ev.nativeEvent.path[0].tagName === 'IMG') {
            handleSelectionLocation(ev);
          }
          updateCoordinates({
            x: ev.nativeEvent.offsetX,
            y: ev.nativeEvent.offsetY,
          });
          setScreenSize(ev.target.clientWidth);
        }
      }}
    >
      <StyledSelectionContainer
        isVisible={crosshairIsVisible}
        left={MousePosition.x}
        top={MousePosition.y}
        selectionLocation={selectionLocation}
        coords={coords}
        screenSize={screenSize}
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
