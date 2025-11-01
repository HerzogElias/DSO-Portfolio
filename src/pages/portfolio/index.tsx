import React from "react";
import "./index.css";
import HeroComponent from "@site/src/components/HeroComponent/HeroComponent";

export default function Render() {
  return (
    <section className="about-me">
      <div className="content">
        <HeroComponent />
      </div>
    </section>
  );
}


