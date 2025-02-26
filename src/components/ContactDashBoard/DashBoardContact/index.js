import './index.scss';
import { Tag } from 'primereact/tag';
import logo from '../../../assets/img/logo3.png';
import { FaAward, FaMedal, FaTrophy, FaStar } from "react-icons/fa"; // Importing icons
import { Divider } from 'primereact/divider';
import { Card } from "primereact/card";

/**
 * DashBoardContact Component
 * 
 * This component displays the SkillBridge team members, their roles, 
 * skills, and contact details. It includes portraits, descriptions, 
 * and tags representing technical expertise.
 */
export default function DashBoardContact() {

    const awards = [
        { title: "PREMIO Capacidades para la vida 2015", icon: <FaAward />, color: "bg-blue-500" },
        { title: "RECONOCIMIENTO Titanes Caracol 2015", icon: <FaMedal />, color: "bg-green-500" },
        { title: "RECONOCIMIENTO Fundación Biblioseo 2016", icon: <FaTrophy />, color: "bg-yellow-500" },
        { title: "PREMIO Gestores de Innovación 2017, Ruta N", icon: <FaStar />, color: "bg-red-500" },
      ];

      const colors = ["#3F4581", "#D9991E", "#9DAD2A", "#3F4581", "#D9991E","#767EB5"];

    
    const specialAward = {
        title: "PREMIO Héroes como Vos 2018, Secretaría de Cultura – Alcaldía de Medellín",
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
                    <h1>Meet Our Team Here at Waima Foundation</h1>
                </div>
            </div>

            <div className="contact-AboutCard-wrapper">
                <div className="contact-CardText-wrap">
                    <h1>About Us</h1>
                    <p>
                        La Fundación WAIMA, es una entidad sin ánimo de lucro, ubicada en la ciudad de Medellín, Colombia, dedicada a buscar el desarrollo humano de personas con discapacidad, enfermedades crónicas y víctimas del conflicto y cuidadores, con el propósito de mejorar la calidad de vida a través de un enfoque de emprendimiento, productividad y proyecto de vida.
                        <br /><br />
                        El trabajo de waima inicia en el año 2013 buscando diversas alternativas de empleo para esta población; en dichos inicios el trabajo se traslada a las casas de estas personas, con el fin de brindarles las facilidades de movilidad, para que de esta manera, lograran desempeñar las labores de manualidades propuestas por la fundación.
                        <br /><br />
                        A partir de la experiencia de vida de ambos, y de afrontar una enfermedad y la discapacidad deciden crear esta fundación que busca ayudar a personas que como ellos se enfrenta a una condición diferente, a través de diversas actividades como capacitación proyecto de vida, en artes manuales y emprendimiento. Oficialmente, la fundación fue constituida legalmente en mayo de 2016 por Claudia Lorena Pareja Osorio quien tiene una enfermedad crónica y Guillermo León Morales Múnera, con discapacidad física.
                    </p>
                </div>
                
                <div className="contact-skills span-2">
                    <div className="contact-tags">
                        <Tag className="tag" value="Nonprofit" style={{backgroundColor: colors[0 % colors.length]}}/>
                        <Tag className="tag" value="Support" style={{backgroundColor: colors[1 % colors.length]}}/>
                        <Tag className="tag" value="Community" style={{backgroundColor: colors[2 % colors.length]}}/>
                        <Tag className="tag" value="Social Justice" style={{backgroundColor: colors[3 % colors.length]}}/>
                        <Tag className="tag" value="Health" style={{backgroundColor: colors[4 % colors.length]}}/>
                        <Tag className="tag" value="Development" style={{backgroundColor: colors[5 % colors.length]}}/>
                    </div>
                </div>

                <Divider className='span-2' />

                <div className="contact-CardText-wrap">
                    <div className='grid-2'>
                        <div>
                            <h1>Mission</h1>
                            <p>
                                Nuestra misión fundamental es promover procesos de inclusión y justicia social que mejoren la vida, a personas en situación de discapacidad, a niños, niñas y jóvenes que se encuentren en situación de vulnerabilidad económica, social, física, intelectual y emocional, fortaleciendo sus capacidades creativas, su desarrollo personal y el fortalecimiento de sus habilidades y competencias sociolaborales.
                            </p>
                        </div>
                        <div>
                            <h1>Vision</h1>
                            <p>
                                En el año 2033, la Fundación Waima será sostenible, y reconocida a nivel regional y nacional como una entidad incluyente y de impacto social, a través de la ejecución de proyectos sociales y productivos, construidos de forma autónoma y en alianza con otras entidades.
                            </p>
                        </div>
                    </div>
                </div>
                <Divider className='span-2' />

                <div className="achievement-container-primary">
                    <h2 className="">🏆 RECONOCIMIENTOS</h2>

                    <div className="achievement-card-grid">
                        {awards.map((award, index) => (
                        <Card key={index} style={{backgroundColor: colors[index % colors.length]}}>
                            <span style={{marginRight:"5px", color:"white"}}>{award.icon}</span>
                            <span style={{color:"white"}}>{award.title}</span>
                        </Card>
                        ))}
                        <div></div>
                        <Card className='span-4' style={{backgroundColor: "#767EB5"}}>
                            <span style={{marginRight:"5px", color:"white"}}>{specialAward.icon}</span>
                            <span style={{color:"white"}}>{specialAward.title}</span>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
