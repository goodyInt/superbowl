import React from "react";
import "./square.css";
import styled from "styled-components";
//import pageStyles from "./aboutPage.module.scss";

//import InfoCard from "../../components/cards/info/infoCard";
//import aboutData from "./aboutData";

const Square = (props) => {
  const {
    squareNumber,
    squareFirstName,
    squareSecondName,
    winner,
    paid,
    squareWidth,
    squareHeight,
    background,
  } = props;

  let squareBackground = background;
  console.log("background", background);

  if (!squareBackground) {
    if (winner === true) {
      squareBackground = "mediumseagreen";
    } else {
      squareBackground = "white";
    }
  }

  let thisSquareHeight = squareHeight;
  if (!thisSquareHeight) {
    thisSquareHeight = squareWidth;
  }

  console.log("squareBackground", squareBackground);
  //bg={winner === true ? "mediumseagreen" : "white"}

  const BoardSquare = styled.div`
    display: flex;
    text-align: left;
    font-size: small;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.bg};
    color: black;
    border: black 1px solid;
    height: ${(props) =>
      props.thisSquareHeight === "70px" ? "70px" : props.thisSquareHeight};
    width: ${(props) =>
      props.squareWidth === "70px" ? "70px" : props.squareWidth};
  `;

  return (
    <BoardSquare
      bg={squareBackground}
      thisSquareHeight={thisSquareHeight}
      squareWidth={squareWidth}
    >
      <div
        className={`${paid === true ? "squareNumberPaid" : "squareNumber"} ${
          winner === true ? "squareNumberWinner" : ""
        }`}
      >
        {squareNumber}
      </div>
      <div
        className={`${winner === true ? "nameHolderWinner" : "nameHolder"} ${
          squareFirstName === "." ? "noName" : ""
        }`}
      >
        <div className="squareFirstName">{squareFirstName}</div>
        <div className="squareSecondName">{squareSecondName}</div>
      </div>
    </BoardSquare>
  );
};

export default Square;
