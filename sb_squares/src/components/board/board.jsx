import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Square from "../square/square";
import "./board.css";
import boardData from "./boardData";
import tbLogo from "../../images/tampaBayLogo.png";
import kcLogo from "../../images/kcLogo.png";
import numberDrawKC from "../../assets/kansasCity.mp4";
import numberDrawTB from "../../assets/tbDraw.mp4";

const ranKEy = () => {
  const rKey = Math.random() * 100;
  return rKey.toString();
};

const MainPageHolder = styled.div`
  text-align: center;
  background-color: #282c34;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  max-width: ${(props) => props.maxWidth};
  border: #282c34 2px solid;
`;

let TBArrayCounter = 0;

const windowWidth = window.innerWidth - 20;
let squareWidth = Math.floor(windowWidth / 11);
if (squareWidth > 70) {
  squareWidth = 70;
}
let halfWidth = (squareWidth * 0.5).toString() + "px";
squareWidth = squareWidth.toString() + "px";

const maxWidth = squareWidth * 11;

const Board = () => {
  const getTopNumbers = () => {
    let topNum = [];
    topNum.push(
      <Square
        background="lightGrey"
        squareHeight={halfWidth}
        squareWidth={halfWidth}
        teamScore={true}
        squareSecondName=""
        key={ranKEy()}
      />
    );
    for (let i = 0; i < 10; i++) {
      topNum.push(
        <Square
          squareHeight={halfWidth}
          squareWidth={squareWidth}
          key={ranKEy()}
          squareFirstName=""
          squareSecondName={boardData.kcNums[i]}
          squareNumber=""
          background="lightGrey"
          teamScore={true}
        />
      );
    }
    return (
      <div key={ranKEy()} className="MainRow">
        {topNum}
      </div>
    );
  };
  const getNewRow = (arrayStart) => {
    let row = [];
    TBArrayCounter = 5;
    //++;
    row.push(
      <Square
        background="lightGrey"
        squareHeight={squareWidth}
        squareWidth={halfWidth}
        key={ranKEy()}
        squareNumber=""
        squareSecondName={boardData.tbNums[arrayStart / 10]}
        teamScore={true}
      />
    );
    console.log(
      "boardData.tbNums[TBArrayCounter]",
      boardData.tbNums[TBArrayCounter]
    );
    console.log("arrayStart/10", arrayStart / 10);

    for (let i = arrayStart; i < arrayStart + 10; i++) {
      row.push(
        <Square
          key={boardData.BOARD[i].squareNumber}
          squareFirstName={boardData.BOARD[i].firstName}
          squareSecondName={boardData.BOARD[i].secondName}
          squareNumber={boardData.BOARD[i].squareNumber}
          winner={boardData.BOARD[i].winner}
          paid={boardData.BOARD[i].paid}
          squareHeight={squareWidth}
          squareWidth={squareWidth}
        />
      );
    }
    return (
      <div key={ranKEy()} className="MainRow">
        {row}
      </div>
    );
  };
  const getNewBoard = () => {
    let allRows = [];

    allRows.push(getTopNumbers());

    for (let i = 0; i < 10; i++) {
      allRows.push(getNewRow(i * 10));
    }
    return (
      <div className="MainBoard">
        <div className="teamBHolder">
          <div className="teamBLeft">
            <img className={"tbLogo"} alt="tampa bay logo" src={tbLogo} />
          </div>
        </div>
        <div className="MainBoardHolder">{allRows}</div>
        <div className="teamBHolder">
          <div className="teamB">
            <img className={"tbLogo"} alt="tampa bay logo" src={tbLogo} />
          </div>
        </div>
      </div>
    );
  };
  const getInstructions = () => {
    return (
      <>
        <div className="instructions">
          <h3>Hi Everyone,</h3>
          <div>
            My son John drew the numbers this morning. Check out the videos
            below. Good Luck!
          </div>
          <br />
          Email me with questions:
          <a href="mailto:gavinpower@gmail.com?subject=Squares for the Covid Bowl">
            {" "}
            gavinpower@gmail.com
          </a>
          <br />
          <br />
        </div>
        <div className="instructions2">
          <h2> Payouts</h2>
          1st Quarter $150: BIG AL!
          <br /> 2nd Quarter $300: Tucker Gilroy!
          <br /> 3rd Quarter $150: Hannah Kitzan!
          <br /> Final Score $400: Hannah Kitzan!
          <br />
          <br />
          Winnings will be e-transfered. Good luck!
        </div>

        <div className="videoHolder">
          <div className="video">
            <ReactPlayer
              width="200px"
              height="200px"
              url={numberDrawKC}
              controls={true}
            />
          </div>
          <div className="video">
            <ReactPlayer
              width="200px"
              height="200px"
              url={numberDrawTB}
              controls={true}
            />
          </div>
        </div>

        <div className="instructions3">
          <br />
          <br />
          {boardData.updated}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="MainPage">
        <MainPageHolder maxWidth={maxWidth}>
          <div className="mainTitle">Super Bowl LV</div>
          <div className="subTitle">(Madison/Paupers Covid Bowl)</div>
          <div className="subTitleSoldOut">Good Luck!</div>

          <div className="teamATop">
            <img className={"kcLogo"} alt="kansas city chiefs" src={kcLogo} />
          </div>
          <div className="kcLogoHolder">
            <img
              className="kcLogoMobile"
              alt="kansas city chiefs"
              src={kcLogo}
            />
            <img
              className="kcLogoMobile"
              alt="kansas city chiefs"
              src={kcLogo}
            />
          </div>

          {getNewBoard()}
          <div className="teamA">
            <img className={"kcLogo"} alt="kansas city chiefs" src={kcLogo} />
          </div>

          <div className="tbLogoHolder">
            <img className="tbLogoMobile" alt="tampa bay logo" src={tbLogo} />
            <img className="tbLogoMobile" alt="tampa bay logo" src={tbLogo} />
          </div>
          {getInstructions()}
        </MainPageHolder>
      </div>
    </>
  );
};

export default Board;
