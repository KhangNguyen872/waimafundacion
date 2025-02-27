import React, { useEffect, useState } from "react";
import "./index.scss";
import HomeCard from "./HomeCard";
import MenuBarLanding from "../MenubarLanding";
import { Link } from "react-router-dom";

/**
 * The `Home` component represents the landing page of the application. It 
 * includes a navigation menu, a hero section with promotional content and 
 * call-to-action buttons for signing up and signing in, and a `HomeCard` 
 * component. The layout is styled to provide a visually engaging user experience.
 */
const Home = () => {
  const colors = ["#3F4581", "#D9991E", "#9DAD2A", "#3F4581", "#D9991E"];
  const letters = "WAIMA".split("");

  // Get language from localStorage, default to English
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
                  {language === "es"
                    ? "Fundacion"
                    : "Foundation"}
                </h1>

                <p>
                  {language === "es"
                    ? "Empoderando comunidades, transformando vidas."
                    : "Empowering Communities, Transforming Lives."}
                </p>

                <div className="button-switch">
                  <h2 className="hover-state-1">
                    <Link className="link-txt" to="/">
                      {language === "es" ? "Aprende Más" : "Learn More"}
                    </Link>
                  </h2>
                  <h3 className="hover-state-2">
                    <Link className="link-txt" to="/">
                      {language === "es" ? "Apóyanos" : "Support Us"}
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
