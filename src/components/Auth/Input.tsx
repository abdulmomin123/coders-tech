import { FC, forwardRef } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  text-align: left;
`;

const InputField = styled.input<{ error: any }>`
  font-size: 1.6rem;
  width: 100%;
  padding: 1.1rem 1rem;
  color: #4d4d4d;
  background: #fafbfc;
  border: 3px solid ${({ error }) => (error ? '#e03737' : '#dfe1e6')};
  border-radius: 3px;
  transition: background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;

  &::placeholder {
    color: #757575;
  }

  &:focus {
    background: #fff;
    border: 3px solid ${({ error }) => (error ? '#e03737' : '#4c9aff')};
  }
`;

const Error = styled.p`
  font-size: 1.55rem;
  margin: 5px 0;
  color: #e03737;
`;

interface Props {
  error: {
    message: string;
  };
}

// eslint-disable-next-line react/display-name
const Input: FC<Props> = forwardRef<any, Props>(
  ({ error, ...inputProps }, ref) => {
    return (
      <Root>
        {/* Input */}
        <InputField ref={ref} error={error} {...inputProps} />

        {/* Error */}
        {error && <Error>{error.message}</Error>}
      </Root>
    );
  }
);

export default Input;
