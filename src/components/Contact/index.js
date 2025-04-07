import './index.scss'
import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { InputTextarea } from 'primereact/inputtextarea'
import MenubarLanding from '../MenubarLanding'
import emailjs from 'emailjs-com' // Import EmailJS

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [title, setTitle] = useState('') // New state for the email title
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en')

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem('lang') || 'en')
    }

    window.addEventListener('languageChange', handleLanguageChange)

    return () =>
      window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  const valuesColors = [
    '#8c458a',
    '#D9991E',
    '#9DAD2A',
    '#8c458a',
    '#D9991E',
    '#c3b8d8',
    '#8c458a',
    '#8c458a',
    '#D9991E',
    '#9DAD2A',
    '#8c458a',
    '#D9991E',
    '#c3b8d8',
    '#8c458a',
    '#D9991E',
    '#9DAD2A',
    '#8c458a',
    '#D9991E',
    '#c3b8d8',
    '#8c458a',
    '#D9991E',
    '#8c458a',
    '#c3b8d8',
  ]

  const colorizeText = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        style={{ color: valuesColors[index % valuesColors.length] }}
      >
        {char}
      </span>
    ))
  }

  
  const sendEmail = (e) => {
    e.preventDefault()

    if (!name || !email || !title || !message) {
      alert('Please fill in all fields.')
      return
    }

    emailjs
      .send(
        'service_p9n87d8', // Replace with your EmailJS service ID
        'template_6x53qri', // Replace with your EmailJS template ID
        {
          name: name,
          email: email,
          title: title, // Include the title in the email template
          message: message,
        },
        '5-rupsDGDMeVK71OR' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!')
          setName('')
          setEmail('')
          setTitle('') // Clear the title field
          setMessage('')
        },
        (error) => {
          alert('An error occurred. Please try again.')
        }
      )
  }

  return (
    <div>
      <MenubarLanding />
      <div className="contact-wrapper-primary">
        <div className="contact-content-wrapper">
          <div className="contact-header-wrap">
            <h1>
              {language === 'es'
                ? colorizeText('CONTACTA CON NOSOTROS!')
                : colorizeText('Contact Us')}
            </h1>
            <div className="contact-info-wrap">
              <p>
                {language === 'es' ? 'Correo' : 'Email'}: info@waimafundacion.org
              </p>
              <p>{language === 'es' ? 'Celular' : 'Phone'}: +57 3137283858</p>
            </div>
          </div>
          <form className="contact-form-wrapper" onSubmit={sendEmail}>
            <div>
              <h1>{language === 'es' ? 'Nombre' : 'Your Name'}</h1>
              <InputText
                className="contact-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <h1>
                {language === 'es' ? 'Tu correo electrónico' : 'Your Email'}
              </h1>
              <InputText
                className="contact-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <h1>{language === 'es' ? 'Título' : 'Title'}</h1> {/* New Title Field */}
              <InputText
                className="contact-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <h1>{language === 'es' ? 'Mensaje' : 'Your Message'}</h1>
              <InputTextarea
                className="contact-textarea"
                style={{ width: '70%', height: '10rem' }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="contact-button-wrapper">
              <Button
                label={language === 'es' ? 'Enviar' : 'Submit'}
                className="contact-button"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}