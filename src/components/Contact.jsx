import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/contact.css"
export const Contact = () => {
  return (
    <div className='contact'>
      <Container>
        <Row>

          <Col sm={12} md={4}>
          
            <div className="contact__info">
              <div className="contact__heading">ADDRESS</div>
              <ul className="contact__list">
                <li className="contact__element">
                  
                    <div className="contact__icon"><i class="fa-solid fa-address-card"></i></div>
                    <div className="contact__infomation">123 Adresss,Str</div>
                </li>
                <li className="contact__element">
                  
                    <div className="contact__icon"><i class="fa-solid fa-phone"></i></div>
                    <div className="contact__infomation">0123456789</div>
               
                </li>
                <li className="contact__element">
              
                    <div className="contact__icon"><i class="fa-solid fa-fax"></i></div>
                    <div className="contact__infomation">0123456789</div>
            
                </li>
                <li className="contact__element">
            
                    <div className="contact__icon"><i class="fa-solid fa-envelope"></i></div>
                    <div className="contact__infomation">abc@gmail.com</div>
         
                </li>
              </ul>
            </div>

              <div className="contact__social">
                <div className="contact__heading">FOLLOW ME</div>
                <ul className="contact__social-list">
                  <li className="contact__social-element">
                    <i class="fa-brands fa-twitter"></i>
                  </li>
                  <li className="contact__social-element">
                    <i class="fa-brands fa-facebook"></i>
                  </li>
                  <li className="contact__social-element">
                  <i class="fa-brands fa-google"></i>
                  </li>
                  <li className="contact__social-element">
                  <i class="fa-brands fa-github"></i>
                  </li>
                </ul>
              </div>
          </Col>
          <Col sm={12} md={8}>
            <form action="post" className="send-note">
              <div className="contact__heading">
                SEND US A NOTE
              </div>
              <ul className="form__inputs">
                <li className='form__element'>
                  <input type="text" className="form__name" placeholder='Name'/>
                  <input type="text" className="form__email" placeholder='Email' />
                </li>
                <li className="form__element">
                  <textarea name="" id="" className='form__content' cols="30" rows="10"></textarea>
                </li>
                <li className="form__element">
                  <button className='form__btn'>SEND MESSAGE</button>
                </li>
              </ul>

            </form>
          </Col>
        </Row>
       
        
      </Container>
    </div>
  )
}
