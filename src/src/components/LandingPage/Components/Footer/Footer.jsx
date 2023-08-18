import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="section__container-sm footer__container">
        <div class="footer__col">
          <h3>StayHealthy <i style={{color:'#2190FF'}} className="fa fa-user-md"></i><span>.</span></h3>
          <br/>
        </div>
        <div class="footer__col raw footer__botton">
          <div>
            <h4>FAQs</h4>
          </div>
          <div>
            <h4>Terms & Conditions</h4>
          </div>
          <div>
            <h4>PrivacyPolicy</h4>
          </div>
          <div>
            <h4>Contact us</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer