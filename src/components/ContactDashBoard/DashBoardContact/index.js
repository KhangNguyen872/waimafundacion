import './index.scss';
import { Tag } from 'primereact/tag';
import logo from '../../../assets/img/logo3.png';
import { FaAward, FaMedal, FaTrophy, FaStar } from "react-icons/fa"; // Importing icons
import { Divider } from 'primereact/divider';
import { Card } from "primereact/card";
import { useEffect, useState } from 'react';

/**
 * DashBoardContact Component
 * 
 * This component displays the SkillBridge team members, their roles, 
 * skills, and contact details. It includes portraits, descriptions, 
 * and tags representing technical expertise.
 */
export default function DashBoardContact() {
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

      const colors = ["#3F4581", "#D9991E", "#9DAD2A", "#3F4581", "#D9991E","#767EB5","#3F4581"];
      const letters = "WAIMA".split("");
      const missionColors = ["#3F4581", "#D9991E", "#9DAD2A", "#9DAD2A", "#D9991E","#767EB5","#3F4581"];
      const missionLetters = "Mission".split("");
      const visionColors = ["#3F4581", "#D9991E", "#9DAD2A", "#D9991E", "#767EB5","#3F4581"];
      const visionLetters = "Vision".split("");

    
      const specialAward = {
        title: language === "es" 
            ? "PREMIO Héroes como Vos 2018, secretaria de cultura – Alcaldía de Medellín" 
            : "Heroes Like You Award 2018, Ministry of Culture – Mayor’s Office of Medellín",
        icon: <FaStar />,
    };
    return (
        <div className="DashBoard-ContactWrapper-Primary">
            <div className="contact-introHeader-wrap">
                <div>
                    <img src={logo} />
                </div>
                <Divider className="span-2" />
                <div className="span-2">
                    <h1>
                        {language === "es" ? "Conoce a nuestro equipo en" : "Meet Our Team Here at"}
                        <span className='pad-10'>
                            {letters.map((letter, index) => (
                                <span key={index} style={{ color: colors[index] }}>
                                    {letter}
                                </span>
                            ))}
                        </span>
                        {language === "es" ? "Fundación" : "Foundation"}
                    </h1>
                </div>
            </div>

            <div className="contact-AboutCard-wrapper">
                <div className="contact-CardText-wrap">
                    <h1>{language === "es" ? "Sobre Nosotros" : "About Us"}</h1>
                    <p>
                        {language === "es" 
                            ? "La Fundación WAIMA es una organización sin ánimo de lucro ubicada en Medellín, Colombia, dedicada al desarrollo humano de personas con discapacidad, enfermedades crónicas, víctimas del conflicto y cuidadores, con el propósito de mejorar su calidad de vida a través del emprendimiento, la productividad y proyectos de vida."
                            : "The WAIMA Foundation is a non-profit organization located in Medellin, Colombia, dedicated to seeking the human development of people with disabilities, chronic illnesses, victims of conflict, and caregivers, with the purpose of improving their quality of life through entrepreneurship, productivity, and life projects."
                        }
                        <br /><br />
                        {language === "es" 
                            ? "El trabajo de waima inicia en el año 2013 buscando diversas alternativas de empleo para esta población; en dichos inicios el trabajo se traslada a las casas de estas personas, con el fin de brindarles las facilidades de movilidad, para que de esta manera, lograran desempeñar las labores de manualidades propuestas por la fundación."
                            : "WAIMA's work began in 2013 looking for various employment alternatives for this population; in those beginnings, the work was transferred to the homes of these people, in order to provide them with mobility facilities, so that in this way, they could carry out the craft work proposed by the foundation."
                        }
                        <br /><br />
                        {language === "es"
                        ?    "A partir de la experiencia de vida de ambos, y de afrontar una enfermedad y la discapacidad deciden crear esta fundación que busca ayudar a personas que como ellos se enfrenta a una condición diferente, a través de diversas actividades como capacitación proyecto de vida, en artes manuales y emprendimiento. Oficialmente, la fundación fue constituida legalmente en mayo de 2016 por Claudia Lorena Pareja Osorio quien tiene una enfermedad crónica y Guillermo León Morales Múnera, con discapacidad física."
                        : "Based on the life experience of both, and facing an illness and disability, they decided to create this foundation that seeks to help people who, like them, face a different condition, through various activities such as life project training, in manual arts and entrepreneurship. Officially, the foundation was legally established in May 2016 by Claudia Lorena Pareja Osorio, who has a chronic illness, and Guillermo León Morales Múnera, who has a physical disability."}                
                    </p>
                </div>
                
                <div className="contact-skills span-2">
                    <div className="contact-tags">
                        <Tag className="tag" value={language == "es" ? "No Lucrativo" : "Nonprofit"} style={{backgroundColor: colors[0 % colors.length]}}/>
                        <Tag className="tag" value={language == "es" ? "Apoyo" : "Support"} style={{backgroundColor: colors[1 % colors.length]}}/>
                        <Tag className="tag" value={language == "es" ? "Comunidad" : "Community"} style={{backgroundColor: colors[2 % colors.length]}}/>
                        <Tag className="tag" value={language =="es" ? "Justicia social" : "Social Justice"} style={{backgroundColor: colors[3 % colors.length]}}/>
                        <Tag className="tag" value={language == "es" ? "Salud" : "Health"} style={{backgroundColor: colors[4 % colors.length]}}/>
                        <Tag className="tag" value={language == "es" ? "Desarrollo" : "Development"} style={{backgroundColor: colors[5 % colors.length]}}/>
                    </div>
                </div>

                <Divider className='span-2' />

                <div className="contact-CardText-wrap">
                    <div className='grid-2'>
                        <div>
                            <h1>
                                {missionLetters.map((letter, index) => (
                                    <span key={index} style={{ color: missionColors[index] }}>
                                        {letter}
                                    </span>
                                ))}
                            </h1>
                            <p>
                                {language === "es"
                                ? "Desarrollar habilidades competitivas y productivas a personas con discapacidad, enfermedades crónicas, víctimas del conflicto y cuidadores, a través de la capacitación en técnicas, artes y oficios, con el fin de aportar a la generación de condiciones que faciliten su inclusión social y fortalecimiento de su calidad de vida."
                                : "Our fundamental mission is to promote processes of inclusion and social justice that improve the lives of people with disabilities, children and young people who are in a situation of economic, social, physical, intellectual and emotional vulnerability, strengthening their creative capacities, their personal development and the reinforcement of their social and labour skills and competencies."}
                            </p>
                        </div>
                        <div>
                            <h1>
                                {visionLetters.map((letter, index) => (
                                    <span key={index} style={{ color: visionColors[index] }}>
                                        {letter}
                                    </span>
                                ))}
                            </h1>
                            <p>
                                {language === "es"
                                ? "En el año 2020, la Fundación Waima será sostenible, y posicionada a nivel regional como una entidad incluyente, a través de la ejecución de proyectos sociales y productivos, construidos de forma autónoma y en alianza con otras entidades."
                                :   "By 2033, the Waima Foundation will be sustainable and recognized at regional and national levels as an inclusive entity with social impact, through the execution of social and productive projects, built autonomously and in alliance with other entities."}
                            </p>
                        </div>
                    </div>
                </div>
                <Divider className='span-2' />

                <div className="achievement-container-primary">
                    <h2 className="">🏆 {language == "es" ? "RECONOCIMIENTOS": "RECOGNITION"}</h2>

                    <div className="achievement-card-grid">
                        {awards.map((award, index) => (
                        <Card key={index} style={{backgroundColor: colors[index % colors.length]}}>
                            <span style={{marginRight:"5px", color:"white"}}>{award.icon}</span>
                            <span style={{color:"white"}}>{award.title}</span>
                        </Card>
                        ))}
                        <div></div>
                        <Card className='span-2' style={{backgroundColor: "#767EB5"}}>
                            <span style={{marginRight:"5px", color:"white"}}>{specialAward.icon}</span>
                            <span style={{color:"white"}}>{specialAward.title}</span>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
