import styled from 'styled-components';
import SignupForm from '../components/Auth/SignupForm';
import { authPagesStyles } from '../styles/globalStyles';

const Root = styled.div`
  ${authPagesStyles}
`;

const signup = () => (
  <Root>
    <SignupForm />
  </Root>
);

export default signup;
