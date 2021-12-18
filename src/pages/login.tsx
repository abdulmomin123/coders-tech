import { useRouter } from 'next/dist/client/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import LoginForm from '../components/Auth/LoginForm';
import { auth } from '../lib/firebase/firebase';
import { authPagesStyles } from '../styles/globalStyles';

const Root = styled.div`
  ${authPagesStyles}
`;

const login = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  user ? router.push('/') : null;

  return (
    <Root>
      <LoginForm />
    </Root>
  );
};

export default login;
