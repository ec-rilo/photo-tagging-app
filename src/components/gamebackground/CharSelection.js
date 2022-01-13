import styled from 'styled-components';

const transitionTime = '250ms ease-in-out';
const ListItem = styled.li`
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

const CharSelection = ({ className, name1, name2, name3, name4, name5 }) => {
  return (
    <ul className={className}>
      <ListItem>{name1}</ListItem>
      <ListItem>{name2}</ListItem>
      <ListItem>{name3}</ListItem>
      <ListItem>{name4}</ListItem>
      <ListItem>{name5}</ListItem>
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
  left: 110px;
`;

export default StyledCharSelection;
