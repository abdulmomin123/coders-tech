import { createUserWithEmailAndPassword } from 'firebase/auth';
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

const SignupForm = () => {
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
      <FormTitle>Sign up for your account</FormTitle>

      <form
        onSubmit={handleSubmit(async ({ email, password }) => {
          try {
            setIsLoading(true);

            // Authenticate user
            await createUserWithEmailAndPassword(auth, email, password);

            // Create user profile

            setIsLoading(false);

            // Clear the form
            reset();

            // Display success notification
          } catch (_) {
            // Display error notification
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

      <GoogleButton handleClick={() => {}} />

      <Links>
        <BottomLink href="/login">Already have an account? Log In</BottomLink>
      </Links>
    </Root>
  );
};

export default SignupForm;
