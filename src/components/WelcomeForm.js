import { useState } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  position: absolute;
  color: var(--clr-milk-white);
  top: 9px;
  font-size: 1rem;
  transition: top 0.3s, color 0.3s, font-size 0.3s;

  ${(props) => {
    const { toggle, inputObj } = props;

    if (toggle === false) {
      return `
      top: 8px;
      color: var(--clr-milk-white);
      font-size: 1rem;
      `;
    } else if (inputObj.default === true && toggle === true) {
      return `
      top: -50%;
      color: var(--clr-medium-turquoise);
      font-size: .8rem;
      `;
    } else if (inputObj.valid === true && toggle === true) {
      return `
      top: -50%;
      color: var(--clr-vista-blue);
      font-size: .8rem;
      `;
    } else if (inputObj.invalid === true && toggle === true) {
      return `
      top: -50%;
      color: var(--clr-lavender-rose);
      font-size: .8rem;
      `;
    }
  }}
`;

const StyledInput = styled.input`
  z-index: 2;
  background: transparent;
  height: 30px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--clr-milk-white);
  box-sizing: border-box;
  color: var(--clr-milk-white);
  font-size: 1rem;
  transition: border-bottom 0.3s;
  border-radius: 0;
  padding: 0;

  ${({ toggle }) => {
    if (toggle === false) {
      return `
      &:hover {
      border-bottom: 2px solid var(--clr-milk-white);
      }`;
    }
  }}
`;

const StyledBorder = styled.div`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  bottom: 0;
  background: var(--clr-milk-white);
  transform: scaleX(0);
  transition: transform 0.3s, background-color 0.3s;
  z-index: 3;

  ${(props) => {
    const { toggle, inputObj } = props;

    if (toggle === false) {
      return 'transform: scaleX(0)';
    } else if (inputObj.default === true && toggle === true) {
      return `
      transform: scaleX(1);
      background-color: var(--clr-medium-turquoise);
      `;
    } else if (inputObj.valid === true && toggle === true) {
      return `
      transform: scaleX(1);
      background-color: var(--clr-vista-blue);
      `;
    } else if (inputObj.invalid === true && toggle === true) {
      return `
      transform: scaleX(1);
      background-color: var(--clr-lavender-rose);
      `;
    }
  }}
`;

const WelcomeNotif = styled.p`
  position: absolute;
  font-size: 0.7rem;
  bottom: -20px;
`;

const InputSubContainer = (props) => {
  const {
    className,
    toggle,
    handleInput,
    inputObj,
    setInputToggle,
    inputToggle,
  } = props;

  return (
    <div className={className}>
      <StyledLabel toggle={inputToggle} inputObj={inputObj}>
        Name*
      </StyledLabel>
      <StyledInput
        onChange={(e) => {
          handleInput(e.target.value);
        }}
        onFocus={() => {
          toggle(setInputToggle, true);
        }}
        onBlur={(e) => {
          if (e.target.value === '') {
            toggle(setInputToggle, false);
          }
        }}
        toggle={inputToggle}
      />
      <WelcomeNotif>Player name is required to save scores.</WelcomeNotif>
    </div>
  );
};

const StyledInputSubContainer = styled(InputSubContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const InputContainer = ({ className, inputObj, setInputObj }) => {
  const [inputToggle, setInputToggle] = useState(false);

  const toggle = (setter, value) => {
    value === true ? setter(true) : setter(false);
  };

  const handleInput = (str) => {
    let obj = { ...inputObj };

    for (let prop in obj) {
      obj[prop] = false;
    }

    if (str.length === 0) {
      obj.default = true;
    } else if (str.length <= 20) {
      obj.valid = true;
    } else if (str.length >= 20) {
      obj.invalid = true;
    }

    setInputObj(obj);
  };

  return (
    <div className={className}>
      <StyledInputSubContainer
        toggle={toggle}
        handleInput={handleInput}
        inputObj={inputObj}
        setInputToggle={setInputToggle}
        inputToggle={inputToggle}
      />
      <StyledBorder toggle={inputToggle} inputObj={inputObj} />
    </div>
  );
};

const StyledInputContainer = styled(InputContainer)`
  position: relative;
  display: flex;
`;

const StyledPlayBtn = styled.button`
  margin-top: 30px;
  align-self: flex-end;
  padding: 0;
  background-color: transparent;
  border: none;
  color: var(--clr-milk-white-dim);
  transition: color 0.3s;
  font-family: var(--fnt-bold);
  font-size: 1rem;

  ${({ inputObj }) => {
    if (inputObj.valid === true) {
      return 'color: var(--clr-milk-white);';
    }
  }};
`;

const Form = ({ className }) => {
  const [inputObj, setInputObj] = useState({
    default: true,
    valid: false,
    invalid: false,
  });

  return (
    <form className={className}>
      <StyledInputContainer inputObj={inputObj} setInputObj={setInputObj} />
      <StyledPlayBtn inputObj={inputObj}>PLAY</StyledPlayBtn>
    </form>
  );
};

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export default StyledForm;
