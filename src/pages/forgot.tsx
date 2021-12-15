import styled from 'styled-components';
import ForgotPasswordForm from '../components/Auth/ForgotPasswordForm';
import { authPagesStyles } from '../styles/globalStyles';

const Root = styled.div`
  ${authPagesStyles}
`;

const forgot = () => (
  <Root>
    <ForgotPasswordForm />
  </Root>
);

export default forgot;
