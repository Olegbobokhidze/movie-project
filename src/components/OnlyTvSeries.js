import React from "react";
import MovieBox from "./MovieBox";
import { Container, Recomended } from "./Allmovies.styled";

export default function OnlyMovies({ searchTerm, contentList, setBookmarked }) {
  return (
    <>
      <Recomended>
        {searchTerm
          ? `Found ${
              contentList.filter((movie) => {
                if (movie.category !== "Movie") {
                  return movie.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
                }
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
            if (movie.category !== "Movie") {
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
