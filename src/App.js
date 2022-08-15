import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import { Home, Icons, Interactive, Characters, AIArt } from "./pages";
import { Navbar } from "./components";

import "./App.css";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/interactive" element={<Interactive />} />
        <Route path="/aiart" element={<AIArt />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  overflow-x: hidden;
`;

export default App;
