import React from 'react'
import proyect1 from '../img/project-1.png'
import proyect2 from '../img/project-2.jpg'
import protect3 from '../img/project-3.jpg'
import proyect4 from '../img/project-4.jpg'

const Project = () => {
    return (
        <section className="section-3" id="section-3">
            <h1 className="section-heading section-3-heading">Mis Proyectos</h1>
            <div className="projects-wrapper center">
                    <div className="project">
                        <div className="project-text">
                            <h2 className="project-name">Mdlinks Hunter</h2>
                            <h4 className="project-description">Librería para analizar los enlaces existentes en un archivo con extensión ".md"</h4>
                            <h4 className="project-technologies">Nodejs / Javascript</h4>
                        </div>
                        <img src={proyect4} alt="proyecto4" className="project-img" />
                        <a
                        href="https://www.npmjs.com/package/markdown-links-hunter"
                        className="project-link"
                        rel="noopener noreferrer"
                        >NPMJS</a>
                    </div>
                
                    <div className="project">
                        <div className="project-text">
                            <h2 className="project-name">Burger Queen</h2>
                            <h4 className="project-description">Sistema de toma de pedidos, donde el mesero puede tomar el pedido de los clientes y enviarlos a la cocina</h4>
                            <h4 className="project-technologies">HTML /CSS / JS / React /Firebase /Boostrap</h4>
                        </div>
                        <img src={proyect1} alt="proyecto1" className="project-img" />
                        <a
                        href="https://wizardly-borg-d4b9f8.netlify.app/"
                        className="project-link"
                        rel="noopener noreferrer"
                        >Demo</a>
                    </div>
                    <div className="project">
                        <div className="project-text">
                            <h2 className="project-name">"La Picá del Viajero"</h2>
                            <h4 className="project-description">Red Social para compartir y recomendar tus experiencias de viajes por Chile</h4>
                            <h4 className="project-technologies">HTML /CSS /JS/Firebase</h4>
                        </div>
                        <img src={proyect2} alt="proyecto2" className="project-img" />
                        <a
                        href="https://picadelviajero.web.app/#/login"
                        className="project-link"
                        rel="noopener noreferrer"
                        >Demo</a>
                        
                    </div>
                    <div className="project">
                        <div className="project-text">
                            <h2 className="project-name">Datalovers Harry Potter</h2>
                            <h4 className="project-description">Encuentra tus personajes favoritos y conoce un poco más de ellos</h4>
                            <h4 className="project-technologies">HTML / CSS / JS</h4>
                        </div>
                        <img src={protect3} alt="proyecto3" className="project-img" />
                        <a
                        href="https://nathaliachn.github.io/SCL013-data-lovers/src/index.html"
                        className="project-link"
                        rel="noopener noreferrer"
                        >Demo</a>

                    </div>

            </div>
      </section> 
    )
}

export default Project
