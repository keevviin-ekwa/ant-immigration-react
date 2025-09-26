import { useState } from "react";
import { PopupModal } from "react-calendly";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
 
    <header>
        <div
          className="header-area header-area5 header-area-all header-area-all2 d-none d-lg-block"
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements _relative">
                  <div className="site-logo home1-site-logo">
                    <a href="index1.html">
                      <img
                        src="assets/img/logo/logo-f.png"
                        width="200"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="main-menu-ex main-menu-ex12">
                    <ul>
                      <li>
                        <a href="#">Acceuil </a>
                      </li>

                      <li>
                        <a href="#about">A propos</a>
                      </li>

                      <li>
                        <a href="#service">Services</a>
                      </li>

                      <li>
                        <a href="#team">Notre expert</a>
                      </li>

                      <li>
                        <a href="#testimonial">Témoignages</a>
                      </li>

                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>

                  <div className="home2-header-buttons">
                    <div className="button5-all">
                      <a  onClick={() => setIsOpen(true)} className="theme-btn21">
                        <span>Consulter Notre expert</span>
                      </a>
                    </div>
                    <PopupModal
                      url="https://calendly.com/ant-immigration-info/30min"
                      onModalClose={() => setIsOpen(false)}
                      open={isOpen}
                      rootElement={document.getElementById("root")}
                    />
                  </div>
                  <div className="mobile-menu-bar d-lg-none">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
