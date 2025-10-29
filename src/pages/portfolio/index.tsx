import React from "react";
import "./index.css";
import HeroComponent from "@site/src/components/HeroComponent/HeroComponent";


export default function Render() {
  return (
    <section>
        <div className="about-me">
         
          <HeroComponent></HeroComponent>
      </div>
    </section>
  );
}

