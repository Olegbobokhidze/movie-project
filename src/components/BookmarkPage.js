import React, { useState } from "react";
import MovieBox from "./MovieBox";
import { Container, Recomended } from "./Allmovies.styled";

export default function BookmarkPage({
  searchTerm,
  contentList,
  setContentList,
  setBookmarked,
}) {
  const [category, setCategory] = useState([]);
  return (
    <>
      <Recomended>Bookmarked Movies</Recomended>
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
            if (movie.isBookmarked && movie.category === "Movie") {
              return (
                <MovieBox
                  movie={movie}
                  id={id}
                  searchTerm={searchTerm}
                  setContentList={setContentList}
                  setCategory={setCategory}
                  category={category}
                  setBookmarked={() => setBookmarked(movie)}
                />
              );
            }
          })}
      </Container>
      <Recomended>Bookmarked TV Series</Recomended>
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
            if (movie.isBookmarked && movie.category !== "Movie") {
              return (
                <MovieBox
                  movie={movie}
                  id={id}
                  searchTerm={searchTerm}
                  setContentList={setContentList}
                  setCategory={setCategory}
                  category={category}
                  setBookmarked={() => setBookmarked(movie)}
                />
              );
            }
          })}
      </Container>
    </>
  );
}
