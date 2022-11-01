import styled from "styled-components";
import React from "react";
import Search from "../images/Search";
const InputBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  justify-content: left;
  margin-left: 3%;
  margin-top: 100px;
  @media screen and (min-width: 560px) {
    margin-left: 5%;
  }
  @media screen and (min-width: 800px) {
    margin-left: 8%;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 12%;
    margin-top: 40px;
  }
`;
const InputField = styled.input`
  background-color: #10141e;
  width: 214px;
  border: 0;
  color: aliceblue;
  font-size: 16px;
  font-weight: 300;
  &:focus {
    border: 0;
    outline: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 321px;
  }
`;
export default function Input({ setSearchTerm }) {
  return (
    <InputBox>
      <Search />
      <InputField
        type="text"
        placeholder="Search for Movies or TV Series"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </InputBox>
  );
}
