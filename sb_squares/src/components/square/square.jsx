import React from "react";
import './square.css';
//import pageStyles from "./aboutPage.module.scss";

//import InfoCard from "../../components/cards/info/infoCard";
//import aboutData from "./aboutData";

const Square = props => {
  const {squareNumber, squareName} = props;
  return (
    <div  className="mainSquare">
        <div  className="squareNumber">
        {squareNumber}
       </div>
       <div  className="nameHolder">
       <div  className="squareName">
       {squareName}
       </div>
      </div>
       
    </div>
  );
};

export default Square;

