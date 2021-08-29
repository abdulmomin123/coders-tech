import styled from 'styled-components';
import Navbar from './Navbar';

const Root = styled.div`
  background: #f6f6f6;
`;

const HomePage = () => {
  return (
    <Root>
      {/* Navbar */}
      <Navbar />
    </Root>
  );
};

export default HomePage;
