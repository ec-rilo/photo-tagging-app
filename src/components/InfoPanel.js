import styled, { css } from 'styled-components';
import closeBtnSrc from '../assets/images/icons/close-btn-icon.png';
import clockSrc from '../assets/images/icons/clock-icon.png';
import scoresSrc from '../assets/images/icons/scores-icon.png';
import { useContext, useState } from 'react';
import { GameContext } from '../assets/context/GameContext';

const DataImg = ({ className, src, alt }) => {
  return <img className={className} src={src} alt={alt} />;
};

const StyledDataImg = styled(DataImg)`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const DataContainer = ({ className, src, alt, content }) => {
  return (
    <div className={className}>
      <StyledDataImg src={src} alt={alt} />
      <p>{content}</p>
    </div>
  );
};

const StyledDataContainer = styled(DataContainer)`
  height: 30px;
  display: flex;
  align-items: center;
  font-family: var(--fnt-regular);
  gap: 60px;

  ${(props) =>
    props.selectable &&
    css`
      &:hover {
        cursor: pointer;
        background-color: var(--clr-davy-grey-dim);
      }
    `}
`;

const CloseBtn = ({ className }) => {
  return <img className={className} src={closeBtnSrc} alt={'Close Menu'} />;
};

const StyledCloseBtn = styled(CloseBtn)`
  display: block;
  width: 20px;
  height: 20px;
  object-fit: contain;
  cursor: pointer;
`;

const CloseBtnContainer = ({ className }) => {
  const { toggleGameMenu } = useContext(GameContext);

  return (
    <div className={className} onClick={() => toggleGameMenu()}>
      <StyledCloseBtn />
    </div>
  );
};

const StyledCloseBtnContainer = styled(CloseBtnContainer)`
  display: flex;
  justify-content: flex-end;
`;

const SeparationLine = styled.div`
  margin: 30px 0;
  height: 2px;
  width: 100%;
  background-color: var(--clr-cloud);
`;

const CharacterDataContainer = ({ className, name, origin }) => {
  return (
    <div className={className}>
      <p>{name}</p>
      <p style={{ color: 'var(--clr-davy-grey)' }}>{origin}</p>
    </div>
  );
};

const StyledCharacterDataContainer = styled(CharacterDataContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-davy-grey-dim);
  }
`;

const CharacterContainer = ({ className }) => {
  const [characters, setCharacters] = useState([
    {
      name: 'Ryuk',
      origin: 'Death Note',
    },
    {
      name: 'Patrick Star',
      origin: 'Spongebob',
    },
    {
      name: 'Kratos',
      origin: 'God of War',
    },
    {
      name: 'Bowser',
      origin: 'Mario',
    },
    {
      name: 'Waldo',
      origin: "Where's Waldo",
    },
  ]);

  return (
    <div>
      {characters.map((character, index) => {
        return (
          <StyledCharacterDataContainer
            key={index}
            name={character.name}
            origin={character.origin}
          />
        );
      })}
    </div>
  );
};

const StyledCharacterContainer = styled(CharacterContainer)`
  margin-top: '20px';
  display: 'flex';
  flex-direction: 'column';
`;

const InfoPanel = ({ className }) => {
  return (
    <div className={className}>
      <div style={{ height: '500px' }}>
        <StyledCloseBtnContainer />
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          <StyledDataContainer
            src={clockSrc}
            alt={'Clock'}
            content={'01:12:00'}
          />
          <StyledDataContainer
            src={scoresSrc}
            alt={'Score Icon with an arrow trending upward'}
            content={'High Scores'}
            selectable
          />
        </div>
        <SeparationLine />
        <p style={{ color: 'var(--clr-davy-grey)' }}>Find</p>
        <StyledCharacterContainer />
      </div>
    </div>
  );
};

const StyledInfoPanel = styled(InfoPanel)`
  position: absolute;
  right: 0;
  max-width: 350px;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: var(--clr-milk-white);
  padding: 20px;
  font-family: var(--fnt-regular);
  box-sizing: border-box;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;

  ${({ gameMenu }) => {
    if (gameMenu.isActive === true) {
      return `
      opacity: 1;
      pointer-events: initial;
    `;
    }
  }}
`;

export default StyledInfoPanel;
