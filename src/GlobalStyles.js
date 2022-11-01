import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap');
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    background-color: #10141E;
    font-family: 'Outfit', sans-serif;
}
::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.269);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(128, 128, 128, 0.692);
}

`;
