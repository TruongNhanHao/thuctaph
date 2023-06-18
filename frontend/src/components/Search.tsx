import React, { useEffect, useRef } from 'react';
import { Block, Flex } from 'responsive';
import styled from 'styled-components';
import SearchOffIcon from '@mui/icons-material/SearchOff';

export const Search = ({ setSearchTerm }: any) => {
  const [state, setState] = React.useState<string>('');
  const innit = useRef(true);
  useEffect(() => {
    if (innit.current) {
      innit.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [setSearchTerm, state]);
  return (
    <>
      <SearchContainer>
        <Searchs
          placeholder="Ban tim gi..."
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
          // onMouseDown={() => test()}
        ></Searchs>
        <SearchOffIcon sx={{ fontSize: 30 }} />
      </SearchContainer>
    </>
  );
};
const SearchContainer = styled.div`
  ${Flex('center', '')}
  margin: 0 6px;
  border-radius: 6px;
  color: #626262;
  ${Block('224px', '32px', '#fff')};
`;
const Searchs = styled.input`
  margin-right: 5px;
  ${Block('189px', '100%', '')}
  border: none;
  border-radius: 6px;
  padding-left: 12px;
`;
