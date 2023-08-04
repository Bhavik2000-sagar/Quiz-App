import "./App.css";
import { getData } from "./Api";
import { useState } from "react";
import Hero from "./Hero";
import Button from "./Button";

function App() {
  const [quedata, setQuedata] = useState([]);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const getQuiz = async () => {
    setShow(true);
    let data = await getData();
    setQuedata(data);
  };

  const questionsToDisplay = quedata.slice(0, 10);

  const handleScore = () => {
    setSubmitted(true);
  };

  const handleSelectAnswer = (correctAnswer) => (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      console.log(correctAnswer);
      console.log("Match");
      setCount((prevCount) => prevCount + 1);
    } else {
      console.log("Not Match");
    }
  };

  const resetGame = () =>{
    window.location.reload(true);
  }

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: show ? "fit-content" : "100vh",
          backgroundColor: !show ? "#171717" : "#fff",
          color: !show ? "#fff" : "#171717",
        }}
      >
        <h2>{!show ? "Press 'Start Quiz' to Start" : "Enjoy Your Exam"}</h2>
        {submitted === true ? (
          <>
            <h2>
              Your Score is{" "}
              <span style={{ color: "red", fontWeight: "600" }}>{count}</span>
            </h2>
          </>
        ) : (
          <></>
        )}
        <Button fun={getQuiz} show={show} />
      </div>
      <div
        style={{
          display: show ? "flex" : "none",
          flexDirection: "column",
          gap: "25px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {quedata.length ? (
          questionsToDisplay.map((item, i) => (
            <Hero
              key={i}
              que={item.question}
              op1={item.A}
              op2={item.B}
              op3={item.C}
              op4={item.D}
              quen={i}
              ans={item.answer}
              handleSelectAnswer={handleSelectAnswer(item.answer)}
              showAnswers={submitted}
            />
          ))
        ) : (
          <></>
        )}
        <button
          style={{
            padding: "10px 25px",
            borderRadius: "20px",
            boxShadow: "2px 2px 0 #fff",
            cursor: "pointer",
          }}
          onClick={submitted ? resetGame : handleScore}
        >
          {
            submitted ? "Restart" : "Submit"
          }
        </button>
      </div>
    </div>
  );
}

export default App;
