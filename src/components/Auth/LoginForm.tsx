import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { NotificationContextSetter } from '../../contexts/Notification';
import { isMobile, validateEmail } from '../../helpers';
import { auth, provider } from '../../lib/firebase/firebase';
import { authFormsStyles } from '../../styles/globalStyles';
import BottomLink from './BottomLink';
import FormTitle from './FormTitle';
import GoogleButton from './GoogleButton';
import Input from './Input';
import InputGrid from './InputGrid';
import Links from './Links';
import SubmitButton from './SubmitButton';
import TextPrimary from './TextPrimary';

const Root = styled.div`
  ${authFormsStyles}
`;

const LoginForm = () => {
  const setNotification = useContext(NotificationContextSetter);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <Root>
      <FormTitle>Log in to Shopnik</FormTitle>

      <form
        onSubmit={handleSubmit(async ({ email, password }) => {
          try {
            setIsLoading(true);

            // Sign the user in
            await signInWithEmailAndPassword(auth, email, password);

            setIsLoading(false);

            // Clear the form
            reset();
          } catch (error) {
            const message = (error as any).message as string;

            // Display error notification
            setNotification({
              type: 'error',
              text: message.includes('auth/network-request-failed')
                ? 'Something went wrong. Try again'
                : 'Wrong password or account does not exist',
            });

            setIsLoading(false);
          }
        })}
      >
        <InputGrid>
          {/* Email */}
          <Input
            error={errors.email}
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required',
              },
              validate: validateEmail,
            })}
            {...{
              type: 'text',
              placeholder: 'Enter email',
            }}
          />

          {/* Password */}
          <Input
            error={errors.password}
            {...register('password', {
              required: { value: true, message: 'Password is required' },
              minLength: {
                value: 6,
                message: 'Must be at least 6 characters long',
              },
            })}
            {...{
              type: 'password',
              placeholder: 'Enter password',
            }}
          />

          {/* Login button */}
          <SubmitButton isDisabled={isLoading}>Log in</SubmitButton>
        </InputGrid>
      </form>

      <TextPrimary>OR</TextPrimary>

      <GoogleButton
        handleClick={async () => {
          try {
            isMobile()
              ? await signInWithRedirect(auth, provider)
              : await signInWithPopup(auth, provider);
          } catch (_) {
            // Display error notification
            setNotification({
              type: 'error',
              text: 'Something went wrong. Try again',
            });
          }
        }}
      />

      <Links>
        <BottomLink href="/forgot">Forgot password?</BottomLink>
        &nbsp;•&nbsp;
        <BottomLink href="/signup">Sign up for an account</BottomLink>
      </Links>
    </Root>
  );
};

export default LoginForm;
