import styled from 'styled-components';
import device from '../assets/Data/DeviceSizes';
import imgSrc from '../assets/images/backgrounds/the-loc-nar-level.jpg';

const StyledImg = styled.img`
  display: block;

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

const GameBackground = ({ className }) => {
  return (
    <div className={className}>
      <StyledImg src={imgSrc} alt="The Loc Nar Level" />
    </div>
  );
};

const StyledGamebackground = styled(GameBackground)`
  overflow: auto;
  cursor: pointer;

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
