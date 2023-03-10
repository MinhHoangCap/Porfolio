import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCards} from "swiper"
import "../css/resume.css"
import "swiper/css";
import "swiper/css/effect-cards";

export const Resume = () => {
  
  return (
    <div className='resume'>
      <div className="resume-heading">
        Resume
      </div>
      <div className="resume-content">
        
        <div className="education-experience">
          <div className="education__list">
            <div className="education__element">
              <div className="education__wrapper">

                <div className="education__year">2018-2023</div>
                <div className="education__occupation">Sofware Technology</div>
                <div className="education__university">Nha Trang University</div>
                <div className="education__content">
                  Content Content Content Content Content
                  Content Content Content Content Content
                  Content Content Content Content Content
                </div>
              </div>
            </div>
          </div>

        </div>
        

        <Swiper
          effect={"cards"} 
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="technology technology__html">

                  <div className="technology-icon ">
                    <i class="fa-brands fa-html5"></i>
                  </div>
                  <div className="technology__body">

                    <div className="technology__heading">
                      html
                    </div>
                    <div className="technology__content">
                      Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                    </div>
                  </div>
                

            </div>

            

            
          </SwiperSlide>
          <SwiperSlide>
            <div className="technology technology__css">

                  <div className="technology-icon ">
                    <i class="fa-brands fa-css3-alt"></i>
                  </div>
                  <div className="technology__body">

                    <div className="technology__heading">
                      css
                    </div>
                    <div className="technology__content">
                      Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                    </div>
                  </div>
                

            </div>

            

            
          </SwiperSlide>
          <SwiperSlide>
            <div className="technology technology__js">

                  <div className="technology-icon ">
                    <i class="fa-brands fa-js"></i>
                  </div>
                  <div className="technology__body">

                    <div className="technology__heading">
                      javascript
                    </div>
                    <div className="technology__content">
                      Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                    </div>
                  </div>
                

            </div>

            

            
          </SwiperSlide>
          <SwiperSlide>
            <div className="technology technology__react">

                  <div className="technology-icon ">
                    <i class="fa-brands fa-react"></i>
                  </div>
                  <div className="technology__body">

                    <div className="technology__heading">
                      react
                    </div>
                    <div className="technology__content">
                      Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                    </div>
                  </div>
                

            </div>

            

            
          </SwiperSlide>
        </Swiper>
        
      </div>
    </div>
  )
}
