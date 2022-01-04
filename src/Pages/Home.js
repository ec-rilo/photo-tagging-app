import StyledHeader from '../components/Header';
import StyledSelectionContainer from '../components/SelectionContainer';
import StyledWelcomeContainer from '../components/WelcomeContainer';

const Home = () => {
  return (
    <div style={{ margin: '0 20px' }}>
      <StyledHeader />
      <StyledSelectionContainer />
      <StyledWelcomeContainer />
    </div>
  );
};

export default Home;
