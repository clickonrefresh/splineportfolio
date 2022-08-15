import Spline from "@splinetool/react-spline";
import React, { Suspense, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
// import { BlenderLogo } from '../../components'
// import { ThreeLogo } from '../../components'
// import { ReactLogo } from '../../components'
// import { SplineLogo } from '../../components'
// import { UELogo } from '../../components'
// import { JSLogo } from '../../components'

// import { motion } from 'framer-motion'

// import { BlenderLogo, JSLogo, ReactLogo, ThreeLogo, UELogo, SplineLogo } from '../../components'

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
  javascript: "https://prod.spline.design/ob0IQmZRAd9DfKW2/scene.splinecode",
  blender: "https://prod.spline.design/nhh6Z1cFSRkPKPtq/scene.splinecode",
  ue: "https://prod.spline.design/FPICx2yBVSEfxI5V/scene.splinecode",
  react: "https://prod.spline.design/tTGPeHQJdQv7bWgC/scene.splinecode",
  spline: "https://prod.spline.design/QObOtCOUi6SczlBF/scene.splinecode",
  threejs: "https://prod.spline.design/LXYsttF0346UBljH/scene.splinecode",
};

const Icons = () => {
  const [icon, setIcon] = useState("javascript"); // no initial icon leave empty string

  return (
    <>
      <Wrapper>
        <Suspense fallback={null}>
          <div className="app__header-circles">
            <Spline scene={scenes[icon]} />
          </div>
        </Suspense>
      </Wrapper>

      <Content>
        <h1>3D Icons</h1>
        <p>
          Icons, Logos and Badges.
          <br />
        </p>
        <br />

        <button onClick={() => setIcon("javascript")}>Javascript</button>

        <button onClick={() => setIcon("blender")}>Blender</button>
        <button onClick={() => setIcon("ue")}>Unreal Engine</button>
        <button onClick={() => setIcon("threejs")}>Three JS</button>
        <button onClick={() => setIcon("react")}>React JS</button>
        <button onClick={() => setIcon("spline")}>SplineTool</button>
      </Content>
    </>
  );
};

export default Icons;

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  .app__header-circles {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 780px;
    width: 800px;

    margin-left: 600px;

    z-index: 19;
    padding: 150px 300px;
    padding-left: 100px;
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
