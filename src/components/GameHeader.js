import { useState } from 'react';
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

const MenuBtn = ({ className }) => {
  const [active, setActive] = useState(true);

  const toggleActive = () => {
    active === true ? setActive(false) : setActive(true);
  };
  return (
    <div className={className} onClick={() => toggleActive()}>
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
`;

const MenuContainer = () => {
  return (
    <div style={{ position: 'relative' }}>
      <StyledMenuBtn />
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
  return (
    <div className={className}>
      <StyledGameHeader />
      <StyledInfoPanel />
    </div>
  );
};

const StyledGameHeaderContainer = styled(GameHeaderContainer)`
  ${(props) =>
    props.gamepage &&
    css`
      position: sticky;
      top: 0;
    `};
`;

export default StyledGameHeaderContainer;
