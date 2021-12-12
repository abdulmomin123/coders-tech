import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const Root = styled.a`
  font-size: 1.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-bottom: 1rem;
  color: #222;
  border-bottom: 2px solid currentColor;
`;

interface Props {
  href: string;
}

const ViewNowBtn: FC<Props> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <Root>{children ? children : 'View Now'}</Root>
    </Link>
  );
};

export default ViewNowBtn;
