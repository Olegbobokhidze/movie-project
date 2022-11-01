import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: auto auto;
  margin-left: 3%;
  column-gap: 25px;
  row-gap: 20px;
  margin-bottom: 56px;
  @media screen and (min-width: 560px) {
    margin-left: 5%;
  }
  @media screen and (min-width: 600px) {
    grid-template-columns: auto auto auto;
  }
  @media screen and (min-width: 800px) {
    margin-left: 8%;
  }
  @media screen and (min-width: 1100px) {
    grid-template-columns: auto auto auto auto;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: auto auto auto auto;
    margin-left: 12%;
  }
  @media screen and (min-width: 1700px) {
    grid-template-columns: auto auto auto auto auto;
  }
`;
export const Recomended = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 30px;
  margin-top: 20px;
  margin-left: 3%;
  color: #fff;
  @media screen and (min-width: 560px) {
    margin-left: 5%;
  }
  @media screen and (min-width: 800px) {
    margin-left: 8%;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 12%;
  }
`;
export const Div = styled.div`
  display: flex;
  color: grey;
  text-align: center;
  align-items: center;
  font-size: 11px;
  margin-top: 3px;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;
export const MovieImg = styled.img`
  width: 164px;
  height: 110px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 140px;
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 174px;
  }
`;
export const MovieTitle = styled.h3`
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  line-height: 17px;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const PlayButton = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35px;
  left: 30px;
  background-color: #10141e;
  width: 90px;
  height: 40px;
  border-radius: 20px;
  opacity: 0.75;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    top: 50px;
    left: 65px;
  }
  @media screen and (min-width: 1440px) {
    top: 65px;
    left: 95px;
  }
`;
export const Box = styled.div`
  position: relative;
  &:hover ${PlayButton} {
    display: flex;
  }
  &:hover ${MovieImg} {
    opacity: 0.5;
  }
`;
export const PlayText = styled.h2`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;
export const PlayButtonImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
export const BookmarkBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 15px;
  left: 120px;
  background-color: #10141e;
  width: 30px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    background-color: #708090;
  }
  @media screen and (min-width: 768px) {
    top: 20px;
    left: 170px;
  }
  @media screen and (min-width: 1440px) {
    top: 20px;
    left: 220px;
    width: 40px;
    height: 30px;
  }
`;
export const BookmarkImg = styled.img`
  cursor: pointer;
`;
export const IconCategory = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 2px;
`;
export const IconCategorySlider = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 0px;
`;
/////////////////////////////////////////
//  FOR SLIDER
/////////////////////////////////////////
export const Img = styled.img`
  width: 240px;
  height: 140px;
  border-radius: 8px;
  margin-right: 10px;
  @media screen and (min-width: 700px) {
    width: 470px;
    height: 230px;
  }
`;

export const BookmarkBoxSlider = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 15px;
  left: 190px;
  background-color: #10141e;
  width: 30px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.7;
  &:hover {
    opacity: 0.4;
  }
  @media screen and (min-width: 700px) {
    top: 30px;
    left: 400px;
    width: 40px;
    height: 30px;
  }
`;
export const PlayButtonSlider = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 53px;
  left: 75px;
  background-color: #10141e;
  width: 90px;
  height: 40px;
  border-radius: 20px;
  opacity: 0.75;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    top: 100px;
    left: 180px;
  }
`;
export const DivText = styled.div`
  position: Absolute;
  bottom: 7px;
  left: 10px;
  @media screen and (min-width: 700px) {
    bottom: 12px;
    left: 20px;
  }
`;
export const BoxSlider = styled.div`
  position: relative;
  &:hover ${PlayButtonSlider} {
    display: flex;
  }
  &:hover ${Img} {
    opacity: 0.5;
  }
`;
export const DivParagraphs = styled.p`
  color: white;
  font-size: 13px;
  font-weight: 300;
`;
export const MovieTitleSlider = styled.h1`
  font-size: 32px;
  color: white;
  font-weight: 700;
`;
