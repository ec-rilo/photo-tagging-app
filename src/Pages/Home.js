import { useCallback, useState } from 'react';
import styled from 'styled-components';
import device from '../assets/Data/DeviceSizes';
import StyledHeader from '../components/Header';
import StyledLeaderboard from '../components/Leaderboard';
import StyledSelectionContainer from '../components/SelectionContainer';
import StyledWelcomeContainer from '../components/WelcomeContainer';
import { HomeProvider } from './HomeContext';

const StyledContainer = styled.div`
  margin: 100px auto 0 auto;
  position: relative;
  display: flex;
  max-width: 600px;

  @media ${device.mobileL} {
    margin: 50px auto 0 auto;
  }
`;

const Home = () => {
  const [playBtn, setPlayBtn] = useState({ isActive: true });
  const [closeBtn, setCloseBtn] = useState({ isActive: false });

  const toggleSelection = useCallback(
    (btn1, btn2) => {
      if (btn1.isActive) {
        setPlayBtn({ isActive: true });
        setCloseBtn({ isActive: false });
      } else if (btn2.isActive) {
        setPlayBtn({ isActive: false });
        setCloseBtn({ isActive: true });
      }
    },
    [setPlayBtn, setCloseBtn]
  );

  return (
    <HomeProvider>
      <div style={{ margin: '0 20px' }}>
        <StyledHeader />
        <StyledSelectionContainer toggleSelection={toggleSelection} />
        <StyledContainer>
          <StyledLeaderboard homepage closeBtn={closeBtn} />
          <StyledWelcomeContainer homepage playBtn={playBtn} />
        </StyledContainer>
      </div>
    </HomeProvider>
  );
};

export default Home;
