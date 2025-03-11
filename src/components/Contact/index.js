import './index.scss'
import React, { useState,useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import './index.scss';
import MenubarLanding from "../MenubarLanding"
import { InputTextarea } from "primereact/inputtextarea";
import { Divider } from 'primereact/divider';

export default function Contact () {
    const [value, setValue] = useState('');

    const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(localStorage.getItem("lang") || "en");
        };

        window.addEventListener("languageChange", handleLanguageChange);

        return () => window.removeEventListener("languageChange", handleLanguageChange);
    }, []);

    const valuesColors = [
        "#8c458a", "#D9991E", "#9DAD2A", "#8c458a", "#D9991E", "#767EB5", "#8c458a",  
        "#8c458a", "#D9991E", "#9DAD2A", "#8c458a", "#D9991E", "#767EB5", "#8c458a",  
        "#D9991E", "#9DAD2A", "#8c458a", "#D9991E", "#767EB5", "#8c458a", "#D9991E", "#8c458a", "#767EB5"
        ];    
    
    const colorizeText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} style={{ color: valuesColors[index % valuesColors.length] }}>{char}</span>
        ));
    };

    return (
        <div>
            <MenubarLanding />
            <div className='contact-wrapper-primary'>
                <div className='contact-content-wrapper'>
                    <div className='contact-header-wrap'>
                        <h1>{language == "es" ? colorizeText("Contacta con nosotras!") : colorizeText("Contact Us")}</h1>
                        <div className='contact-info-wrap'>
                            <p>{language == "es" ? "Correo" : "Email"}: info@waimafundacion.org</p>
                            <p>{language == "es" ? "Celular" : "Phone"}: +57 3137283858</p>
                        </div>
                    </div>
                    <div className='contact-form-wrapper'>
                        <div>
                            <h1>{language == "es" ? " nombre" : "Your Name"}</h1>
                            <InputText  className='contact-input'/>
                        </div>
                        <div>
                            <h1>{language == "es" ? "Your Email" : "Tu correo electrónico"}</h1>
                            <InputText className='contact-input'/>
                        </div>
                        <div>
                            <h1>{language ? "Mensaje" : "Your Message"}</h1>
                            <InputTextarea className="contact-textarea" style={{width:"70%", height: "10rem"}}  value={value} onChange={(e) => setValue(e.target.value)} />
                        </div>
                        <div className='contact-button-wrapper'>
                            <Button label={language == "es" ? "enviar" : "Submit"} className='contact-button' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}