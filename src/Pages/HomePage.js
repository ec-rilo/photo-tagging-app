import StyledHeader from '../components/Header';
import StyledSelectionContainer from '../components/SelectionContainer';
import StyledContainer from '../components/Container';
import StyledLeaderboard from '../components/Leaderboard';
import StyledWelcomeContainer from '../components/WelcomeContainer';

const HomePage = ({ toggleSelection, playBtn, closeBtn }) => {
  return (
    <div>
      <StyledHeader />
      <StyledSelectionContainer toggleSelection={toggleSelection} />
      <StyledContainer>
        <StyledLeaderboard homepage closeBtn={closeBtn} />
        <StyledWelcomeContainer homepage playBtn={playBtn} />
      </StyledContainer>
    </div>
  );
};

export default HomePage;
