import React, { Fragment } from 'react'
/* import avatar2 from '../img/avatar2.png' */
import avatar3 from '../img/avatar3.jpg'
import icv from '../img/cv.png'  
import cv from '../img/CVGenesisAsteteAscencio2020.pdf'


const Aboutme = () => {
    return (
        <Fragment>
            <section className="section-2" id="SobreMi">
                <h1 className="section-heading section-2-heading">SOBRE MÍ</h1>
            <div className="cont-about">
                 {/* <div  className="about1"><img src={avatar3} alt="avatar" className="avatar2"/> </div>  */}
                <div  className="about2">
                    <div>
                <img src={avatar3} alt="avatar" className="photoC" /></div>
                <div className='cont-text'>
                    <p style={{width:'100%'}}>
                    Si estás aquí, quiere decir que algo te interesó. 
                    Así que aprovecho de contarte un poco sobre mí, cuando estaba en el 
                    liceo llegó el momento de elegir una carrera y sin dudarlo 
                    dije, quiero ser Ingeniera Informática, una carrera con mucho futuro,
                    donde podía desarrollarme y continuamente aprender y crear cosas nuevas. 
                    Luego de mucho esfuerzo y perseverancia "Lo logré, me titulé”. Fui Coordinadora de 
                    Informática y Enlaces de un Colegio, allí tuve 
                    la oportunidad de ser parte del programa de capacitación Lenguajes 
                    Digitales del Mineduc, donde di mis primeros pasos en la programación
                    realizando juegos en Scratch, con el entusiasmo de seguir aprendiendo 
                    postule a Laboratoria y quede en el programa, 
                    donde me he formado como Front-End Developer en Javascript 
                    con Reactjs, bajo la metodología Ágil, lideré mi autoaprendizaje y
                    tuve excelentes experiencias trabajando en equipo. Este es un camino que deseo seguir perfeccionado para llegar
                    a ser una gran desarrolladora.    
                    </p></div>
                    <div className="cv" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <a href={cv} download="CVGenesisAstete" ><img src={icv} className="play-btn" alt=""/></a>
                        <a href={cv} download="CVGenesisAstete" className="text-dw"style={{color:'black'}}>Descarga mi CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Aboutme
