import styled from 'styled-components';

const Root = styled.div`
  height: 98vh;
  display: grid;
  place-items: center;
`;

const HomePage = () => {
  return (
    <Root>
      <h1>Home</h1>
    </Root>
  );
};

export default HomePage;
