import { useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import Hero from "./Component/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
