import styled, { css } from 'styled-components';
import device from '../assets/Data/DeviceSizes';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <p>Where's (?)</p>
    </div>
  );
};

const StyledLogo = styled(Logo)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-gunmetal);
  border: 1px solid var(--clr-milk-white);
  color: var(--clr-milk-white);
  font-family: var(--fnt-regular);
  width: 320px;
  height: 80px;
  font-size: 3rem;

  ${(props) =>
    props.gamepage &&
    css`
      width: 150px;
      height: 40px;
      font-size: 1.3rem;
    `}

  @media ${device.mobileL} {
    width: 290px;
    height: 70px;
    font-size: 2.8rem;

    ${(props) =>
      props.gamepage &&
      css`
        width: 100px;
        height: 35px;
        font-size: 1rem;
      `}
  }

  @media ${device.mobileS} {
    width: 260px;
    height: 60px;
    font-size: 2.5rem;

    ${(props) =>
      props.gamepage &&
      css`
        width: 100px;
        height: 35px;
        font-size: 1rem;
      `}
  }
`;

export default StyledLogo;
