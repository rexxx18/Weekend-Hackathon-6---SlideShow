import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [val, setval] = useState(0);
  const handleClickprenext = () => {
    if (val < props.slides.length - 1) {
      setval(val + 1);
    }
  };
  const handleClickprev = () => {
    if (val > 0) {
      setval(val - 1);
    }
  };

  const handleClickRestart = () => {
    setval(0);
  };
  // console.log(props.slides[0].title)
  return (
    <>
      <div>
        <h1 data-testid="title">{props.slides[val].title}</h1>
        <p data-testid="text">{props.slides[val].text}</p>
      </div>
      <button
        data-testid="button-prev"
        onClick={handleClickprev}
        disabled={val === 0 ? true : false}
      >
        Prev
      </button>
      <button
        data-testid="button-restart"
        onClick={handleClickRestart}
        disabled={val > 0 ? false : true}
      >
        Restart
      </button>
      <button
        data-testid="button-next"
        onClick={handleClickprenext}
        disabled={val === props.slides.length - 1 ? true : false}
      >
        Next
      </button>
    </>
  );
};

export default App;
