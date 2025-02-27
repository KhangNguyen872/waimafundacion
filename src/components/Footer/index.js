import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Divider } from 'primereact/divider';
import 'primeicons/primeicons.css';

export default function Footer() {
    const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(localStorage.getItem("lang") || "en");
        };

        window.addEventListener("languageChange", handleLanguageChange);
        return () => window.removeEventListener("languageChange", handleLanguageChange);
    }, []);

    return (
        <div className='footer-wrapper-primary'>
            <div className='footer-content-wrap grid-col-4'>
                <div>
                    <h1>WAIMA</h1>
                    <p>
                        {language === "es"
                            ? "La Fundación Waima se dedica a empoderar comunidades a través de la educación, el desarrollo sostenible y los programas sociales. Nos esforzamos por crear un cambio duradero apoyando iniciativas que eleven a las personas y promuevan un futuro mejor para todos."
                            : "Waima Foundation is dedicated to empowering communities through education, sustainable development, and social programs. We strive to create lasting change by supporting initiatives that uplift individuals and promote a brighter future for all."
                        }
                    </p>
                </div>
                <div className='center-wrapper'>
                    <div className='foot-link-wrapper'>
                        <h1>{language === "es" ? "Enlaces" : "Links"}</h1>
                        <div className='foot-link-repsonsive'>
                            <Link className='foot-link' to="/contactdashboard">{language === "es" ? "Acerca de" : "About"}</Link>
                            <Link className='foot-link' to="/contactdashboard/DashBoardFAQ">{language === "es" ? "Programas" : "Programs"}</Link>
                            <Link className='foot-link' to="/signin">{language === "es" ? "Contactos" : "Contacts"}</Link>
                            <Link className='foot-link' to="/signup">{language === "es" ? "N/A" : "N/A"}</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>{language === "es" ? "Contactos" : "Contacts"}</h1>
                    <p>Cl. 77 #45-28, Aranjuez, Medellín, Aranjuez, Medellín, Antioquia, Colombia</p>
                    <p>info@waimafundacion.org</p>
                    <p>+57 3137283858</p>
                </div>
                <div>
                    <h1 className='center-txt-768'>{language === "es" ? "Redes Sociales" : "Socials"}</h1>
                    <div className='footer-interactive-wrapper'>
                        <Link className='footer-contact-interactive' target='_blank' to="https://www.instagram.com"><i className="pi pi-instagram" style={{ fontSize: '2.3rem' }}></i></Link>
                        <Link className='footer-contact-interactive' target='_blank' to="https://www.linkedin.com"><i className="pi pi-linkedin" style={{ fontSize: '2.3rem' }}></i></Link>
                        <Link className='footer-contact-interactive' target='_blank' to="https://www.facebook.com"><i className="pi pi-facebook" style={{ fontSize: '2.3rem' }}></i></Link>
                        <Link className='footer-contact-interactive' target='_blank' to="https://twitter.com"><i className="pi pi-twitter" style={{ fontSize: '2.3rem' }}></i></Link>
                    </div>
                </div>  
                <Divider className='span-4 marginTop-2rem' />
                <p className="span-4 footer-copyright">© WAIMA {language == "es" ? "Fundacion" : "Foundation"} - 2025</p>
            </div>
        </div>
    );
}
