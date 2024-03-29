import React from 'react'
import './portfolio.css'

import IMG1 from '../../assests/portfolio1.webp'
import IMG2 from '../../assests/portfolio2.webp'
import IMG3 from '../../assests/portfolio3.webp'

const data = [
    {
        id:1,
        image: IMG1,
        title: 'No App',
        github: '#',
        demo:'#'
    },
    {
        id:1,
        image: IMG1,
        title: 'No App',
        github: '#',
        demo:'#'
    },
    {
        id:1,
        image: IMG1,
        title: 'No App',
        github: '#',
        demo:'#'
    },
]
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo})=>{
                        return(
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt=""/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                <a href={github} className='btn'>Github</a>
                                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                                </div>
                    
                             </article> 
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
