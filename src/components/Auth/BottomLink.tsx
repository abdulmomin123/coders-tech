import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const Root = styled.a`
  line-height: 1.4;
  color: #0052cc;

  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  href: string;
}

const BottomLink: FC<Props> = ({ href, children }) => (
  <Link href={href} passHref>
    <Root>{children}</Root>
  </Link>
);

export default BottomLink;
