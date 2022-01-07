import styled from 'styled-components';
import StyledForm from './WelcomeForm';

const StyledTitle = styled.h2`
  font-size: 2rem;
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const WelcomeContainer = ({ className }) => {
  return (
    <div className={className}>
      <IntroSection>
        <StyledTitle>Welcome</StyledTitle>
        <p>To start playing, please enter your name here.</p>
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
