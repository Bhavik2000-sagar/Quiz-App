import React from "react";

const Hero = (props) => {
  const handleAnswer = (event) => {
    const selectedAnswer = event.target.value;
    props.handleSelectAnswer(selectedAnswer);
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        width: "90%",
        borderRadius: "20px",
        border: "1px solid #171717",
        padding: "15px",
        backgroundColor: "#171717",
        color: "#fff",
      }}
    >
      <p>
        {props.quen + 1}) {props.que}
      </p>
      <p>
        <input
          type="radio"
          value="A"
          name={props.quen + 1}
          onChange={handleAnswer}
          style={{ marginRight: "5px" }}
        />
        A) {props.op1}
      </p>
      <p>
        <input
          type="radio"
          value="B"
          name={props.quen + 1}
          onChange={handleAnswer}
          style={{ marginRight: "5px" }}
        />
        B) {props.op2}
      </p>
      <p>
        <input
          type="radio"
          value="C"
          name={props.quen + 1}
          onChange={handleAnswer}
          style={{ marginRight: "5px" }}
        />
        C) {props.op3}
      </p>
      <p>
        <input
          type="radio"
          value="D"
          name={props.quen + 1}
          onChange={handleAnswer}
          style={{ marginRight: "5px" }}
        />
        D) {props.op4}
      </p>
      {/* Optionally, display the selected answer */}
      <p>{props.showAnswers === true ? `The ans is ${props.ans}` : ""}</p>
    </div>
  );
};

export default Hero;
