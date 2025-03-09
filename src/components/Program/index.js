import MenubarLanding from "../MenubarLanding"
import { Divider } from 'primereact/divider';
import React, { useState, useEffect } from "react";
import "./index.scss"
import DSC_0010 from "../../assets/img/DSC_0010.jpg"
import DSC_0079 from "../../assets/img/DSC_0079.jpg"
import IMG_0106 from "../../assets/img/IMG_0106.jpg"
import DSC_0103 from "../../assets/img/DSC_0103.jpg"
import IMG_0052 from "../../assets/img/IMG_0052.jpg"
import IMG_0101 from "../../assets/img/IMG_0101.jpg"
import DSC_0013 from "../../assets/img/DSC_0013.jpg"
import DSC_0018 from "../../assets/img/DSC_0018.jpg"
import _DSC0130 from "../../assets/img/_DSC0130.jpg"
import { Dialog  } from 'primereact/dialog';
import { Button } from 'primereact/button'; 

export default function Program() {
    const [visible, setVisible] = useState(false);
    const images = [DSC_0010, DSC_0079, IMG_0106, DSC_0103, IMG_0101, DSC_0013,IMG_0052,DSC_0018,_DSC0130]

      const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");
    
      useEffect(() => {
            const handleLanguageChange = () => {
                setLanguage(localStorage.getItem("lang") || "en");
            };
    
            window.addEventListener("languageChange", handleLanguageChange);
    
            return () => window.removeEventListener("languageChange", handleLanguageChange);
        }, []);

    return (
        <div>
            <MenubarLanding />
            <div className="program-container-primary">
                <div className="program-container-secondary">
                    <div className="program-title span-2">
                        <h2>{language == "es" ? "Programas" : "Programs"}</h2>
                    </div>
                    <div>
                        <h1>{language == "en" ? "Learning without barriers" : "Aprendiendo sin barreras"}</h1>
                        <p>{language == "en" ? "Promotion of activities consisting of craft workshops, motivational talks and various training sessions, which seek to develop their creative and productive capacities, oriented towards a projection of social and/or productive entrepreneurship and the social inclusion of the participants." : "Promoción de actividades compuestas por talleres artesanales, charlas motivacionales y diversas capacitaciones, que buscan el desarrollo de sus capacidades creativas y productivas, orientadas a una proyección de emprendimiento social y/o productivo y la inclusión social de los participantes."}</p>
                    </div>
                    <div>
                        <img src={IMG_0106}></img>
                    </div>
                    <Divider className="span-2" />
                    <div>
                        <img src={DSC_0010}></img>
                    </div>
                    <div>
                        <h1>{language == "en" ? "Health & Wellness" : "Salud & Bienestar"}</h1>
                        <p>  {language == "en" ? "Waima seeks to provide recreational spaces, integration activities, promotion and prevention in physical and mental health to improve the quality of life of beneficiaries." : "Waima busca propiciar espacios recreativos, actividades de integración, promoción y prevención en salud física y mental para el mejoramiento de la calidad de vida de los beneficiarios. "}
                        </p>
                    </div>
                    <Divider className="span-2" />
                    <div>
                        <h1>{language == "en" ? "Bread and Love" : "Pan y Amor"}</h1>
                        <p> {language == "en" ? "We aim to contribute to the nutrition of our beneficiaries by providing food packages and lunch to children who attend extracurricular classes." : "Se busca aportar a la nutrición de nuestros beneficiarios con la entrega de paquetes alimentarios y entrega de almuerzo a los niños que asisten a las clases extracurriculares. "}
                        </p>
                    </div>
                    <div>
                        <img src={DSC_0079}></img>
                    </div>
                    <div>
                    <h1>{language == "en" ? "Bringing happiness to the countryside" : "Llevando felicidad al campo"}</h1>
                        <p>
                        {language == "en" ? "The aim is to carry out activities that improve the quality of life of rural children and youth through specific activities such as Christmas celebrations, distribution of school lists, Halloween, and country cinema, among others." : "Se busca llevar actividades que mejoren la calidad de vida de niños, niñas y jóvenes campesinos a través de actividades puntuales como la celebración de la navidad, entrega de listas escolares, halloween, y cine al campo entre otros."}
                        </p>
                    </div>
                    <div>
                        <h1>
                            {language == "en" ? "Keep it up" : "Avanza"}
                        </h1>
                        <p>
                        {language == "en" ? "To improve the financial autonomy of the Waima Foundation and its beneficiaries by establishing agreements and opportunities that allow for the provision of services, the generation of resources and the collection of donations." : "Mejorar la autonomía financiera de la Fundación Waima y la de sus beneficiarios, a partir de la consecución de convenios y oportunidades que permitan la prestación de servicios, la generación recursos y la captación de donaciones."}
                        </p>
                    </div>
                    <div className="span-2">
                        <Button label={language =="es" ? "Ves Mas" : "See More"} icon="pi pi-external-link" onClick={() => setVisible(true)} className="program-button" />
                        <Dialog header="Learn about us" visible={visible} style={{ width: '80vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                            <div className="dialog-box-container">
                                {images.map((image, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={image} alt="image" />
                                        </div>
                                    )
                                })}
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}