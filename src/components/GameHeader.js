import { useState, useContext, useEffect } from 'react';
import { GameContext } from '../assets/context/GameContext';
import styled, { css } from 'styled-components';
import StyledInfoPanel from './InfoPanel';
import StyledLogo from './Logo';

const MenuBtnDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--clr-milk-white);
  transition: height 0.1s;

  ${({ active }) => {
    if (active === false) {
      return `height: 0px`;
    }
  }}
`;

const toggleActive = (isActive, setActive) => {
  isActive === true ? setActive(false) : setActive(true);
};

const MenuBtn = ({ className, toggle, gameMenu }) => {
  const [active, setActive] = useState(true);

  if (gameMenu.isActive === active) {
    toggleActive(active, setActive);
  }

  return (
    <div
      className={className}
      onClick={() => {
        toggleActive(active, setActive);
        toggle();
      }}
    >
      <MenuBtnDot active={active} />
      <MenuBtnDot active={active} />
      <MenuBtnDot active={active} />
    </div>
  );
};

const StyledMenuBtn = styled(MenuBtn)`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  cursor: pointer;
  height: 40px;

  ${({ gameMenu }) => {
    if (gameMenu.isActive === true) {
      return 'pointer-events: none;';
    }
  }}
`;

const MenuContainer = () => {
  const { toggleGameMenu, gameMenu } = useContext(GameContext);
  return (
    <div style={{ position: 'relative' }}>
      <StyledMenuBtn toggle={toggleGameMenu} gameMenu={gameMenu} />
    </div>
  );
};

const GameHeader = ({ className }) => {
  return (
    <header className={className}>
      <StyledLogo gamepage />
      <MenuContainer />
    </header>
  );
};

const StyledGameHeader = styled(GameHeader)`
  z-index: 9999;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--clr-gunmetal);
`;

const GameHeaderContainer = ({ className }) => {
  const { gameMenu } = useContext(GameContext);

  return (
    <div className={className}>
      <StyledGameHeader />
      <StyledInfoPanel gameMenu={gameMenu} />
    </div>
  );
};

const StyledGameHeaderContainer = styled(GameHeaderContainer)`
  z-index: 9999;
  ${(props) =>
    props.gamepage &&
    css`
      position: sticky;
      top: 0;
    `};
`;

export default StyledGameHeaderContainer;
