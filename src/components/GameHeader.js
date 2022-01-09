import { useState } from 'react';
import styled from 'styled-components';
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

const GameHeader = ({ className }) => {
  return (
    <header className={className}>
      <StyledLogo gamepage />
      <StyledMenuBtn />
    </header>
  );
};

const StyledGameHeader = styled(GameHeader)`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default StyledGameHeader;
