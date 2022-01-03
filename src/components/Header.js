import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StyledLogo from './Logo';

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <StyledLogo />
      </Link>
      <p>A Where's Waldo Clone</p>
      {/* style for mobile view*/}
    </header>
  );
};

// style the header

// style the header for mobile view

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
