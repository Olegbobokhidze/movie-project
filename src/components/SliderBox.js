import React from "react";
import Emptybookmark from "../images/icon-bookmark-empty.svg";
import Fullbookmark from "../images/icon-bookmark-full.svg";
import Playbutton from "../images/icon-play.svg";
import IconCategoryMovie from "../images/IconCategoryMovie.svg";
import IconCategoryTv from "../images/IconCategoryTv.svg";
import {
  BookmarkImg,
  PlayButtonImg,
  PlayText,
  Img,
  BookmarkBoxSlider,
  DivText,
  BoxSlider,
  PlayButtonSlider,
  DivParagraphs,
  MovieTitleSlider,
  IconCategorySlider,
} from "./Allmovies.styled";
export default function SliderBox({ movie, id, setBookmarked }) {
  function MediaSvg() {
    if (movie.category === "Movie") {
      return IconCategoryMovie;
    } else {
      return IconCategoryTv;
    }
  }
  return (
    <BoxSlider key={id}>
      <Img
        src={process.env.PUBLIC_URL + movie.thumbnail.trending.large}
        alt={movie.title}
      />
      <BookmarkBoxSlider>
        <BookmarkImg
          src={movie.isBookmarked ? Fullbookmark : Emptybookmark}
          alt={movie.id}
          onClick={() => setBookmarked(movie)}
        />
      </BookmarkBoxSlider>
      <PlayButtonSlider>
        <PlayButtonImg src={Playbutton} alt="playbtn" />
        <PlayText>Play</PlayText>
      </PlayButtonSlider>
      <DivText>
        <DivParagraphs>
          {movie.year} &middot;
          <IconCategorySlider src={MediaSvg()} /> {movie.category} &middot;{" "}
          {movie.rating}
        </DivParagraphs>
        <MovieTitleSlider>{movie.title}</MovieTitleSlider>
      </DivText>
    </BoxSlider>
  );
}
