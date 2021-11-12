import styled from 'styled-components';
import HeadingPrimary from '../components/HeadingPrimary';

const Root = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  height: 80vh;
  text-align: center;
`;

const Form = styled.form`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #555;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  & > :nth-child(3),
  & > :nth-child(4) {
    grid-column: 1 / -1;
  }

  & > :last-child {
    resize: vertical;
  }

  input,
  textarea {
    padding: 1.3rem 1rem;
    border: 4px solid var(--color-border);
    border-radius: 5px;
    transition: border 0.2s;

    &:focus {
      border: 4px solid var(--accent-color);
    }
  }
`;

const contact = () => {
  return (
    <Root>
      {/* Page title */}
      <HeadingPrimary>Contact</HeadingPrimary>

      {/* Contact form */}
      <Form>
        {/* First name */}
        <input type="text" id="firstName" placeholder="First Name" />

        {/* Last name */}
        <input type="text" id="lastName" placeholder="Last Name" />

        {/* Subject */}
        <input type="text" id="subject" placeholder="Subject" />

        {/* Message */}
        <textarea placeholder="Message" id="message" rows={7} />
      </Form>
    </Root>
  );
};

export default contact;
