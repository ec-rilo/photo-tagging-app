import styled from 'styled-components';
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

  @media ${device.mobileS} {
    width: 260px;
    height: 60px;
    font-size: 2.5rem;
  }
`;

export default StyledLogo;
