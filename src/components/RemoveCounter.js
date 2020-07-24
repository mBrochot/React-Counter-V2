import React from "react";

const RemoveCounter = ({ counters, setCounters }) => {
  return (
    <div className="removeCounterSection">
      {counters.length >= 2 && (
        <button
          className="removeCounter"
          onClick={() => {
            const newTab = [...counters];
            newTab.pop();
            setCounters(newTab);
          }}
        >
          Remove counter
        </button>
      )}
    </div>
  );
};

export default RemoveCounter;
