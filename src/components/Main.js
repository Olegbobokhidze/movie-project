import React from "react";
import MovieBox from "./MovieBox";
import { Container, Recomended } from "./Allmovies.styled";
import Slider from "./Slider";
export default function Main({ searchTerm, contentList, setBookmarked }) {
  return (
    <>
      <Recomended>Trending</Recomended>
      <Slider searchTerm={searchTerm} setBookmarked={setBookmarked} />

      <Recomended>
        {searchTerm
          ? `Found ${
              contentList.filter((movie) => {
                return movie.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              }).length
            } results for "${searchTerm}"`
          : "Recommended"}
      </Recomended>
      <Container>
        {contentList
          .filter((movie) => {
            if (searchTerm === "") {
              return movie;
            } else if (
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return movie;
            }
          })
          .map((movie, id) => {
            if (movie.isTrending === false) {
              return (
                <MovieBox
                  movie={movie}
                  id={id}
                  searchTerm={searchTerm}
                  setBookmarked={() => setBookmarked(movie)}
                />
              );
            }
          })}
      </Container>
    </>
  );
}
