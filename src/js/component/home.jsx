import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  let [color, setColor] = useState(null);

  const handleClick = (color) => {
    setColor(color);
    console.log(color);
  };

  return (
    <>
      <div id="conteiner">
        <div id="support"></div>
        <div id="traffic-light">
          <div
            className={"circle red " + (color === "red" ? "turn-on" : "")}
            onClick={() => handleClick("red")}
          ></div>
          <div
            className={"circle yellow " + (color === "yellow" ? "turn-on" : "")}
            onClick={() => handleClick("yellow")}
          ></div>
          <div
            className={"circle green " + (color === "green" ? "turn-on" : "")}
            onClick={() => handleClick("green")}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Home;
