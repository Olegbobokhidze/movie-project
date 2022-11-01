import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyles";
import Input from "./components/Input";
import Main from "./components/Main";
import OnlyMovies from "./components/OnlyMovies";
import OnlyTvSeries from "./components/OnlyTvSeries";
import Data from "./components/data.json";
import BookmarkPage from "./components/BookmarkPage";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contentList, setContentList] = useState(Data);
  function setBookmarked(movie) {
    const currentMovie = (element) => element.title === movie.title;
    const currentMovieId = contentList.findIndex(currentMovie);
    const bookmarkArray = [...contentList];
    bookmarkArray[currentMovieId].isBookmarked =
      !bookmarkArray[currentMovieId].isBookmarked;
    setContentList(bookmarkArray);
  }
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Input setSearchTerm={setSearchTerm} />
        <Routes>
          <Route
            path="/movie-project"
            element={
              <Main
                searchTerm={searchTerm}
                contentList={contentList}
                setBookmarked={setBookmarked}
              />
            }
          />
          <Route
            path="/movie-project/movies"
            element={
              <OnlyMovies
                searchTerm={searchTerm}
                contentList={contentList}
                setBookmarked={setBookmarked}
              />
            }
          />
          <Route
            path="/movie-project/tvseries"
            element={
              <OnlyTvSeries
                searchTerm={searchTerm}
                contentList={contentList}
                setBookmarked={setBookmarked}
              />
            }
          />
          <Route
            path="/movie-project/bookmarked"
            element={
              <BookmarkPage
                searchTerm={searchTerm}
                contentList={contentList}
                setContentList={setContentList}
                setBookmarked={setBookmarked}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
