import styled, { css } from 'styled-components';
import device from '../assets/Data/DeviceSizes';
import StyledForm from './WelcomeForm';

const StyledTitle = styled.h2`
  font-size: 3rem;

  @media ${device.mobileL} {
    font-size: 2.5rem;
  }

  @media ${device.mobileS} {
    font-size: 2rem;
  }
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledSubTitle = styled.p`
  font-size: 1.2rem;

  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;

const WelcomeContainer = ({ className }) => {
  return (
    <div className={className}>
      <IntroSection>
        <StyledTitle>Welcome</StyledTitle>
        <StyledSubTitle>
          To start playing, please enter your name here.
        </StyledSubTitle>
      </IntroSection>
      <StyledForm />
    </div>
  );
};

const StyledWelcomeContainer = styled(WelcomeContainer)`
  color: var(--clr-milk-white);
  font-family: var(--fnt-regular);
  font-size: 1rem;
  opacity: 1;
  pointer-events: auto;
  transition: opactiy 0.3s;

  ${(props) =>
    props.homepage &&
    css`
      flex-grow: 1;
    `}

  ${({ playBtn }) => {
    if (!playBtn.isActive) {
      return `
      opacity: 0;
      pointer-events: none;
    `;
    }
  }}
`;

export default StyledWelcomeContainer;
