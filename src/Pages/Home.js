import { useCallback, useState } from 'react';
import { HomeProvider } from './HomeContext';
import HomePage from './HomePage';

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
      <div
        style={{
          margin: '0 auto',
          padding: '0 20px',
          maxWidth: '2000px',
        }}
      >
        <HomePage
          toggleSelection={toggleSelection}
          playBtn={playBtn}
          closeBtn={closeBtn}
        />
      </div>
    </HomeProvider>
  );
};

export default Home;
