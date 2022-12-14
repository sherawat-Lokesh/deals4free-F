import {  Routes, Route } from "react-router-dom";
import { useState } from "react";
import "aos";
import "aos/dist/aos.css";
import "tachyons";
import "./card.css";
import LeftCard from "./leftSideCard.js";
import RightCard from "./rightSideCard.js";
import CardArticle from "../cardArticle/cardArticle.js";
import SearchResPage from "./searchResPage";

const Cards = ({ carddata: cardComponent ,SearchingDataResult}) => {
  const [ar_Fi_Name, setFile] = useState(null);
  //if card component have no value it won't work
  // console.log(window.location.href);
  if (cardComponent === undefined) return;
    if (ar_Fi_Name !== null) {
      setInterval(() => {
        if (window.location.href === "http://localhost:3000/") {
          setFile(null);}
            clearInterval();
              }, 2000);
  }
  return (

  <div className="flex mt4 ">
        <Routes>
          <Route path="/" element={<LeftCard getFileName={setFile} cardData={cardComponent} />}>
            </Route>
          <Route
            path="/article"
            element={<CardArticle articleFileName={ar_Fi_Name} emptySetState={setFile} cardData={cardComponent}/>}>
            </Route>
          <Route path="/SearchResult" element={<SearchResPage searchData={SearchingDataResult} getFileName={setFile}/>}
          ></Route>
        </Routes>
      <div className="right-section">
          <RightCard cardData={cardComponent} />
      </div>
  </div>

  );
};
export default Cards;
