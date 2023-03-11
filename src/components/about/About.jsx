import React from 'react'
import './about.css'
import ME from '../../assests/profile.png'
import {FaAward} from 'react-icons/fa' 
import {FiUsers} from 'react-icons/fi' 
import {VscFolderActive} from 'react-icons/vsc' 

const about = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Me"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>                            
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>0+ worldwide</small>                            
                        </article>

                        <article className="about__card">
                            <VscFolderActive className="about__icon"/>
                            <h5>Projects</h5>
                            <small>1+ Completed</small>                            
                        </article>
                    </div>

                    <p>
                    Hello there! My name is Hasinthaka Piyumal Senanayaka. Lives in sri lanka. Now I'm 20 years old.
                    <br/>
                    <br/>

                    I'm a Full stack developer. Web development is my center of interest. I enjoy building everything from small business sites to rich interactive web apps.
                    <br/>
                    <br/>
                    Please feel free to contact me for more information.
                    </p>
                    <a href="#contact" class='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default about
