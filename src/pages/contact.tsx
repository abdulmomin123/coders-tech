import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import HeadingPrimary from '../components/HeadingPrimary';
import { validateEmail } from '../helpers';

const Root = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  height: 80vh;
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
      ${({ error }) => (error ? '#e03737' : 'var(--color-border)')};
  }
`;

const TextArea = styled.textarea<{ error: boolean }>`
  ${inputStyles}
  border: 4px solid ${({ error }) =>
    error ? '#e03737' : 'var(--color-border)'};

  &:focus {
    border: 4px solid
      ${({ error }) => (error ? '#e03737' : 'var(--color-border)')};
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Root>
      {/* Page title */}
      <HeadingPrimary>Contact</HeadingPrimary>

      {/* Contact form */}
      <Form
        onSubmit={handleSubmit(data => {
          console.log(data);
        })}
      >
        {/* First name */}
        <Input
          type="text"
          placeholder="First Name"
          {...register('firstName', { required: true, minLength: 2 })}
          error={errors.firstName}
        />

        {/* Last name */}
        <Input
          type="text"
          placeholder="Last Name"
          {...register('lastName', { required: true, minLength: 2 })}
          error={errors.lastName}
        />

        {/* Email */}
        <Input
          type="text"
          placeholder="Email"
          {...register('email', { required: true, validate: validateEmail })}
          error={errors.email}
        />

        {/* Subject */}
        <Input
          type="text"
          placeholder="Subject"
          {...register('subject', { required: true, minLength: 4 })}
          error={errors.subject}
        />

        {/* Message */}
        <TextArea
          placeholder="Message"
          rows={7}
          {...register('message', { required: true, minLength: 5 })}
          error={errors.message}
        />

        <SubmitBtn type="submit">Send</SubmitBtn>
      </Form>
    </Root>
  );
};

export default contact;
