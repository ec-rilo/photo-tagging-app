import { createContext, useState } from 'react';

const HomeContext = createContext();

const HomeProvider = (props) => {
  const [leaderboardVisible, setLeaderboardVisible] = useState(true);

  const toggleLeaderboardVisible = (val) => {
    setLeaderboardVisible(val);
  };

  return (
    <HomeContext.Provider
      value={{ toggleLeaderboardVisible, leaderboardVisible }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export { HomeProvider, HomeContext };
