import styled from 'styled-components';
import device from '../assets/Data/DeviceSizes';

const StyledContainer = styled.div`
  margin: 100px auto 0 auto;
  position: relative;
  display: flex;
  max-width: 600px;

  @media ${device.mobileL} {
    margin: 50px auto 0 auto;
  }
`;

export default StyledContainer;
