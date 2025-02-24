import './index.scss';
import { Divider } from 'primereact/divider';
import React from 'react';
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

  const events = [
    { 
      title: 'The Beginning', 
      description: "Waima's work began in 2013, when they sought out various employment alternatives for people with disabilities, chronic illnesses, victims of conflict and caregivers. They sought opportunities that would allow people to work from home with crafts or outsourcing tasks and thus be able to provide their services without the mobility limitations that the world presented.", 
      icon: 'pi pi-flag', 
      color: '#9C27B0' 
    },
    { 
      title: 'Established!', 
      description: 'The Waima Foundation was legally established in May 2016 by Claudia Pareja Osorio, Guillermo León Morales Múnera, Luz Omaira Hernández Sampedro and Oliva Ligia Delgado Moreno. The founders, who have directly experienced the reality of disability and chronic illness, decided to create Waima with the purpose of helping people who, like them, face a different condition and with it the existing social obstacles;', 
      icon: 'pi pi-history', 
      color: '#3F4581' 
    },
    { 
      title: 'Ambitions', 
      description: 'full of hope, they seek to support through various activities such as training in manual arts, social entrepreneurship, empowerment and life projects, among others. In Waima, they seek that each of the participants can contribute regardless of their condition', 
      icon: 'pi pi-star', 
      color: '#D9991E' 
    },
    { 
      title: 'Delivered', 
      description: 'In its process, the Waima Foundation has been able to carry out support work for companies, this is how we can point out how in Wow Jeans, for example, the embroidery of rags that were sewn on fabric was carried out, forming figures as decoration for jeans. This work allowed forty people with disabilities and some caregivers to carry out the same and thereby generate income for their support.', 
      icon: 'pi pi-trophy', 
      color: '#607D8B' 
    },
    { 
      title: 'Goal', 
      description: 'Waima seeks to base the realization of its mission on the theory of the hierarchy of human needs scale of Maslow (annex 1) and from there it focuses on supporting its members in achieving the satisfaction of their needs, starting with the basic ones according to this theory up to those of self-development.', 
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
            <h2>Who?</h2>
            <p> 
            The WAIMA Foundation is a non-profit entity, located in commune 3 of the District of Medellín Colombia, its purpose is to help people with disabilities, children and young people, in situations of economic or social vulnerability, to strengthen creative capacities, which favor their social and labor inclusion, thereby improving their living conditions, with educational and technical tools in arts and crafts as a means of change, so that they can contribute to the socioeconomic development of the region and the country.  
            </p>
          </div>
          <div className='sec1-column2-wrap'>
            <div className='card bg-grey'>
              <h1>2.</h1>
              <h2>What do we do?</h2>
              <p className='pad-bottom-maxWidth768'> 
              Without promoting welfare, we seek to mitigate the inequality gap in the most vulnerable populations and seek strategies that allow us to improve the quality of life of our beneficiaries, through different programs, life skills, educational tools and techniques in arts and crafts as a means of change. The above in favor of overcoming situations of vulnerability that contribute to peace, to the socioeconomic development of the region and the country, allowing the empowerment of its territories, as well as generating sustainable spaces for the strengthening of the social fabric.
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
