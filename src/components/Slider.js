import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import Data from "./data.json";

import SliderBox from "./SliderBox";
const Container = styled.div`
  display: flex;
  padding: 10px;
`;
const StyledTrendingModule = styled.section`
  h1 {
    font-size: 25px;
  }
  .indiana-scroll-container {
    white-space: nowrap;
    margin-left: 3%;
    margin-right: 5%;
    overflow: auto;
    scrollbar-width: 4px;
    scrollbar-color: #5a698f #161d2f;
    &::-webkit-scrollbar {
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background: #161d2f;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #5a698f;
      border-radius: 10px;
      border: 3px none #ffffff;
    }
    > button {
      display: inline-block;
    }
    > button + * {
      margin-left: 1rem;
    }
    @media screen and (min-width: 560px) {
      margin-left: 5%;
    }
    @media screen and (min-width: 800px) {
      margin-left: 8%;
    }
    @media screen and (min-width: 1200px) {
      margin-left: 12%;
    }
  }
`;
export default function Slider({ searchTerm, setBookmarked }) {
  return (
    <StyledTrendingModule>
      <ScrollContainer>
        <Container>
          {Data.filter((movie) => {
            if (searchTerm === "") {
              return movie;
            } else if (
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return movie;
            }
          }).map((movie, id) => {
            if (movie.isTrending === true) {
              return (
                <SliderBox
                  movie={movie}
                  id={id}
                  setBookmarked={() => setBookmarked(movie)}
                />
              );
            }
          })}
        </Container>
      </ScrollContainer>
    </StyledTrendingModule>
  );
}
