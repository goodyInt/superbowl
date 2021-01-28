import React from "react";
import './squareNum.css';
//import pageStyles from "./aboutPage.module.scss";

//import InfoCard from "../../components/cards/info/infoCard";
//import aboutData from "./aboutData";

const squareNum = props => {
  const {squareNumber, squareName} = props;
  return (
    <div  className="mainSquareNum">
        <div  className="squareNumberNum">
        {squareNumber}
       </div>
       <div  className="nameHolderNum">
       <div  className="squareNameNum">
       {squareName}
       </div>
      </div>
       
    </div>
  );
};

export default squareNum;

