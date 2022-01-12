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
  min-height: 75vh;
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
  width: 100%;
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

const Error = styled.p`
  font-weight: 300;
  text-align: left;
  margin-top: 0.8rem;
  color: red;
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

const Contact = () => {
  const setNotification = useContext(NotificationContextSetter);
  const [isEmailSending, setIsEmailSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const requiredErrorMsg = 'This field is required';

  return (
    <Root>
      <Head>
        <title>Shopnik | Contact Us</title>
      </Head>

      {/* Page title */}
      <HeadingPrimary>Contact</HeadingPrimary>

      {/* Contact form */}
      <Form
        ref={form}
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
        <div>
          <Input
            id="firstName"
            type="text"
            placeholder="First Name"
            maxLength={13}
            {...register('firstName', {
              required: {
                value: true,
                message: requiredErrorMsg,
              },
              minLength: {
                value: 2,
                message: 'Should be at least 2 characters long',
              },
              maxLength: {
                value: 13,
                message: 'Should be less than 13 characters',
              },
            })}
            error={errors.firstName}
          />

          {errors.firstName && <Error>{errors.firstName.message}</Error>}
        </div>

        {/* Last name */}
        <div>
          <Input
            id="lastName"
            type="text"
            placeholder="Last Name"
            maxLength={13}
            {...register('lastName', {
              required: {
                value: true,
                message: requiredErrorMsg,
              },
              minLength: {
                value: 2,
                message: 'Should be at least 2 characters long',
              },
              maxLength: {
                value: 13,
                message: 'Should be less than 13 characters',
              },
            })}
            error={errors.lastName}
          />

          {errors.lastName && <Error>{errors.lastName.message}</Error>}
        </div>

        {/* Email */}
        <div>
          <Input
            id="email"
            type="text"
            placeholder="Email"
            {...register('email', {
              required: {
                value: true,
                message: requiredErrorMsg,
              },
              validate: validateEmail,
            })}
            error={errors.email}
          />

          {errors.email && <Error>{errors.email.message}</Error>}
        </div>

        {/* Subject */}
        <div>
          <Input
            id="subject"
            type="text"
            placeholder="Subject"
            maxLength={50}
            {...register('subject', {
              required: {
                value: true,
                message: requiredErrorMsg,
              },
              minLength: {
                value: 10,
                message: 'Should be at least 10 characters long',
              },
              maxLength: {
                value: 50,
                message: 'Should be less than 50 characters',
              },
            })}
            error={errors.subject}
          />

          {errors.subject && <Error>{errors.subject.message}</Error>}
        </div>

        {/* Message */}
        <div>
          <TextArea
            id="message"
            placeholder="Message"
            rows={7}
            maxLength={1500}
            {...register('message', {
              required: {
                value: true,
                message: requiredErrorMsg,
              },
              minLength: {
                value: 5,
                message: 'Should be at least 5 characters long',
              },
              maxLength: {
                value: 1500,
                message: 'Should be less than 1500 characters',
              },
            })}
            error={errors.message}
          />

          {errors.message && <Error>{errors.message.message}</Error>}
        </div>

        <SubmitBtn type="submit">
          {isEmailSending ? <LoadingAnimation /> : 'Send'}
        </SubmitBtn>
      </Form>
    </Root>
  );
};

export default Contact;
