import React, { useState } from "react";
import Emptybookmark from "../images/icon-bookmark-empty.svg";
import Fullbookmark from "../images/icon-bookmark-full.svg";
import Playbutton from "../images/icon-play.svg";
import IconCategoryMovie from "../images/IconCategoryMovie.svg";
import IconCategoryTv from "../images/IconCategoryTv.svg";
import {
  BookmarkImg,
  Box,
  MovieImg,
  BookmarkBox,
  PlayButton,
  PlayButtonImg,
  PlayText,
  Div,
  MovieTitle,
  IconCategory,
} from "./Allmovies.styled";
export default function MovieBox({
  movie,
  id,
  setBookmarkList,
  setCategory,
  category,
  setBookmarked,
}) {
  function MediaSvg() {
    if (movie.category === "Movie") {
      return IconCategoryMovie;
    } else {
      return IconCategoryTv;
    }
  }
  // const [bookmarked, setBookmarked] = useState(movie.isBookmarked);

  return (
    <>
      <Box key={id}>
        <MovieImg
          src={process.env.PUBLIC_URL + movie.thumbnail.regular.large}
          alt={movie.title}
        />
        <BookmarkBox>
          <BookmarkImg
            src={movie.isBookmarked ? Fullbookmark : Emptybookmark}
            alt={movie.id}
            onClick={() => setBookmarked(movie)}
          />
        </BookmarkBox>
        <PlayButton>
          <PlayButtonImg src={Playbutton} alt="playbtn" />
          <PlayText>Play</PlayText>
        </PlayButton>
        <Div>
          {movie.year} &middot;
          <IconCategory src={MediaSvg()} /> {movie.category} &middot;{" "}
          {movie.rating}
        </Div>
        <MovieTitle>{movie.title}</MovieTitle>
      </Box>
    </>
  );
}
