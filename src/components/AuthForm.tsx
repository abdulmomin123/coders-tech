import { useRouter } from 'next/dist/client/router';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { flexCenter } from '../styles/utils';
import { validateEmail } from '../helpers';

const fontSize = css`
  font-size: 1.6rem;
`;

const borderRadius = css`
  border-radius: 4px;
`;

const Root = styled.form`
  ${fontSize}
  text-align: center;
  width: 400px;
  ${borderRadius}
  padding: 2.5rem 4rem;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
`;

const TextPrimary = styled.h1`
  font-size: 2rem;
  padding: 1rem 0 3rem 0;
  color: #5e6c84;
`;

const InputGrid = styled.div`
  display: grid;
  gap: 1.8rem;
`;

const InputGroup = styled.div`
  text-align: left;
`;

const fullWidth = css`
  width: 100%;
`;

const darkColor = css`
  color: #4d4d4d;
`;

const transition = css`
  transition: background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;
`;

const Input = styled.input<{ error: boolean }>`
  ${fontSize}
  ${fullWidth}
  padding: 1.1rem 1rem;
  ${darkColor}
  background: #fafbfc;
  border: 3px solid ${({ error }) => (error ? '#e03737' : '#dfe1e6')};
  border-radius: 3px;
  ${transition}

  &::placeholder {
    color: #757575;
  }

  &:focus {
    background: #fff;
    border: 3px solid ${({ error }) => (error ? '#e03737' : '#4c9aff')};
  }
`;

const Error = styled.p`
  font-size: 1.55rem;
  margin: 5px 0;
  color: #e03737;
`;

const fontWeight = css`
  font-weight: 500;
`;

const LoginButton = styled.button`
  ${fontWeight}
  background: #5aac44;
  padding: 0.8rem 1.5rem;
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
  ${darkColor}
`;

const GoogleLoginBtn = styled.button`
  ${fontSize}
  ${fontWeight}
  ${fullWidth}
  ${flexCenter}
  padding: 1rem;
  color: #505f79;
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
  border: 2px solid transparent;
  ${borderRadius}
  ${transition}

  &:hover {
    background: #f9fafc;
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
  ${darkColor}
  border-top: 1px solid #ccc;
`;

const BottomLink = styled.a`
  color: #0052cc;

  &:hover {
    text-decoration: underline;
  }
`;

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const route = useRouter().route.replace('/', '');

  const action = route === 'login' ? 'Log in' : 'Sign up';

  return (
    <Root
      onSubmit={handleSubmit(({ email, password }) => {
        console.log(email, password);
      })}
    >
      {/* Login/Signup to shopnik */}
      <TextPrimary>
        {route === 'login'
          ? `${action} to Shopnik`
          : 'Sign up for your account'}
      </TextPrimary>

      <InputGrid>
        {/* Email */}
        <InputGroup>
          {/* Input */}
          <Input
            error={errors.email}
            type="text"
            placeholder="Enter email"
            {...register('email', { required: true, validate: validateEmail })}
          />

          {/* Error */}
          {errors.email && <Error>Please enter a valid email</Error>}
        </InputGroup>

        {/* Password */}
        <InputGroup>
          {/* Input */}
          <Input
            error={errors.password}
            type="password"
            placeholder="Enter password"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />

          {/* Error */}
          {errors.password && <Error>Must be at least 6 characters long</Error>}
        </InputGroup>

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
