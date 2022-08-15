import React, { Suspense } from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { ChatDotsFill } from "@styled-icons/bootstrap";

const Navbar = () => {
  return (
    <>
      <Social>
        <div />
      </Social>
      <Content>
        <div className="logo">
          <Suspense fallback={null}>
            <Logo />
          </Suspense>
        </div>
        <Menu>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/icons">Icons</a>
          </li>
          <li>
            <a href="/characters">Characters</a>
          </li>

          <li>
            <a href="/interactive">Interactive</a>
          </li>
          <li>
            <a href="/aiart">AIArt</a>
          </li>

          <li className="calltoact">
            <a className="consult" href="mailto:clickonrefresh@gmail.com">
              Consult
              <div className="mailbadge">
                <ChatDotsFill />
              </div>
            </a>
          </li>
        </Menu>
      </Content>
    </>
  );
};

export default Navbar;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  padding-bottom: 100px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 80px;

  z-index: 9;

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
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
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
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px 6px;

    height: 80px;
    margin: 0 auto;
    position: absolute;
    left: 10%;
    right: 75%;
    top: 10%;
    bottom: 20%;

    z-index: 100;

    background: rgba(35, 61, 75, 0);
    /* backdrop-filter: blur(10px); */
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  /* margin: 0 200px 0 100px; */
  /* padding: 0; */
  pointer-events: auto;
  height: 48px;
  width: 941px;
  /* top: 39px; */
  /* left: 489px; */

  position: absolute;
  left: 34%;
  right: 1%;
  top: 15%;
  bottom: 32%;

  background: rgba(0, 0, 0, 0.397);
  border-radius: 10px;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;
  }

  .calltoact {
    /* CallToAction-Chat */

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 14px;
    gap: 10px;

    position: absolute;
    left: 84.31%;
    right: 4.44%;
    top: 35%;
    bottom: 35%;

    .consult {
      /* Consult */

      width: 108px;
      height: 28px;

      font-family: "Spline Sans Mono";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.05em;
      :hover {
        font-size: 28px;
      }
      /* White */

      color: #ffffff;

      /* Inside auto layout */

      flex: 1;
      order: 0;
      flex-grow: 0;
    }
    .mailbadge {
      /* Group */

      width: 24px;
      height: 17px;
      padding-left: 8px;

      /* Inside auto layout */

      display: flex;
      order: 1;
    }
  }

  a {
    text-decoration: none;
    color: white;
    padding: 8px 20px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0);
    transition: 0.3s;
    :hover {
      /* border: 6px solid rgba(31, 66, 250, 0.8); */
      font-size: larger;
    }
  }

  button {
    margin: 0;
    width: auto;
    background: rgba(165, 169, 190, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }
`;
