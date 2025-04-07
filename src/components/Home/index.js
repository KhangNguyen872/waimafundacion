import React, { useEffect, useState } from "react";
import "./index.scss";
import HomeCard from "./HomeCard";
import MenuBarLanding from "../MenubarLanding";
import { Link } from "react-router-dom";

const Home = () => {
  const colors = ["#8c458a", "#D9991E", "#9DAD2A", "#8c458a", "#D9991E"];
  const letters = "WAIMA".split("");

  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(localStorage.getItem("lang") || "en");
        };

        window.addEventListener("languageChange", handleLanguageChange);

        return () => window.removeEventListener("languageChange", handleLanguageChange);
    }, []);


  return (
    <div className="size-window">
      <section className="background-wrapper">
        <MenuBarLanding />
        <div className="hero-wrapper-primary">
          <div className="hero-content">
            <div className="home-content-grid-wrapper">
              <div className="text-box-wrapper">
                <h1>
                  {language === "es"
                    ? "FUNDACIÓN"
                    : "Foundation"}
                  <span
                    className="text-shadow-white"
                    style={{ marginRight: "20px" }}
                  >
                    {letters.map((letter, index) => (
                      <span key={index} style={{ color: colors[index] }}>
                        {letter}
                      </span>
                    ))}
                  </span>
                </h1>

                <p>
                  {language === "es"
                    ? "Empoderando comunidades, transformando vidas."
                    : "Empowering Communities, Transforming Lives."}
                </p>

                <div className="button-switch">
                  <h2 className="hover-state-1">
                    <Link className="link-txt" to="/about">
                      {language === "es" ? "Aprende Más" : "Learn More"}
                    </Link>
                  </h2>
                  <h3 className="hover-state-2">
                    <Link className="link-txt" to="/contact">
                      {language === "es" ? "Contáctenos" : "Contact Us"}
                    </Link>
                    <div className="switch-block"></div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCard />
    </div>
  );
};

export default Home;
