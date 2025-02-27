import { useState, useEffect } from "react";
import "./index.scss";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo2.png";

export default function MenubarLanding() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem("lang") || "en");
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    window.dispatchEvent(new Event("languageChange"));
  };

  // Define menu items with dynamic translations
  const items = [
    {
      label: language === "es" ? "Inicio" : "Home",
      icon: "pi pi-fw pi-home",
      command: () => navigate("/"),
    },
    {
      label: language === "es" ? "Acerca de" : "About",
      icon: "pi pi-fw pi-info-circle",
      command: () => navigate("/about"),
    },
    {
      label: language === "es" ? "Programas" : "Programs",
      icon: "pi pi-fw pi-book",
      command: () => navigate("/"),
    },
    {
      label: language === "es" ? "Informes DIAN" : "Reports DIAN",
      icon: "pi pi-fw pi-list-check",
      items: [
        { label: language === "es" ? "Informe DIAN 2017" : "Report DIAN 2017", icon: "pi pi-fw pi-file" },
        { label: language === "es" ? "Informe DIAN 2018" : "Report DIAN 2018", icon: "pi pi-fw pi-file" },
        { label: language === "es" ? "Informe DIAN 2019" : "Report DIAN 2019", icon: "pi pi-fw pi-file" },
        { label: language === "es" ? "Informe DIAN 2020" : "Report DIAN 2020", icon: "pi pi-fw pi-file" },
        { label: language === "es" ? "Informe DIAN 2021" : "Report DIAN 2021", icon: "pi pi-fw pi-file" },
      ],
    },
    {
      label: language === "es" ? "Contacto" : "Contact",
      icon: "pi pi-fw pi-envelope",
      command: () => navigate("/"),
    },
    {
      label: language === "es" ? "Idioma" : "Language",
      icon: "pi pi-fw pi-bolt",
      items: [
        {
          label: "English",
          icon: "pi pi-fw pi-globe",
          command: () => switchLanguage("en"),
        },
        {
          label: "Español",
          icon: "pi pi-fw pi-globe",
          command: () => switchLanguage("es"),
        },
      ],
    },
  ];

  const end = <img alt="logo" src={logo} height="70" className="mr-2" />;

  return (
    <div className="menubar-height">
      <div className="menubar-landing">
        <Menubar className="border-radius-0" model={items} end={end} />
      </div>
    </div>
  );
}
