import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { validateEmail } from '../../helpers';
import { auth } from '../../lib/firebase/firebase';
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
          } catch (_) {
            // Display error notification
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

      <GoogleButton handleClick={() => {}} />

      <Links>
        <BottomLink href="/forgot">Forgot password?</BottomLink>
        &nbsp;•&nbsp;
        <BottomLink href="/signup">Sign up for an account</BottomLink>
      </Links>
    </Root>
  );
};

export default LoginForm;
