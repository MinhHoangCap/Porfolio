import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/aboutme.css'

export const AboutMe = () => {
  const infomation = {
    name: 'Cap Minh Hoang',
    age: 23,
    email: "minhhoangcap@gmail.com"

  }
  return (
    <div id='about-me' className="about-me__wrapper">

      <div className='about-me'>
          <div className="about-me__header">
      

            <h3>Know me More</h3>
            
          </div>
          <div className="about-me__banner">
          <p className="about-me__banner-text">About Me</p>
          
          
        </div>
        
      </div>
        <div className="about-me__contents ">
          

            <Container>
              <Row>
                <Col xs={12} md={8} className="about-me__introduce">
                  Tôi là một ứng viên đầy nhiệt huyết và đam mê về lập trình Frontend. Tôi rất mong muốn có cơ hội được gia nhập vào đội ngũ intern của công ty và học hỏi từ các chuyên gia trong ngành.

                  Tôi đã tích lũy được kinh nghiệm làm việc trong lĩnh vực Frontend qua các dự án cá nhân và các khóa học trực tuyến. Tôi có kiến thức vững vàng về HTML, CSS và JavaScript cũng như các thư viện và framework phổ biến như React, Bootstrap, Swiper. Tôi cũng đã tham gia vào việc phát triển các trang web đáp ứng và có khả năng tương tác cao.

                  Ngoài ra, tôi có khả năng làm việc độc lập và trong nhóm, cùng với khả năng phân tích và giải quyết các vấn đề kỹ thuật. Tôi cũng có khả năng học hỏi và thích thú với các công nghệ mới và sẵn sàng áp dụng chúng vào công việc.
                </Col>
                <Col xs={12} md={4} className="resume-infomation">
                <ul className='resume__list'>
                  <li className='resume__item name-box'>
                    <p>Name: {infomation.name}</p>
                  </li>
                  <li className='resume__item email-box'>
                    <p>Email: {infomation.email}</p>
                  </li>
                  <li className='resume__item age-box'>
                    <p>Age: {infomation.age}</p>
                  </li>
              </ul>
                </Col>
              </Row>
            </Container>
          
          </div>
        
    </div>
    
  )
}
