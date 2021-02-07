import React from "react";
import "./square.css";
import styled from "styled-components";

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
    teamScore,
  } = props;

  let squareBackground = background;

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

  const FirstName = styled.div`
    display: flex;
    text-align: center;
    font-size: ${(props) => props.fs_small};
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
      font-size: ${(props) => props.fs_tablet};
    }
    @media screen and (min-width: 900px) {
      font-size: small;
    }
  `;

  const SecondName = styled.div`
    display: flex;
    text-align: center;
    font-size: ${(props) => props.fs_small};
    align-items: center;
    justify-content: center;
    color: ${(props) => props.clr};
    margin-top: ${(props) => props.mt_small};

    @media screen and (min-width: 768px) {
      margin-top: ${(props) => props.mt};
      font-size: ${(props) => props.fs_tablet};
    }
    @media screen and (min-width: 900px) {
      margin-top: ${(props) => props.mt};
      font-size: small;
    }
  `;

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
        <FirstName
          fs_small={teamScore ? "xx-small" : "6px"}
          fs_tablet={teamScore ? "x-small" : "10px"}
        >
          {squareFirstName}
        </FirstName>
        <SecondName
          mt={teamScore ? "15px" : "0px"}
          mt_small={teamScore ? "6px" : "4px"}
          fs={teamScore ? "medium" : "small"}
          fs_small={teamScore ? "xx-small" : "6px"}
          fs_tablet={teamScore ? "x-small" : "10px"}
          clr={
            teamScore
              ? "rgb(30, 30, 30)"
              : squareFirstName === "."
              ? "white"
              : "rgb(61, 27, 233)"
          }
        >
          {squareSecondName}
        </SecondName>
      </div>
    </BoardSquare>
  );
};

export default Square;
