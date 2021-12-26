import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { NotificationContextSetter } from '../../contexts/Notification';
import { RecheckUserProfile } from '../../contexts/User';
import { isMobile, validateEmail } from '../../helpers';
import { auth, createUserProfile, provider } from '../../lib/firebase/firebase';
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

const SignupForm = () => {
  const setNotification = useContext(NotificationContextSetter);
  const { value, reCheckUserProfile } = useContext(RecheckUserProfile);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <Root>
      <FormTitle>Sign up for your account</FormTitle>

      <form
        onSubmit={handleSubmit(async ({ name, email, password }) => {
          try {
            setIsLoading(true);

            // Authenticate user
            const {
              user: { email: userEmail, uid },
            } = await createUserWithEmailAndPassword(auth, email, password);

            // Create user profile
            await createUserProfile(name, userEmail!, uid!);

            reCheckUserProfile(true);
          } catch (error) {
            const message = (error as any).message as string;

            // Display error notification
            setNotification({
              type: 'error',
              text: message.includes('email-already-in-use')
                ? 'Email already in use'
                : 'Something went wrong. Try again',
            });

            setIsLoading(false);
          }
        })}
      >
        <InputGrid>
          {/* Name */}
          <Input
            error={errors.name}
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required',
              },
              minLength: {
                value: 4,
                message: 'Must be at least 4 characters long',
              },
              maxLength: {
                value: 30,
                message: 'Must be less than 30 characters long',
              },
            })}
            {...{
              type: 'text',
              placeholder: 'Enter name',
            }}
          />

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
          <SubmitButton isDisabled={isLoading}>Sign up</SubmitButton>
        </InputGrid>
      </form>

      <TextPrimary>OR</TextPrimary>

      <GoogleButton
        isDisabled={isGoogleLogin}
        handleClick={async () => {
          try {
            setIsGoogleLogin(true);

            const signup = isMobile() ? signInWithRedirect : signInWithPopup;

            const {
              user: { displayName, email, uid },
            } = await signup(auth, provider);

            // Create user profile
            await createUserProfile(displayName!, email!, uid!);

            reCheckUserProfile(!value);
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
        <BottomLink href="/login">Already have an account? Log In</BottomLink>
      </Links>
    </Root>
  );
};

export default SignupForm;
