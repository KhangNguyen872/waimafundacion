import './index.scss';
import { Divider } from 'primereact/divider';
import React, { useEffect, useState } from "react";
import saciar from "../../../assets/img/saciar.png"
import casa from "../../../assets/img/casa.png"
import logob from "../../../assets/img/logob.png"
import lianza from "../../../assets/img/lianza.png"
import logoa from "../../../assets/img/logoa.png"
import '../../../App.scss';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const CardSection = () => {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");


  useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(localStorage.getItem("lang") || "en");
        };

        window.addEventListener("languageChange", handleLanguageChange);

        return () => window.removeEventListener("languageChange", handleLanguageChange);
    }, []);
  
  const events = [
    { 
      title: language === "es" ? 'El Comienzo' : 'The Beginning', 
      description: language === "es" 
        ? "El trabajo de Waima comenzó en 2013, cuando buscaron diversas alternativas de empleo para personas con discapacidad, enfermedades crónicas, víctimas del conflicto y cuidadores. Buscaron oportunidades que permitieran a las personas trabajar desde casa con artesanías o tareas de subcontratación y así poder prestar sus servicios sin las limitaciones de movilidad que presentaba el mundo."
        : "Waima's work began in 2013, when they sought out various employment alternatives for people with disabilities, chronic illnesses, victims of conflict and caregivers. They sought opportunities that would allow people to work from home with crafts or outsourcing tasks and thus be able to provide their services without the mobility limitations that the world presented.",
      icon: 'pi pi-flag', 
      color: '#9C27B0' 
    },
    { 
      title: language === "es" ? '¡Establecido!' : 'Established!', 
      description: language === "es"
        ? "La Fundación Waima fue establecida legalmente en mayo de 2016 por Claudia Pareja Osorio, Guillermo León Morales Múnera, Luz Omaira Hernández Sampedro y Oliva Ligia Delgado Moreno. Los fundadores, que han experimentado directamente la realidad de la discapacidad y la enfermedad crónica, decidieron crear Waima con el propósito de ayudar a las personas que, como ellos, enfrentan una condición diferente y con ello los obstáculos sociales existentes."
        : "The Waima Foundation was legally established in May 2016 by Claudia Pareja Osorio, Guillermo León Morales Múnera, Luz Omaira Hernández Sampedro and Oliva Ligia Delgado Moreno. The founders, who have directly experienced the reality of disability and chronic illness, decided to create Waima with the purpose of helping people who, like them, face a different condition and with it the existing social obstacles.",
      icon: 'pi pi-history', 
      color: '#3F4581' 
    },
    { 
      title: language === "es" ? 'Ambiciones' : 'Ambitions', 
      description: language === "es"
        ? "Llenos de esperanza, buscan apoyar a través de diversas actividades como la formación en artes manuales, el emprendimiento social, el empoderamiento y los proyectos de vida, entre otros. En Waima, buscan que cada uno de los participantes pueda contribuir independientemente de su condición."
        : "Full of hope, they seek to support through various activities such as training in manual arts, social entrepreneurship, empowerment and life projects, among others. In Waima, they seek that each of the participants can contribute regardless of their condition.",
      icon: 'pi pi-star', 
      color: '#D9991E' 
    },
    { 
      title: language === "es" ? 'Entregado' : 'Delivered', 
      description: language === "es"
        ? "En su proceso, la Fundación Waima ha podido realizar trabajos de apoyo para empresas. Por ejemplo, en Wow Jeans se llevó a cabo el bordado de paños cosidos en tela, formando figuras decorativas para jeans. Este trabajo permitió a cuarenta personas con discapacidad y algunos cuidadores generar ingresos para su sustento."
        : "In its process, the Waima Foundation has been able to carry out support work for companies, this is how we can point out how in Wow Jeans, for example, the embroidery of rags that were sewn on fabric was carried out, forming figures as decoration for jeans. This work allowed forty people with disabilities and some caregivers to carry out the same and thereby generate income for their support.",
      icon: 'pi pi-trophy', 
      color: '#607D8B' 
    },
    { 
      title: language === "es" ? 'Meta' : 'Goal', 
      description: language === "es"
        ? "Waima busca basar la realización de su misión en la teoría de la jerarquía de necesidades humanas de Maslow y, desde allí, se enfoca en apoyar a sus miembros en la satisfacción de sus necesidades, comenzando con las básicas hasta las de auto-desarrollo."
        : "Waima seeks to base the realization of its mission on the theory of the hierarchy of human needs scale of Maslow and from there it focuses on supporting its members in achieving the satisfaction of their needs, starting with the basic ones according to this theory up to those of self-development.",
      icon: 'pi pi-check-circle', 
      color: '#9DAD2A' 
    }
  ];
  

  // Customize timeline markers with colors and icons
  const customizedMarker = (item) => {
    return (
      <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle shadow-1" 
        style={{ backgroundColor: item.color, width: '2rem',height: '2rem', fontSize: '1.5rem', padding: '0.5rem', borderRadius: '50%', color: 'white'}}>
        <i className={item.icon} style={{transform: "translate(0,-70%)"}}></i>
      </span>
    );
  };

  // Customize timeline content
  const customizedContent = (item) => {
    return (
      <Card title={item.title} subTitle={item.date} style={{borderLeft: `5px solid ${item.color}` }} className='timeline-card'>
        <p>{item.description}</p>
      </Card>
    );
  };

  return (
    <section className="index-2">
      <div className="page-content-wrapper-primary">
        <div className='sec1-wrapper-primary'>
          <div className='sec1-column-wrap'>
            <h1>1.</h1>
            <h2>
              {language === "es"
                ? "Quien?"
                : "Who?"}
            </h2>
            <p> 
              {language === "es"
                  ? "La Fundación WAIMA, es una entidad sin ánimo de lucro, ubicada en la comuna 3 del Distrito de Medellín Colombia, tiene como objeto, ayudar a las personas con discapacidad, niños, niñas y jóvenes, en situación de vulnerabilidad económica o social, a fortalecer las capacidades creativas, que favorezcan su inclusión social y laboral mejorando con ello sus condiciones de vida, con herramientas educativas y técnicas en artes y oficios como medio de cambio,  para que puedan contribuir al desarrollo socioeconómico de la región y del país.?"
                  : "The WAIMA Foundation is a non-profit entity, located in commune 3 of the District of Medellín Colombia, its purpose is to help people with disabilities, children and young people, in situations of economic or social vulnerability, to strengthen creative capacities, which favor their social and labor inclusion, thereby improving their living conditions, with educational and technical tools in arts and crafts as a means of change, so that they can contribute to the socioeconomic development of the region and the country."}        
            </p>
          </div>
          <div className='sec1-column2-wrap'>
            <div className='card bg-grey'>
              <h1>2.</h1>
              <h2>
                {language === "es"
                  ? "Que hacemos?"
                  : "What do we do?"}
              </h2>
              <p className='pad-bottom-maxWidth768'> 
                {language === "es"
                  ? "Sin promover el asistencialismo, buscamos mitigar la brecha de la desigualdad en las poblaciones más vulnerables y buscar estrategias que nos permitan mejorar la calidad de vida de nuestros beneficiarios, a través de diferentes programas, habilidades para la vida, herramientas educativas y técnicas en artes y oficios como medio de cambio. Lo anterior en pro de la superación de situación de vulnerabilidad que contribuya a la paz, al desarrollo socioeconómico de la región y del país, permitiendo el empoderamiento de sus territorios, así como generar espacios sostenibles para el fortalecimiento del tejido social."
                  : "Without promoting welfare, we seek to mitigate the inequality gap in the most vulnerable populations and seek strategies that allow us to improve the quality of life of our beneficiaries, through different programs, life skills, educational tools and techniques in arts and crafts as a means of change. The above in favor of overcoming situations of vulnerability that contribute to peace, to the socioeconomic development of the region and the country, allowing the empowerment of its territories, as well as generating sustainable spaces for the strengthening of the social fabric."}
              </p>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="bg-grey">
          <div className='header-wrapper-primary'>
            <div className='header-content'>
              <img src={saciar} alt="Partner 1"/>
              <img src={casa} alt="Partner 2"/>
              <img src={lianza} alt="Partner 3"/>
              <img src={logoa} alt="Partner 4"/>
              <img src={logob} alt="Partner 5"/>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className='sec2-wrapper-primary'>
          <div className='timeline-Container'>
            <Timeline
              value={events}
              align="alternate"
              className="customized-timeline"
              marker={customizedMarker}
              content={customizedContent}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
