import styled from 'styled-components';

const StyledAnchorTag = styled.a`
  color: var(--clr-medium-turquoise);
  text-decoration: none;
`;

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <p>Powered by grit and passion 💪🏻</p>
      <p>
        Copyright © 2021 Edgar Carrillo. Site source on{' '}
        <StyledAnchorTag
          href="https://github.com/ec-rilo/photo-tagging-app"
          target="_blank"
        >
          Github.
        </StyledAnchorTag>
      </p>
    </footer>
  );
};

const StyledFooter = styled(Footer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100px;
  color: var(--clr-milk-white);
  font-family: var(--fnt-regular);
  font-size: 0.9rem;
`;

export default StyledFooter;
