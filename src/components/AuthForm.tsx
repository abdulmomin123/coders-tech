import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styled from 'styled-components';
import { flexCenter } from '../styles/utils';

const Root = styled.form`
  font-size: 1.6rem;
  text-align: center;
  width: 40rem;
  border-radius: 4px;
  padding: 2.5rem 4rem;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
`;

const TextPrimary = styled.h1`
  font-size: 1.9rem;
  padding: 1rem 0 3rem 0;
  color: #5e6c84;
`;

const InputGrid = styled.div`
  display: grid;
  gap: 1.7rem;
`;

const Input = styled.input`
  font-size: 1.6rem;
  padding: 1.1rem 1rem;
  color: #4d4d4d;
  background: #fafbfc;
  border: 2px solid #dfe1e6;
  border-radius: 3px;
  transition: background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;

  &::placeholder {
    color: #757575;
  }

  &:focus {
    background-color: #fff;
    border: 2px solid #4c9aff;
    box-shadow: 0 0 0;
  }
`;

const LoginButton = styled.button`
  font-weight: 500;
  background: #5aac44;
  padding: 0.6em 1.3em;
  color: #fff;
  border-radius: 5px;
  transition: background 0.2s;

  &:hover {
    background: #61bd4f;
  }
`;

const TextSecondary = styled.p`
  font-size: 1.4rem;
  padding: 2.2rem 0;
  color: #4d4d4d;
`;

const GoogleLoginBtn = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  ${flexCenter}
  padding: 1rem;
  color: #505f79;
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;

  &:hover {
    background-color: #f9fafc;
  }

  &:active {
    background: #eee;
    border: 2px solid #cdd2d4;
  }
`;

const Icon = styled.svg`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const Links = styled.ul`
  display: flex;
  justify-content: center;
  padding: 2.5rem 0 1.5rem 0;
  margin-top: 3rem;
  color: #4d4d4d;
  border-top: 1px solid #ccc;
`;

const BottomLink = styled.a`
  color: #0052cc;

  &:hover {
    text-decoration: underline;
  }
`;

const AuthForm = () => {
  const route = useRouter().route.replace('/', '');

  const action = route === 'login' ? 'Log in' : 'Sign up';

  return (
    <Root>
      {/* Login/Signup to shopnik */}
      <TextPrimary>
        {route === 'login'
          ? `${action} to Shopnik`
          : 'Sign up for your account'}
      </TextPrimary>

      <InputGrid>
        {/* Email */}
        <Input type="text" placeholder="Enter email" />

        {/* Password */}
        <Input type="password" placeholder="Enter password" />

        {/* Login/Signup button */}
        <LoginButton type="submit">{action}</LoginButton>
      </InputGrid>

      <TextSecondary>OR</TextSecondary>

      <GoogleLoginBtn>
        {/* Icon */}
        <Icon>
          <use href="/google.svg#icon" />
        </Icon>
        {/* Text */}
        Continue with Google
      </GoogleLoginBtn>

      <Links>
        {route === 'login' ? (
          // Forgot password
          <>
            <li>
              <Link href="/forgot" passHref>
                <BottomLink>Forgot password?</BottomLink>
              </Link>
            </li>
            &nbsp;•&nbsp;
            {/* Signup/Login */}
            <li>
              <Link href="/signup" passHref>
                <BottomLink>Sign up for an account</BottomLink>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login" passHref>
              <BottomLink>Already have an account? Log In</BottomLink>
            </Link>
          </li>
        )}
      </Links>
    </Root>
  );
};

export default AuthForm;
