import { useState, useEffect, useContext } from 'react';
import { HomeContext } from '../Pages/HomeContext';
import styled, { keyframes, css } from 'styled-components';
import device from '../assets/Data/DeviceSizes';

const colorChangeLightToDark = keyframes`
    0% { 
      color: var(--clr-milk-white); 
      background-color: var(--clr-gunmetal);
    }
    100% {
      color: var(--clr-gunmetal); 
      background-color: var(--clr-milk-white);
    }
`;

const colorChangeDarkToLight = keyframes`
    0% {
      color: var(--clr-gunmetal);
      background-color: var(--clr-milk-white);
    }
    100% { color: var(--clr-milk-white); 
    background-color: var(--clr-gunmetal);
    }
`;

const SelectionBtn = ({
  className,
  text,
  btnName,
  setActive,
  status,
  otherFunc,
}) => {
  return (
    <button
      className={className}
      onClick={() => {
        setActive(btnName);
        if (otherFunc !== undefined) {
          otherFunc(true);
        }
      }}
    >
      <p>{text}</p>
    </button>
  );
};

const StyledSelectionBtn = styled(SelectionBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-gunmetal);
  flex-grow: 1;
  color: var(--clr-milk-white);
  border: none;
  text-decoration: none;
  outline: none;
  font-family: var(--fnt-regular);
  cursor: pointer;
  font-size: 1rem;

  @media ${device.mobileL} {
    font-size: revert;
  }

  ${(props) => {
    if (props.status.isActive) {
      return css`
        animation: ${colorChangeLightToDark} 0.5s forwards;
      `;
    } else {
      return css`
        animation: ${colorChangeDarkToLight} 0.5s forwards;
      `;
    }
  }}
`;

const SelectionContainer = ({ className, toggleSelection }) => {
  const { toggleLeaderboardVisible } = useContext(HomeContext);
  const [btn1, setBtn1] = useState({ isActive: true });
  const [btn2, setBtn2] = useState({ isActive: false });

  const setActive = (btnName) => {
    if (btnName === 'btn1' && btn1.isActive !== true) {
      setBtn1({ isActive: true });
      setBtn2({ isActive: false });
    } else if (btnName === 'btn2' && btn2.isActive !== true) {
      setBtn1({ isActive: false });
      setBtn2({ isActive: true });
    }
  };

  useEffect(() => {
    toggleSelection(btn1, btn2);
  }, [btn1, btn2, toggleSelection]);

  return (
    <div className={className}>
      <StyledSelectionBtn
        text="Play"
        btnName="btn1"
        setActive={setActive}
        status={btn1}
      />
      <StyledSelectionBtn
        text="Leaderboard"
        btnName="btn2"
        setActive={setActive}
        status={btn2}
        otherFunc={toggleLeaderboardVisible}
      />
    </div>
  );
};

const StyledSelectionContainer = styled(SelectionContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid var(--clr-milk-white);
  max-width: 600px;
  margin: 50px auto 0 auto;

  height: 50px;

  @media ${device.laptop} {
    height: 40px;
  }

  @media ${device.mobileL} {
    height: 35px;
  }

  @media ${device.mobileS} {
    height: 25px;
  }
`;

export default StyledSelectionContainer;
