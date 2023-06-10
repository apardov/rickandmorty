import styled from "styled-components";

import {ReactComponent as MagnifyingGlass} from "../../assets/lupa.svg";

export const SearchContainer = styled.div`
  margin-top: 30px;
  height: 30px;
  width: 70%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
  
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 20px 70px;
  border: solid #888476 2px;
  border-radius: 7px 0px 0px 7px;
  box-sizing: border-box;
  
  
  
  
`;

export const SearchIcon = styled(MagnifyingGlass)`
  width: 20px;
  height: 30px;
  fill: #EFF53F;

  &:hover {
    scale: 1.1;
  }
`;

export const SearchIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #F0BE24;
  padding: 20px;
  border: solid #EFF53F 1px;
  border-radius: 0px 7px 7px 0px;

  &:hover {
    box-shadow: inset 0 0 10px #EFF53F;
  }
`;
