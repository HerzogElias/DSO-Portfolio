import React from "react";
import "./index.css"; 
import HeaderNavbar from "../../components/HeaderComponent/HeaderComponent";
import HeroComponent from "@site/src/components/HeroComponent/HeroComponent";


export default function Render() {
  return (
    <div className="about-me">
      <HeaderNavbar></HeaderNavbar>
      <HeroComponent></HeroComponent>
    </div>
  );
}

