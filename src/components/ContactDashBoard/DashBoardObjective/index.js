import './index.scss';
import React from 'react';
import './index.scss';
import { Tag } from 'primereact/tag';
import logo from '../../../assets/img/logo3.png';
import { FaAward, FaMedal, FaTrophy, FaStar } from "react-icons/fa"; // Importing icons
import { Divider } from 'primereact/divider';
import { Card } from "primereact/card";
import { useEffect, useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function DashBoardObjective() {
    const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(localStorage.getItem("lang") || "en");
        };

        window.addEventListener("languageChange", handleLanguageChange);

        return () => window.removeEventListener("languageChange", handleLanguageChange);
    }, []);

    const awards = [
        { 
            title: language === "es" ? "PREMIO Capacidades para la vida 2015" : "Life Skills AWARD 2015", 
            icon: <FaAward />, 
            color: "bg-blue-500" 
        },
        { 
            title: language === "es" ? "RECONOCIMIENTO titanes caracol 2015" : "2015 Titanes Caracol RECOGNITION", 
            icon: <FaMedal />, 
            color: "bg-green-500" 
        },
        { 
            title: language === "es" ? "RECONOCIMIENTO Fundación Biblioseo 2016" : "2016 Biblioseo Foundation RECOGNITION", 
            icon: <FaTrophy />, 
            color: "bg-yellow-500" 
        },
        { 
            title: language === "es" ? "PREMIO Gestores de Innovación 2017, Ruta N." : "2017 Ruta N Innovation Managers AWARD", 
            icon: <FaStar />, 
            color: "bg-red-500" 
        },
    ];


    const valuesColors = [
    "#8c458a", "#D9991E", "#9DAD2A", "#8c458a", "#D9991E", "#c3b8d8", "#8c458a",  
    "#8c458a", "#D9991E", "#9DAD2A", "#8c458a", "#D9991E", "#c3b8d8", "#8c458a",  
    "#D9991E", "#9DAD2A", "#8c458a", "#D9991E", "#c3b8d8", "#8c458a", "#D9991E", "#8c458a", "#c3b8d8"
    ];    

    const colorizeText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} style={{ color: valuesColors[index % valuesColors.length] }}>{char}</span>
        ));
    };


    return (
        <div className="DashBoard-ContactWrapper-Primary">
            <div className="contact-AboutCard-wrapper">
                <div className="contact-CardText-wrap">
                    <h1 style={{fontSize:"5.5rem"}}>{colorizeText(language === "es" ? "OBJETIVOS ESTRATÉGICOS" : "STRATEGIC OBJECTIVES")}</h1>

                    <br />
                    <div className='contactWrapper-grid'>
                        <div>
                            <h1>{colorizeText(language === "es" ? "OBJETIVO GENERAL" : "General Objective")}</h1>
                            <p>
                                {language === "es"
                                    ? "Promover procesos de inclusión social y laboral a personas que tengan vulnerabilidad económica y-o discapacidad, a través del fortalecimiento de sus capacidades y habilidades y el fomento de oportunidades para el logro de la autonomía y la calidad de vida."
                                    : "Promote processes of social and labor inclusion for people who are economically vulnerable and/or disabled, by strengthening their capacities and skills and fostering opportunities to achieve autonomy and quality of life."
                                }
                            </p>
                        </div>
                        <div>
                            <h1>{colorizeText(language === "es" ? "OBJETIVO ESPECÍFICO 1" : "SPECIFIC OBJECTIVE 1")}</h1>
                            <p>
                                {language === "es"
                                    ? "Impulsar procesos de inclusión social y laboral de los beneficiarios, a través de programas que fortalezcan el desarrollo del ser humano de manera integral."
                                    : "Promote processes of social and labor inclusion of beneficiaries, through programs that strengthen the development of the human being in an integral manner."
                                }
                            </p>
                        </div>
                        <div>
                            <h1>{colorizeText(language === "es" ? "OBJETIVO ESPECÍFICO 2" : "SPECIFIC OBJECTIVE 2")}</h1>
                            <p>
                                {language === "es"
                                    ? "Fomentar espacios de bienestar entre los beneficiarios de la Fundación Waima y sus familias, a través de espacios de integración y actividades de salud mental que mejoren su calidad de vida"
                                    : "Promote spaces of well-being among the beneficiaries of the Waima Foundation and their families, through spaces of integration and mental health activities that improve their quality of life"
                                }
                            </p>
                        </div>
                        <div>
                            <h1>{colorizeText(language === "es" ? "OBJETIVO ESPECÍFICO 3" : "SPECIFIC OBJECTIVE 3")}</h1>
                            <p>
                                {language === "es"
                                    ? "Aportar a la nutrición de nuestros beneficiarios con la entrega de paquetes alimentarios y entrega de almuerzo a los niños que asisten a las clases extracurriculares."
                                    : "Contribute to the nutrition of our beneficiaries by providing food packages and lunch to children who attend extracurricular classes."
                                }
                            </p>
                        </div>
                        <div>
                            <h1>{colorizeText(language === "es" ? "OBJETIVO ESPECÍFICO 4" : "SPECIFIC OBJECTIVES 4")}</h1>
                            <p>
                                {language === "es"
                                    ? "llevar actividades que mejoren la calidad de vida de niños, niñas y jóvenes campesinos a través de actividades puntuales."
                                    : "carry out activities that improve the quality of life of rural children and youth through specific activities."
                                }
                            </p>
                        </div>
                        <div>
                            <h1>{colorizeText(language === "es" ? "OBJETIVO ESPECÍFICO 5" : "SPECIFIC OBJECTIVE 5")}</h1>
                            <p>
                                {language === "es"
                                    ? "Mejorar la autonomía financiera de la Fundación Waima y la de sus beneficiarios, a partir de la consecución de convenios y oportunidades que permitan la prestación de servicios, la generación recursos y la captación de donaciones."
                                    : "To improve the financial autonomy of the Waima Foundation and its beneficiaries by establishing agreements and opportunities that allow for the provision of services, the generation of resources and the collection of donations."
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact-CardText-wrap" style={{marginTop: "5rem"}}>
                    <Divider />
                    <div style={{marginTop: "5rem"}}>
                        <div>
                            <h1>
                                {colorizeText(language === "es" ? "OBJETO SOCIAL 2024" : "CORPORATE PURPOSE 2024")}
                            </h1>
                            <p>
                                {language === "es"
                                ? "Ayudar a las personas con discapacidad o en situación de vulnerabilidad económica o social, a fortalecer las capacidades creativas, que favorezcan su inclusión social y laboral mejorando con ello sus condiciones de vida, con herramientas educativas y técnicas en artes y oficios como medio de cambio, para que puedan contribuir al desarrollo socioeconómico de la región y del país."
                                : "To help people with disabilities or in situations of economic or social vulnerability to strengthen their creative abilities, which favor their social and labor inclusion, thereby improving their living conditions, with educational and technical tools in arts and crafts as a means of change, so that they can contribute to the socioeconomic development of the region and the country."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
