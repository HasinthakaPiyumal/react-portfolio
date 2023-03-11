import React from 'react'
import './testmonials.css'
import AVTR1 from '../../assests/avatar1.jfif'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name:'No Name',
        review:'No Comment'
    },
    {
        avatar: AVTR1,
        name:'No Name',
        review:'No Comment'
    },
    {
        avatar: AVTR1,
        name:'No Name',
        review:'No Comment'
    },
]

const Testmonials = () => {
    return (
        <section id="testmonials">
            <h5>Review From Clients</h5>
            <h2>Testmonials</h2>

            <Swiper className="container testmonials__container" 
            // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                
                {
                    data.map(({avatar,name,review})=>{
                        return(
                            <SwiperSlide className="testmonials">
                               <div className="client__avatar">
                                    <img src={avatar} alt="AVT 1"/>                        
                                </div>
                                <h5 className="clients__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
               
            </Swiper>
        </section>
    )
}

export default Testmonials
