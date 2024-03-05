import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { index } from '../lib/algolia/algolia';
import { scrollBarStyles } from '../styles/globalStyles';
import { SearchResultType } from '../Types';
import Overlay from './Overlay';
import SearchResult from './SearchResult';

const fullWidth = css`
  width: 100%;
`;

const Root = styled.form`
  position: relative;
  width: 43rem;

  &:focus-within {
    & > :last-child {
      visibility: initial;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 61.25em) {
    width: 33rem;
  }

  @media only screen and (max-width: 50em) {
    width: 25rem;
  }

  @media only screen and (max-width: 45.3125em) {
    width: 21rem;
  }

  @media only screen and (max-width: 37.5em) {
    grid-row: 2 / 3;
    grid-column: 1 / 4;
    ${fullWidth}
  }

  @media only screen and (max-width: 26.25em) {
    grid-row: 3 / 4;
  }
`;

const SearchInput = styled.input`
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  ${fullWidth}
  color: #333;
  background: rgba(0, 0, 0, 0.07);
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  border: 4px solid rgba(0, 0, 0, 0);
  transition: border 0.3s, background 0.3s;

  &:focus {
    background: initial;
    border: 4px solid #c0e0f3;
  }
`;

const posAbs = css`
  position: absolute;
`;

const ResultsContainer = styled.div`
  ${posAbs}
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  min-width: 30rem;
  max-height: 36rem;
  display: grid;
  gap: 1rem;
  padding: 5px;
  background: #fff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  overflow-x: hidden;
  overflow-y: scroll;
  ${scrollBarStyles}
`;

const EmptyResultsText = styled.p`
  font-size: 1.7rem;
  text-align: center;
  padding: 2rem 0;
  color: #222;
`;

const SearchIcon = styled.svg`
  ${posAbs}
  top: 50%;
  right: 0;
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
  fill: var(--accent-color);
  transform: translateY(-50%);
`;

const Search = () => {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<SearchResultType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (!query) return setHits([]);

      try {
        setIsLoading(true);

        const hits = (await index.search(query)).hits as SearchResultType[];

        setHits(hits);

        setIsLoading(false);
      } catch (_) {
        setIsLoading(false);
      }
    })();
  }, [query]);

  return (
    <Root autoComplete="off">
      {/* Hidden input */}
      <input type="text" autoComplete="false" style={{ display: 'none' }} />

      {/* Input field */}
      <SearchInput
        type="text"
        maxLength={30}
        placeholder="Search products"
        name="search"
        onChange={({ target: { value } }) => setQuery(value)}
      />

      {/* Magnifying icon */}
      <SearchIcon>
        <use href="/magnifying-glass.svg#main" />
      </SearchIcon>

      {/* Results container  */}
      <ResultsContainer>
        {hits.length ? (
          hits.map(hit => <SearchResult result={hit} key={hit.objectID} />)
        ) : query && !hits.length ? (
          <EmptyResultsText>No results found</EmptyResultsText>
        ) : (
          <EmptyResultsText>Search for a product</EmptyResultsText>
        )}

        {/* Overlay */}
        <Overlay isLoading={isLoading} />
      </ResultsContainer>
    </Root>
  );
};

export default Search;
