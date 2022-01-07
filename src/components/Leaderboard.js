import { useState } from 'react';
import styled, { css } from 'styled-components';

const LeaderboardCell = styled.p`
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 1rem;
  font-family: var(--fnt-regular);
  border-bottom: 1px solid var(--clr-cloud);
`;

const LeaderboardCategoryTitle = styled(LeaderboardCell)`
  font-family: var(--fnt-bold);
`;

const LeaderboardRank = styled(LeaderboardCategoryTitle)`
  grid-area: rank;
`;

const LeaderboardName = styled(LeaderboardCategoryTitle)`
  grid-area: name;
`;

const LeaderboardTime = styled(LeaderboardCategoryTitle)`
  grid-area: time;
`;

const LeaderboardContent = ({ className }) => {
  const [rankItems, setRankItems] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ]);

  const [nameItems, setNameItems] = useState([
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
  ]);

  const [timeItems, setTimeItems] = useState([
    'Time',
    'Time',
    'Time',
    'Time',
    'Time',
    'Time',
    'Time',
    'Time',
    'Time',
    'Time',
  ]);

  return (
    <div className={className}>
      <LeaderboardRank>Rank</LeaderboardRank>
      <LeaderboardName>Name</LeaderboardName>
      <LeaderboardTime>Time</LeaderboardTime>
      {rankItems.map((rank, index) => {
        return (
          <LeaderboardCell key={index} style={{ gridArea: `rank-${index}` }}>
            {rank}
          </LeaderboardCell>
        );
      })}
      {nameItems.map((name, index) => {
        return (
          <LeaderboardCell key={index} style={{ gridArea: `name-${index}` }}>
            {name}
          </LeaderboardCell>
        );
      })}
      {timeItems.map((time, index) => {
        return (
          <LeaderboardCell key={index} style={{ gridArea: `time-${index}` }}>
            {time}
          </LeaderboardCell>
        );
      })}
    </div>
  );
};

const StyledLeaderboardContent = styled(LeaderboardContent)`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: repeat(11, 50px);
  grid-template-areas:
    'rank name time'
    'rank-0 name-0 time-0'
    'rank-1 name-1 time-1'
    'rank-2 name-2 time-2'
    'rank-3 name-3 time-3'
    'rank-4 name-4 time-4'
    'rank-5 name-5 time-5'
    'rank-6 name-6 time-6'
    'rank-7 name-7 time-7'
    'rank-8 name-8 time-8'
    'rank-9 name-9 time-9';

  margin: 10px 10px;
  overflow-x: auto;
  border: 1px solid var(--clr-cloud);
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LeaderboardContentContainer = ({ className }) => {
  return (
    <div className={className}>
      <StyledLeaderboardContent />
    </div>
  );
};

const StyledLeaderboardContentContainer = styled(LeaderboardContentContainer)`
  flex-grow: 1;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = ({ className }) => {
  return (
    <div className={className}>
      <h2>High Scores</h2>
    </div>
  );
};

const StyledTitle = styled(Title)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;
  border-bottom: 1px solid var(--clr-cloud);
  padding-left: 20px;
  font-family: var(--fnt-bold);
  font-size: 1.2rem;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-family: var(--fnt-bold);
  color: var(--clr-blueberry);
  font-size: 1rem;
  height: 35px;
  width: 70px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-cloud-light);
  }
`;

const CloseBtnContainer = ({ className, homepage }) => {
  return (
    <div className={className}>
      {homepage ? '' : <CloseBtn>Close</CloseBtn>}
    </div>
  );
};

const StyledCloseBtnContainer = styled(CloseBtnContainer)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  border-top: 1px solid var(--clr-cloud);
`;

const Leaderboard = ({ className, homepage }) => {
  return (
    <article className={className}>
      <StyledTitle />
      <StyledLeaderboardContentContainer />
      <StyledCloseBtnContainer homepage />
    </article>
  );
};

const StyledLeaderboard = styled(Leaderboard)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  height: 500px;
  background-color: var(--clr-milk-white);
  border-radius: 10px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;

  ${(props) =>
    props.homepage &&
    css`
      position: absolute;
      width: 100%;
    `}

  ${({ closeBtn }) => {
    if (closeBtn.isActive) {
      return `
      opacity: 1;
      pointer-events: auto;  
    `;
    }
  }}
`;

export default StyledLeaderboard;
