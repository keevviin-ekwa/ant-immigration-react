import React from "react";

function Hero() {
  return (
     <div className="hero-area7 _relative bg-video-wrap">
     
        <div className="overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
                <div className="space80"></div>
              <div className="main-hadding7">
                  <h1 data-aos="fade-right" data-aos-duration="700">   Donnez vie à votre projet d'immigration au Canada</h1>
                  <div className="space24"></div>
                  <p data-aos="fade-right" data-aos-duration="900" >ANT Immigration Solutions vous accompagne à chaque étape de votre projet d'immigration :
                     <br/>Notre expertise est à votre service pour simplifier vos démarches et maximiser vos chances de réussite.</p>
                  <div className="space32"></div>
                  <div className="hero7-all-buttons" data-aos="fade-right" data-aos-duration="1100">
                    <a href="service.html" className="theme-btn21"><span>Contactez-nous</span></a>

                    <div className="desktop-info">
                      <div className="quick_contact">
                        <div className="quick_contact_icon bg-27">
                          <i className="fa-light fa-phone"></i>
                        </div>
                        <div className="quick_contact_content">
                          <small>Hotline 24/7</small>
                          <a href="tel:+1 438 872 0336">+1 438 872 0336</a>
                        </div>
                      </div>
                    </div>
              
                  </div>
              </div>
            </div>

            <div className="col-lg-5">

            </div>

          </div>
        </div>
        <img className="hero7-shape1 aniamtion-key-2" src="assets/img/shapes/hero7-shape1.svg" alt=""/>
        <img className="hero7-shape2 aniamtion-key-2" src="assets/img/shapes/hero7-shape2.svg" alt=""/>
        <img className="hero7-shape3 aniamtion-key-3" src="assets/img/shapes/hero7-shape3.svg" alt=""/>
      </div>
  );
}

export default Hero;
