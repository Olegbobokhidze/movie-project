import styled from "styled-components";
import React, { useState } from "react";
import IconBookmark from "../images/IconBookmark";
import IconHome from "../images/IconHome";
import IconTvSeries from "../images/IconTvSeries";
import IconMovies from "../images/IconMovies";
import Logo from "../images/Logo";
import Avatar from "../images/image-avatar.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
const HeaderTop = styled.header`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #161d2f;
  position: fixed;
  top: 0;
  z-index: 100;
  @media screen and (min-width: 1200px) {
    justify-content: center;
    flex-direction: column;
    width: 96px;
    margin-left: 30px;
    left: 0;
    top: 0;
    margin-top: 10px;
    height: 960px;
    border-radius: 20px;
  }
`;
const AvatarImg = styled.img`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 1200px) {
    width: 40px;
    height: 40px;
  }
`;
const IconHolder = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 24px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1200px) {
    grid-template-columns: auto;
    row-gap: 40px;
    margin-bottom: 550px;
    margin-top: 70px;
  }
`;
export default function Header() {
  return (
    <HeaderTop>
      <Logo />
      <IconHolder>
        <NavLink
          to="/movie-project"
          end
          className={({ isActive }) => (isActive ? "active" : "unactive")}
        >
          <IconHome />
        </NavLink>
        <NavLink
          to="/movie-project/movies"
          className={({ isActive }) => (isActive ? "active" : "unactive")}
        >
          <IconMovies />
        </NavLink>
        <NavLink
          to="/movie-project/tvseries"
          className={({ isActive }) => (isActive ? "active" : "unactive")}
        >
          <IconTvSeries />
        </NavLink>
        <NavLink
          to="/movie-project/bookmarked"
          className={({ isActive }) => (isActive ? "active" : "unactive")}
        >
          <IconBookmark />
        </NavLink>
      </IconHolder>
      <AvatarImg src={Avatar} />
    </HeaderTop>
  );
}
