import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddCounter from "./components/AddCounter";
import Counter from "./components/Counter";
import RemoveCounter from "./components/RemoveCounter";
import Footer from "./components/Footer";

function App() {
  const [counters, setCounters] = useState([0]);
  return (
    <div className="App">
      <Header />

      <AddCounter counters={counters} setCounters={setCounters} />

      <Counter counters={counters} setCounters={setCounters} />

      <RemoveCounter counters={counters} setCounters={setCounters} />

      <Footer />
    </div>
  );
}

export default App;
