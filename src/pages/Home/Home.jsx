import React, { Suspense } from "react";
import { Hero } from "../../components";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Suspense fallback={null}>
          <div className="spline">
            <Hero />
          </div>
        </Suspense>
      </Wrapper>

      <Content>
        <h1>There you are!</h1>
        <p>
          Welcome to my 3D Design Portfolio.
          <br />
          Explore my creations from icons
          <br />
          to fully interactive scenes.
          <br />
          Always ask the question!
        </p>
        <button>
          <a href="/icons">What does this button do?!!</a>
        </button>
      </Content>
    </>
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
  overflow-y: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;
    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;
const Content = styled.div`
  position: absolute;
  top: 300px;
  width: 100%;
  padding-bottom: 100px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 80px;
  @media (max-width: 1024px) {
    gap: 40px;
  }
  h1 {
    font-weight: bold;
    font-family: "Spline Sans Mono", monospace;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  button {
    background: rgba(0, 0, 0, 0.2);

    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 140px;
    /* color: white; */
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;
    display: flex;
    gap: 2px;
    justify-content: center;
    align-items: center;

    :hover {
      border: 1px solid rgba(11, 131, 121, 0.8);

      transform: translateY(-3px);
    }
  }
  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
  a {
    color: white;
    transition: 1s;
    text-decoration: none;
    :hover {
      font-style: none;
      color: teal;
    }
  }
`;
