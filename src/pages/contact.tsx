import Head from 'next/head';
import { FormEvent, useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import HeadingPrimary from '../components/HeadingPrimary';
import LoadingAnimation from '../components/LoadingAnimation';
import { NotificationContextSetter } from '../contexts/Notification';
import { validateEmail } from '../helpers';
import { sendEmail } from '../lib/emailjs/emailjs';

const Root = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  height: 75vh;
  padding: 3rem;
  text-align: center;
`;

const Form = styled.form`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #6d6d6d;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  & > :nth-child(3),
  & > :nth-child(4),
  & > :nth-child(5) {
    grid-column: 1 / -1;
  }

  & > :last-child {
    resize: vertical;
  }
`;

const inputStyles = css`
  padding: 1.3rem 1.5rem;
  border: 4px solid var(--color-border);
  border-radius: 5px;
  transition: border 0.2s;
`;

const Input = styled.input<{ error: boolean }>`
  ${inputStyles}
  border: 4px solid ${({ error }) =>
    error ? '#e03737' : 'var(--color-border)'};

  &:focus {
    border: 4px solid
      ${({ error }) => (error ? '#e03737' : 'var(--accent-color)')};
  }
`;

const TextArea = styled.textarea<{ error: boolean }>`
  ${inputStyles}
  border: 4px solid ${({ error }) =>
    error ? '#e03737' : 'var(--color-border)'};

  &:focus {
    border: 4px solid
      ${({ error }) => (error ? '#e03737' : 'var(--accent-color)')};
  }
`;

const SubmitBtn = styled.button`
  font-size: 2rem;
  grid-column: 2 / -1;
  padding: 1rem;
  color: #fff;
  background: var(--accent-color);
  border-radius: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #28aa7f;
  }
`;

const contact = () => {
  const setNotification = useContext(NotificationContextSetter);
  const [isEmailSending, setIsEmailSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <Root>
      <Head>
        <title>Shopnik | Contact Us</title>
      </Head>

      {/* Page title */}
      <HeadingPrimary>Contact</HeadingPrimary>

      {/* Contact form */}
      <Form
        onSubmit={handleSubmit(async (_, e) => {
          try {
            setIsEmailSending(true);

            await sendEmail(e as FormEvent<HTMLFormElement>, form.current!);

            reset();
            setIsEmailSending(false);
            setNotification({
              type: 'success',
              text: 'We will contact you soon.',
            });
          } catch (err) {
            setIsEmailSending(false);
            setNotification({
              type: 'error',
              text: 'Something went wrong. Try again.',
            });
          }
        })}
      >
        {/* First name */}
        <Input
          id="firstName"
          type="text"
          placeholder="First Name"
          {...register('firstName', { required: true, minLength: 2 })}
          error={errors.firstName}
        />

        {/* Last name */}
        <Input
          id="lastName"
          type="text"
          placeholder="Last Name"
          {...register('lastName', { required: true, minLength: 2 })}
          error={errors.lastName}
        />

        {/* Email */}
        <Input
          id="email"
          type="text"
          placeholder="Email"
          {...register('email', { required: true, validate: validateEmail })}
          error={errors.email}
        />

        {/* Subject */}
        <Input
          id="subject"
          type="text"
          placeholder="Subject"
          {...register('subject', { required: true, minLength: 4 })}
          error={errors.subject}
        />

        {/* Message */}
        <TextArea
          id="message"
          placeholder="Message"
          rows={7}
          {...register('message', { required: true, minLength: 5 })}
          error={errors.message}
        />

        <SubmitBtn type="submit">
          {isEmailSending ? <LoadingAnimation /> : 'Send'}
        </SubmitBtn>
      </Form>
    </Root>
  );
};

export default contact;
