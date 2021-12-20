import { useRouter } from 'next/dist/client/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import SignupForm from '../components/Auth/SignupForm';
import { auth } from '../lib/firebase/firebase';
import { authPagesStyles } from '../styles/globalStyles';

const Root = styled.div`
  ${authPagesStyles}
`;

const signup = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  user ? router.push('/') : null;

  return (
    <Root>
      <SignupForm />
    </Root>
  );
};

export default signup;
