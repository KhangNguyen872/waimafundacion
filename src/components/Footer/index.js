import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Divider } from 'primereact/divider';
import 'primeicons/primeicons.css';

export default function Footer() {
    return (
        <div className='footer-wrapper-primary'>
            <div className='footer-content-wrap grid-col-4'>
                <div>
                    <h1>WAIMA</h1>
                    <p>
                        Waima Foundation is dedicated to empowering communities through education, sustainable development, and social programs. We strive to create lasting change by supporting initiatives that uplift individuals and promote a brighter future for all.                    </p>
                </div>
                <div className='center-wrapper'>
                    <div className='foot-link-wrapper'>
                        <h1>Links</h1>
                        <div className='foot-link-repsonsive'>
                            <Link className='foot-link' to="/contactdashboard">About</Link>
                            <Link className='foot-link' to="/contactdashboard/DashBoardFAQ">Programs</Link>
                            <Link className='foot-link' to="/signin">Contacts</Link>
                            <Link className='foot-link' to="/signup">N/A</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Contacts</h1>
                    <p>Cl. 77 #45-28, Aranjuez, Medellín, Aranjuez, Medellín, Antioquia, Colombia</p>
                    <p>info@waimafundacion.org</p>
                    <p>+57 3137283858</p>
                </div>
                <div>
                    <h1 className='center-txt-768'>Socials</h1>
                    <div className='footer-interactive-wrapper'>
                        <Link className='footer-contact-interactive' target='_blank' to="https://www.instagram.com"><i className="pi pi-instagram" style={{ fontSize: '2.3rem' }}></i></Link>
                        <Link className='footer-contact-interactive' target='_blank' to="https://www.linkedin.com"><i className="pi pi-linkedin" style={{ fontSize: '2.3rem' }}></i></Link>
                        <Link className='footer-contact-interactive' target='_blank' to="https://www.facebook.com"><i className="pi pi-facebook" style={{ fontSize: '2.3rem' }}></i></Link>
                        <Link className='footer-contact-interactive' target='_blank' to="https://twitter.com"><i className="pi pi-twitter" style={{ fontSize: '2.3rem' }}></i></Link>
                    </div>
                </div>
                <Divider className='span-4 marginTop-2rem' />
                <p className="span-4 footer-copyright">© WAIMA Foundation - 2025</p>

            </div>
        </div>
    );
}
