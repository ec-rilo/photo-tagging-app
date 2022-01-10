import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = (props) => {
  const [gameMenu, setGameMenu] = useState({ isActive: false });

  const toggleGameMenu = () => {
    gameMenu.isActive === true
      ? setGameMenu({ isActive: false })
      : setGameMenu({ isActive: true });

    console.log(gameMenu);
  };

  return (
    <GameContext.Provider value={{ gameMenu, toggleGameMenu }}>
      {props.children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
