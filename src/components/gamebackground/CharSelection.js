import styled from 'styled-components';

const transitionTime = '250ms ease-in-out';

const ListItem = ({ className, name, checkFound }) => {
  return (
    <li className={className} onClick={() => checkFound(name)}>
      {name}
    </li>
  );
};

const StyledListItem = styled(ListItem)`
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: var(--clr-milk-white);
  transition: background-color ${transitionTime}, height ${transitionTime},
    color ${transitionTime};

  &:hover {
    height: 40px;
    color: var(--clr-milk-white);
    background-color: var(--clr-blueberry);
  }
`;

const CharSelection = ({ className, characters, checkFound }) => {
  return (
    <ul className={className}>
      {characters.map((character, index) => {
        return (
          <StyledListItem
            key={index}
            name={character.name}
            checkFound={checkFound}
          />
        );
      })}
    </ul>
  );
};

const StyledCharSelection = styled(CharSelection)`
  position: relative;
  color: var(--clr-gunmetal);
  font-family: var(--fnt-regular);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 120px;

  ${(props) => {
    if (props.selectionLocation === 'right') {
      return 'left: 110%;';
    } else if (props.selectionLocation === 'left') {
      return 'left: -130%';
    } else if (props.selectionLocation === 'bottom left') {
      return `
        left: -130%;
        top: 50%;
      `;
    } else if (props.selectionLocation === 'bottom right') {
      return `
        left: 110%;
        top: 50%;
      `;
    } else if (props.selectionLocation === 'top right') {
      return `
        left: 110%;
        top: -100%;
      `;
    } else if (props.selectionLocation === 'top left') {
      return `
        top: -100%;
        left: -130%;
      `;
    }
  }}
`;

export default StyledCharSelection;
