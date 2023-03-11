import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'
const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
            <article className="service">
                    <div className="service__head"><h3>Android App Development</h3></div>

                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Webview App For Your Website
                            </p>    
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Android App using React Native
                            </p>    
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Android App Using Flutter
                            </p>    
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Create App With ADMOB
                            </p>    
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Custom Android Application
                            </p>    
                        </li>
                    </ul>                    
                </article>
                {/* END OF UI/UX */}
                <article className="service">
                    <div className="service__head"><h3>Web Design And Development</h3></div>

                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Full Website Creation
                            </p>    
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Responsive Landing Page
                            </p>    
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Learning Management System
                            </p>    
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                E-Commerce Website
                            </p>    
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Custom Website For You
                            </p>    
                        </li>
                        
                    </ul>                    
                </article>
                <article className="service">
                    <div className="service__head"><h3>Windows Application Development</h3></div>

                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Python Bots, Scripts, Automate job
                            </p>    
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Application For Your Website
                            </p>    
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>
                                Custom Application
                            </p>    
                        </li>
                        
                    </ul>                    
                </article>

            </div>
        </section>
    )
}

export default Services
