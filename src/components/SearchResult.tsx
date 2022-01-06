import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { SearchResultType } from '../Types';

const Root = styled.a``;

interface Props {
  result: SearchResultType;
}

const SearchResult: FC<Props> = ({
  result: { objectID, category, name, price, oldPrice, image },
}) => {
  return (
    <Root>
      <p>{name}</p>
    </Root>
  );
};

export default SearchResult;
