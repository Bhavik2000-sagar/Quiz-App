import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        style={{
          padding: "10px 25px",
          borderRadius: "20px",
          boxShadow: "2px 2px 0 #fff",
          cursor: "pointer",
          display: !props.show ? "block" : "none"
        }}
        onClick={props.fun}
      >
        {!props.show ? "Start Quiz" : ""}
      </button>
    </>
  );
};

export default Button;
