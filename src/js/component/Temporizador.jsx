import React from "react";
import propTypes from "prop-types";
import ReactDOM from "react-dom";

export const SecondsCounter = (props) => {
    return (

        
        <div id="temporizador" className="container d-flex justify-content-center bg-black text-white mt-5 rounded">
           
            <div>
                <i className="far fa-clock"></i>
            </div>
            <div id="numeros" className="four">{props.positionFour % 10}</div>
            <div id="numeros" className="three">{props.positionThree % 10}</div>
            <div id="numeros" className="two">{props.positionTwo % 10}</div>
            <div id="numeros" className="one">{props.positionOne % 10}</div>
        </div>
    );
};
SecondsCounter.propTypes = {
    positionFour: propTypes.number,
    positionThree: propTypes.number,
    positionTwo: propTypes.number,
    positionOne: propTypes.number,
}
let counter = 0
setInterval(function () {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    console.log(four, three, two, one);
    counter++;
    ReactDOM.render(<SecondsCounter positionOne={one} positionTwo={two} positionThree={three} positionFour={four} />, document.querySelector("#app"));
}, 1000);





