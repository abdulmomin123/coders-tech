import styled from 'styled-components';
import AuthForm from '../components/AuthForm';
import { gridCenter } from '../styles/utils';

const Root = styled.div`
  min-height: 70vh;
  ${gridCenter}
`;

const login = () => {
  return (
    <Root>
      <AuthForm />
    </Root>
  );
};

export default login;
