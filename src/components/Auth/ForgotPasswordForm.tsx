import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { validateEmail } from '../../helpers';
import { authFormsStyles } from '../../styles/globalStyles';
import BottomLink from './BottomLink';
import FormTitle from './FormTitle';
import Input from './Input';
import InputGrid from './InputGrid';
import Links from './Links';
import SubmitButton from './SubmitButton';

const Root = styled.form`
  ${authFormsStyles}
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  text-align: left;
  margin-bottom: 1.3rem;
  color: #5e6c84;
`;

const ForgotPasswordForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <Root
      onSubmit={handleSubmit(({ email, password }) => {
        console.log(email, password);
      })}
    >
      <FormTitle>Can't log in?</FormTitle>

      <Text>We'll send a recovery link to:</Text>

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

        {/* Submit button */}
        <SubmitButton>Send recovery link</SubmitButton>
      </InputGrid>

      <Links>
        <BottomLink href="/login">Return to log in</BottomLink>
      </Links>
    </Root>
  );
};

export default ForgotPasswordForm;
