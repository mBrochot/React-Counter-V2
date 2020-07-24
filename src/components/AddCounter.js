import React from "react";

const AddCounter = ({ counters, setCounters }) => {
  return (
    <div className="addCounterSection">
      {counters.length < 3 && (
        <button
          className="addCounter"
          onClick={() => {
            const newTab = [...counters];
            newTab.push(0);
            setCounters(newTab);
          }}
        >
          Add counter
        </button>
      )}
    </div>
  );
};

export default AddCounter;
