import { useRouter } from 'next/dist/client/router';
import { useContext } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/Auth/LoginForm';
import { UserContext } from '../contexts/User';
import { authPagesStyles } from '../styles/globalStyles';

const Root = styled.div`
  ${authPagesStyles}
`;

const login = () => {
  const user = useContext(UserContext);
  const router = useRouter();

  user ? router.push('/') : null;

  return (
    <Root>
      <LoginForm />
    </Root>
  );
};

export default login;
