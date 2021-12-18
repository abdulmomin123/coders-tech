import { useRouter } from 'next/dist/client/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import ForgotPasswordForm from '../components/Auth/ForgotPasswordForm';
import { auth } from '../lib/firebase/firebase';
import { authPagesStyles } from '../styles/globalStyles';

const Root = styled.div`
  ${authPagesStyles}
`;

const forgot = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  user ? router.push('/') : null;

  return (
    <Root>
      <ForgotPasswordForm />
    </Root>
  );
};

export default forgot;
