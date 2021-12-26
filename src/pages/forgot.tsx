import { useRouter } from 'next/dist/client/router';
import { useContext } from 'react';
import styled from 'styled-components';
import ForgotPasswordForm from '../components/Auth/ForgotPasswordForm';
import { UserContext } from '../contexts/User';
import { authPagesStyles } from '../styles/globalStyles';

const Root = styled.div`
  ${authPagesStyles}
`;

const forgot = () => {
  const user = useContext(UserContext);
  const router = useRouter();

  user ? router.push('/') : null;

  return (
    <Root>
      <ForgotPasswordForm />
    </Root>
  );
};

export default forgot;
