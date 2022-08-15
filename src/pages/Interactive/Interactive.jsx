import React, { Suspense, useState } from "react";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut'
//     }
//   }
// }

const scenes = {
  avatarconfigurator:
    "https://prod.spline.design/yECenVaPtyb66Xrn/scene.splinecode",
  jellopfrellop: "https://prod.spline.design/hK8fdxRUDfdBC5Ya/scene.splinecode",
  aerodynamic: "https://prod.spline.design/g6O9bc5vNfmYYQmf/scene.splinecode",
  astrocanuck: "https://prod.spline.design/pNcbGMEuHYpCwBA9/scene.splinecode",
};

const Interactive = () => {
  const [icon, setIcon] = useState("avatarconfigurator"); // no initial icon leave empty string

  return (
    <>
      <Wrapper>
        <Suspense fallback={null}>
          <div className="spline">
            <Spline scene={scenes[icon]} />
          </div>
        </Suspense>
      </Wrapper>

      <Content>
        <h1>Interactive 3D</h1>
        <p>
          Immersive music videos, content creator avatar scenes, configurators
          and more
          <br />
        </p>
        <br />

        <button onClick={() => setIcon("avatarconfigurator")}>
          Toon Avatar Configurator
        </button>

        <button onClick={() => setIcon("aerodynamic")}>Aerodynamic</button>
        <button onClick={() => setIcon("jellopfrellop")}>Jellop Frellop</button>
        <button onClick={() => setIcon("astrocanuck")}>Astro Scene</button>
      </Content>
    </>
  );
};

export default Interactive;

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
  gap: 20px;
  @media (max-width: 1024px) {
    gap: 10px;
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
    padding-top: 20px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 3px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 240px;

    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;
    display: flex;

    gap: 12px;
    justify-content: center;
    align-items: center;
    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
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
`;
