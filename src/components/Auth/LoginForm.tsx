import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { validateEmail } from '../../helpers';
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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <Root>
      <FormTitle>Log in to Shopnik</FormTitle>

      <form
        onSubmit={handleSubmit(({ email, password }) => {
          console.log(email, password);
        })}
      >
        <InputGrid>
          {/* Email */}
          <Input
            error={errors.email}
            {...register('email', { required: true, validate: validateEmail })}
            {...{
              type: 'text',
              placeholder: 'Enter email',
            }}
          />

          {/* Password */}
          <Input
            error={errors.password}
            {...register('password', {
              required: true,
              minLength: 6,
            })}
            {...{
              type: 'password',
              placeholder: 'Enter password',
            }}
          />

          {/* Login button */}
          <SubmitButton>Log in</SubmitButton>
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
