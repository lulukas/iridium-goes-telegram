import React from "react";
import "./Header.css";

import BackgroundMountains from "./assets/background-mountain.svg";
import ExclemationMark from "./assets/header-exclemation-mark.svg";
import IridiumLogo from "./logos/logo-iridium.svg";
import TelegramLogo from "./logos/logo-telegram.svg";

export const Header = () => {
  return (
    <header className="container-header">
      <div className="mountain-clipping">
        <img
          src={BackgroundMountains}
          alt="Header Background Mountains"
          className="header-background-mountains"
        />
      </div>
      <div className="header-background-image" />
      <img
        src={ExclemationMark}
        alt="Header Exclemation Mark"
        className="header-background-exclemation-mark"
      />
      <div className="container-title">
        <h1 className="font-64-bold">
          Iridium Go(es) <br /> Telegram
        </h1>
        <p className="font-24-regular">
          Share your thaugts and location from the most remote places in the
          world. Connect your Iridum Go! to a Telegram Bot and chat with your
          friends from anywhere anytime.
        </p>
        <a className="button-primary big">Register</a>
        <img src={IridiumLogo} alt="Iridium Logo" className="iridium-logo" />
        <img src={TelegramLogo} alt="Telegram Logo" className="telegram-logo" />
      </div>
    </header>
  );
};
