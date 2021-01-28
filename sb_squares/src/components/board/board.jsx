import React from "react";
import Square from "../square/square"
import SquareNum from "../squareNum/squareNum"
import './board.css';
//import aboutData from "./aboutData";

const Board = () => {

    const getTopNumbers = ()=> {
        let topNum = []; 
        topNum.push(<SquareNum />)
        for (let i= 0; i<10;i++){
            topNum.push(<SquareNum squareName="?"/>)
        }
        return  <div className="MainRow">
                    {topNum}
                </div>
    }
  
    const getRow = (rowNum)=> {
        let row = []; 
        row.push(<SquareNum squareName="?"/>)
        for (let i= 0; i<10;i++){
            row.push(<Square squareName="..." squareNumber = {(rowNum+(i+1))}/>)
        }
        return  <div className="MainRow">
                    {row}
                </div>
    }
    const getBoard = ()=> {
        let allRows = []; 

        allRows.push(getTopNumbers());

        for (let i= 0; i<10;i++){
            allRows.push(getRow((i*10)))
        }
        return<div className="MainBoard">
                    <div  className="teamBLeft">
                    TAMPA BAY BUCCANEERS
                    </div>
                    <div  className="MainBoardHolder"> 
                     {allRows}
                    </div>
                    <div  className="teamB">
                    THE TOM BRADYS
                    
                    </div>
                </div>
        }
  return (
    <>
        <div  className="MainPage">
             <div  className="mainTitle">
                 SuperBowl LV
             </div>
             <div  className="teamATop">
             KANSAS CITY CHIEFS
              
             </div>
           
             {getBoard()}
             <div  className="teamA">
             THE PATRICK MAHONES
               
             </div>
        </div>
    </>
  );
};

export default Board;

