import { Link } from 'react-router-dom';
import styled from 'styled-components';
import device from '../assets/Data/DeviceSizes';
import StyledLogo from './Logo';

const HeaderText = styled.p`
  font-size: 1.4rem;

  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
`;

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <StyledLogo />
      </Link>
      <HeaderText>A Where's Waldo Clone</HeaderText>
      {/* style for mobile view*/}
    </header>
  );
};

const StyledHeader = styled(Header)`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  color: var(--clr-milk-white);
  font-family: var(--fnt-regular);
`;

export default StyledHeader;
