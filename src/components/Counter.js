import React from "react";

const Counter = ({ counters, setCounters }) => {
  return (
    <div className="counterSection">
      {counters.map((counter, index) => {
        return (
          <div className="calculator">
            <div className="calculate">
              <div className="btnBox">
                {counter > 0 && (
                  <button
                    className="decrementBtn"
                    onClick={() => {
                      const newTab = [...counters];
                      newTab[index]--;
                      setCounters(newTab);
                    }}
                  >
                    -
                  </button>
                )}
              </div>

              <span className="result">{counter}</span>
              <div>
                {counter < 10 && (
                  <button
                    className="incrementBtn"
                    onClick={() => {
                      const newTab = [...counters];
                      newTab[index]++;
                      setCounters(newTab);
                    }}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
            <button
              className="reset"
              onClick={() => {
                const newTab = [...counters];
                newTab[index] = 0;
                setCounters(newTab);
              }}
            >
              Reset
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Counter;
