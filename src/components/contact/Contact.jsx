import React from 'react'
import './contact.css'
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
const contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option-icon"/>
                        <h4>E Mail</h4>
                        <h5>hasinthakapiyumal@gmail.com</h5>
                        <a href="mailto:hasinthakapiyumal@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine  className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Hasinthaka Piyumal Senanayaka</h5>
                        <a href="https://m.me/hasi.piyumal">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <AiOutlineWhatsApp  className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+94 763215389</h5>
                        <a href="https://wa.me/+94763215389">Send a message</a>
                    </article>
                </div>
                {/* END CONTACT OPTION */}
                <form action="" method="post">
                    <input type="text" name="name" id="" placeholder="Yout Full Name" required/>
                    <input type="email" name="email" id="" placeholder="Your Email" required/>
                    <textarea name="message" id="" placeholder="Your Message" rows="7" required></textarea>
                    <input type="submit" className="btn btn-primary" value="Send Message"/>
                </form>
            </div>
        </section>
    )
}

export default contact
