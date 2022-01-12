import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import styled from 'styled-components';
import SignupForm from '../components/Auth/SignupForm';
import { UserContext } from '../contexts/User';
import { authPagesStyles } from '../styles/globalStyles';

const Root = styled.div`
  ${authPagesStyles}
`;

const Signup = () => {
  const user = useContext(UserContext);
  const router = useRouter();

  user ? router.push('/') : null;

  return (
    <Root>
      <Head>
        <title>Sign up</title>
      </Head>

      <SignupForm />
    </Root>
  );
};

export default Signup;
