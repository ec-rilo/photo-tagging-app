import { useCallback, useState } from 'react';
import StyledHeader from '../components/Header';
import StyledLeaderboard from '../components/Leaderboard';
import StyledSelectionContainer from '../components/SelectionContainer';
import StyledWelcomeContainer from '../components/WelcomeContainer';
import { HomeProvider } from './HomeContext';

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
        <div
          style={{
            marginTop: '50px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <StyledWelcomeContainer playBtn={playBtn} />
          <StyledLeaderboard homepage closeBtn={closeBtn} />
        </div>
      </div>
    </HomeProvider>
  );
};

export default Home;
