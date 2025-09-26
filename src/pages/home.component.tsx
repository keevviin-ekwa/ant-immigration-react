import { useState } from "react";
import { PopupModal } from "react-calendly";

function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [root, setRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setRoot(document.getElementById("root") ?? document.getElementById("__next") ?? document.body);
  }, []);
  if (!root) return null;
  
  return (
    <div>
      <div className="paginacontainer">
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>
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
                        src="/assets/img/logo/logo-f.png"
                        width="200"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="main-menu-ex main-menu-ex12">
                    <ul>
                      <li>
                        <a href="#">Accueil </a>
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
                      rootElement={root}
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

      {/*  header modile satrd*/}
      <div className="mobile-header mobile-header-4 d-block d-lg-none ">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <a href="index.html">
                  <img src="/assets/img/logo/logo-ant.svg" alt="" />
                </a>
              </div>
              <div className="mobile-nav-icon">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-sidebar d-block d-lg-none">
        <div className="menu-close-logo">
          <a href="index1.html">
            <img src="/assets/img/logo/logo-ant.svg" alt="" />
          </a>
        </div>
        <div className="menu-close">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="mobile-nav">
          <li>
            <a href="#">Accueil </a>
          </li>

          <li>
            <a href="#">A propos</a>{" "}
          </li>

          <li>
            <a href="#">Nos Service</a>
          </li>

          <li className="has-dropdown">
            <a href="#">Pages</a>

            <ul className="sub-menu">
              <li className="has-dropdown has-dropdown1">
                <a href="countries.html">Countries</a>
                <ul className="sub-menu">
                  <li>
                    <a href="countries.html">Countries</a>
                  </li>
                  <li>
                    <a href="countries-details-sidebar-left.html">
                      Details left
                    </a>
                  </li>
                  <li>
                    <a href="countries-details-sidebar-right.html">
                      Details Right
                    </a>
                  </li>
                  <li>
                    <a href="countries-details.html">Single Countries</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="team.html">Team</a>
              </li>
              <li>
                <a href="team-details.html">Team Details</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="testimonial.html">Testimonial</a>
              </li>
              <li>
                <a href="error.html">404</a>
              </li>
            </ul>
          </li>

          <li className="has-dropdown">
            <a href="#">Shop</a>
            <ul className="sub-menu">
              <li className="has-dropdown has-dropdown1">
                <a href="shaop.html">shop</a>
                <ul className="sub-menu">
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="shop-sidebar-left.html">Shop Left</a>
                  </li>
                  <li>
                    <a href="shop-sidebar-right.html">Shop Right</a>
                  </li>
                </ul>
              </li>

              <li className="has-dropdown has-dropdown1">
                <a href="shaop.html">Others</a>
                <ul className="sub-menu">
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="sign-in.html">Sign In</a>
                  </li>
                  <li>
                    <a href="sign-up.html">Sign Up</a>
                  </li>
                  <li>
                    <a href="forgot.html">Forgot</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="shop-details.html">Shop Details</a>
              </li>
            </ul>
          </li>

          <li className="has-dropdown">
            <a href="#">Blog</a>
            <ul className="sub-menu">
              <li className="has-dropdown has-dropdown1">
                <a href="blog.html">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog 1</a>
                  </li>
                  <li>
                    <a href="blog2.html">Blog 2</a>
                  </li>
                  <li>
                    <a href="blog-sidebar-left.html">Blog Left</a>
                  </li>
                  <li>
                    <a href="blog-sidebar-right.html">Blog Right </a>
                  </li>
                </ul>
              </li>

              <li className="has-dropdown has-dropdown1">
                <a href="blog.html">Blog Details</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-details-sidebar-left.html">Details Left</a>
                  </li>
                  <li>
                    <a href="blog-details-sidebar-right.html">Details Right</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Single Details</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <a href="contact.html">Contact Us 1</a>
          </li>
          <li>
            <a href="contact2.html">Contact Us 2</a>
          </li>

          <li>
            <a className="mobile-menu-button" href="contact.html">
              Get Started
            </a>
          </li>
        </div>

        <div className="mobile-menu-social">
          <h3>Contact Info</h3>
          <div className="footer4-contact-info">
            <div className="mobile-menu-icon-box">
              <div className="mobile-menu-icon">
                <img src="/assets/img/icons/mobile-menu-icon1.svg" alt="" />
              </div>
              <div className="mobile-menu-a">
                <a href="tel:921-888-0022">921-888-0022</a>
              </div>
            </div>

            <div className="mobile-menu-icon-box">
              <div className="mobile-menu-icon">
                <img src="assets/img/icons/mobile-menu-icon2.svg" alt="" />
              </div>
              <div className="mobile-menu-a">
                <a href="mailto:example@visafast.com">example@visafast.com</a>
              </div>
            </div>

            <div className="mobile-menu-social">
              <h3>Our Location</h3>

              <div className="mobile-menu-icon-box">
                <div className="mobile-menu-icon">
                  <img src="assets/img/icons/mobile-menu-icon3.svg" alt="" />
                </div>
                <div className="mobile-menu-a">
                  <a href="mailto:info@example.com">
                    55 East Birchwood Ave.Brooklyn, <br /> New York 11201,United
                    States
                  </a>
                </div>
              </div>
            </div>

            <div className="mobile-menu-social">
              <h3>Social Links</h3>

              <div className="mobile-menu-social-icon">
                <ul>
                  <li>
                    <a data-bs-toggle="tooltip" title="Linked in" href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="tooltip" title="Facebook" href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="tooltip" title="Instagram" href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="tooltip" title="TikTok" href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  header modile end*/}

      <div className="hero-area7 _relative bg-video-wrap">
        <div className="overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="space80"></div>
              <div className="main-hadding7">
                <h1 data-aos="fade-right" data-aos-duration="700">
                  {" "}
                  Donnez vie à votre projet d'immigration au Canada
                </h1>
                <div className="space24"></div>
                <p data-aos="fade-right" data-aos-duration="900">
                  ANT Immigration Solutions vous accompagne à chaque étape de
                  votre projet d'immigration :
                  <br />
                  Notre expertise est à votre service pour simplifier vos
                  démarches et maximiser vos chances de réussite.
                </p>
                <div className="space32"></div>
                <div
                  className="hero7-all-buttons"
                  data-aos="fade-right"
                  data-aos-duration="1100"
                >
                  <a href="service.html" className="theme-btn21">
                    <span>Contactez-nous</span>
                  </a>

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

            <div className="col-lg-5"></div>
          </div>
        </div>
        <img
          className="hero7-shape1 aniamtion-key-2"
          src="/assets/img/shapes/hero7-shape1.svg"
          alt=""
        />
        <img
          className="hero7-shape2 aniamtion-key-2"
          src="/assets/img/shapes/hero7-shape2.svg"
          alt=""
        />
        <img
          className="hero7-shape3 aniamtion-key-3"
          src="/assets/img/shapes/hero7-shape3.svg"
          alt=""
        />
      </div>
      {/* hero end */}

      <div className="about5 sp3" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about5-images _relative"
                data-aos="zoom-out"
                data-aos-duration="700"
              >
                <div className="about5-img1 aniamtion-key-2">
                  <img src="/assets/img/image/apropos.jpg" alt="" />
                </div>
                <div className="about5-img5 img100 img5">
                  <img
                    src="/assets/img/image/apropos.jpg"
                    alt="Professional consultant smiling at a desk with documents and a laptop in a bright modern office setting, conveying a welcoming and trustworthy atmosphere"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hadding7 hadding12 about5-hadding">
                <span
                  className="span span2"
                  data-aos="fade-left"
                  data-aos-duration="1100"
                >
                  A propos de Ant Immigration
                </span>
                <div className="space16"></div>
                <h1 data-aos="fade-left" data-aos-duration="1100">
                  ANT Immigration Solutions – Là où vos projets d’immigration
                  deviennent réalité
                </h1>
                <div className="space24"></div>
                <p data-aos="fade-left" data-aos-duration="1100">
                  ANT Immigration Solutions inc. est une firme spécialisée dans
                  les services de consultation en immigration et citoyenneté
                  canadienne. Notre mission est d’accompagner chaque client dans
                  son projet d’immigration avec rigueur, professionnalisme et
                  transparence. Nous comprenons que chaque parcours est unique.
                  C’est pourquoi nous offrons une analyse personnalisée de votre
                  profil et des solutions adaptées à vos objectifs — qu’il
                  s’agisse d’obtenir un permis d’études, un permis de travail,
                  la résidence permanente, la citoyenneté ou de réunir votre
                  famille au Canada.
                </p>
                <div className="space32"></div>
                <div
                  className="about5-reting"
                  data-aos="fade-left"
                  data-aos-duration="1100"
                >
                  <div className="">
                    <a href="about.html" className="theme-btn21">
                      <span>En savoir plus</span>
                    </a>
                  </div>
                  <div className="google-reting-all">
                    <div className="google-reting">
                      <div className="google-reting-img">
                        <img src="/assets/img/icons/google5.svg" alt="" />
                      </div>
                      <div className="google-reting-star">
                        <div className="">
                          <h5>5.0</h5>
                        </div>
                        <ul className="google-star-list">
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="google-reting-p">
                      <p>
                        Noté 5 étoiles
                        <a href="#">
                          <u>+50 avis</u>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}
      <div
        className="service7 sp3"
        id="service"
        style={{ backgroundColor: "#F6F6F6" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="hadding7 hadding12">
                <span
                  className="span span2"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  Nos Services
                </span>
                <div className="space16"></div>
                <h1 data-aos="fade-up" data-aos-duration="1100">
                  Un accompagnement clair et professionnel pour vos démarches
                  d’immigration et de citoyenneté
                </h1>
              </div>
            </div>
          </div>
          <div className="space30"></div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="service7-box"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div className="service7-box-img img5 img100">
                  <img src="assets/img/image/student.jpg" alt="" />
                </div>
                <div className="hadding7 hadding12 service7-hadding">
                  <h4>
                    <a href="service-details.html">Visa d'Etudes</a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    Le permis d’études permet aux étudiants étrangers d’intégrer
                    un établissement d’enseignement désigné (DLI) au Canada pour
                    la durée de leur programme. Il peut aussi donner droit à un
                    emploi à temps partiel pendant les études et à un permis de
                    travail post-diplôme après l’obtention du diplôme.
                  </p>
                  <div className="space16"></div>
                  <a
                    href="service-details.html"
                    className="learn-more7 learn-more12"
                  >
                    En savoir plus{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="service7-box"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <div className="service7-box-img img5 img100">
                  <img src="assets/img/image/worker.jpg" alt="" />
                </div>
                <div className="hadding7 hadding12 service7-hadding">
                  <h4>
                    <a href="service-details.html">Visa de travail</a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    Nous vous aidons à obtenir votre permis de travail au
                    Canada, qu’il soit lié à un employeur spécifique ou ouvert.
                    Notre service comprend l’évaluation de votre admissibilité,
                    la préparation des documents requis et l’accompagnement
                    complet tout au long du processus, afin de maximiser vos
                    chances d’obtenir une autorisation de travail légale et
                    rapide.
                  </p>
                  <div className="space16"></div>
                  <a
                    href="service-details.html"
                    className="learn-more7 learn-more12"
                  >
                    En savoir plus{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="service7-box"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                <div className="service7-box-img img5 img100">
                  <img src="assets/img/image/resident.jpg" alt="" />
                </div>
                <div className="hadding7 hadding12 service7-hadding">
                  <h4>
                    <a href="service-details.html">Résidence permanente</a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    Nous vous accompagnons dans votre démarche vers la résidence
                    permanente au Canada, que ce soit par le programme Entrée
                    Express, les programmes des candidats des provinces
                    (PCP/PNP) ou le parrainage familial. Notre service inclut
                    l’analyse approfondie de votre profil, la préparation de
                    votre dossier et un suivi personnalisé afin de maximiser vos
                    chances de réussir votre projet d’établissement durable au
                    Canada.
                  </p>
                  <div className="space16"></div>
                  <a
                    href="service-details.html"
                    className="learn-more7 learn-more12"
                  >
                    En savoir plus{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- <div className="col-lg-4 col-md-6"> 
                    <div className="service7-box" data-aos="fade-up" data-aos-duration="1400">
                        <div className="service7-box-img img5 img100">
                            <img src="assets/img/image/service7-img4.png" alt=""/>
                        </div>
                        <div className="hadding7 hadding12 service7-hadding">
                            <h4><a href="service-details.html">Visa Renewals & Extensions</a></h4>
                            <div className="space16"></div>
                            <p>Already living abroad and need to extend your visa? Our team can help you with visa renewals and extensions, ensuring you can continue.</p>
                            <div className="space16"></div>
                            <a href="service-details.html" className="learn-more7 learn-more12">Read more <span><i className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service7-box" data-aos="fade-up" data-aos-duration="1100">
                        <div className="service7-box-img img5 img100">
                            <img src="assets/img/image/service7-img5.png" alt="">
                        </div>
                        <div className="hadding7 hadding12 service7-hadding">
                            <h4><a href="service-details.html">Family & Depended Visas</a></h4>
                            <div className="space16"></div>
                            <p>Reuniting with your loved ones is a priority, and we can help you navigate the visa application process for family members.</p>
                            <div className="space16"></div>
                            <a href="service-details.html" className="learn-more7 learn-more12">Read more <span><i className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service7-box" data-aos="fade-up" data-aos-duration="700">
                        <div className="service7-box-img img5 img100">
                            <img src="assets/img/image/service7-img6.png" alt=""/>
                        </div>
                        <div className="hadding7 hadding12 service7-hadding">
                            <h4><a href="service-details.html">Business Visa</a></h4>
                            <div className="space16"></div>
                            <p>Venturing into international business? We facilitate seamless business travel by offering expert advice on business visas.</p>
                            <div className="space16"></div>
                            <a href="service-details.html" className="learn-more7 learn-more12">Read more <span><i className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div> */}
          </div>
          <div className="space40"></div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="service-button text-center"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                {/* <!-- <a href="service.html" className="theme-btn21"><span>View All Services</span></a> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service end */}
      <div className="choose7 sp3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hadding7 hadding12">
                <span
                  className="span span2"
                  data-aos="fade-right"
                  data-aos-duration="1100"
                >
                  Pourquoi nous choisir ?
                </span>
                <div className="space16"></div>
                <h1 data-aos="fade-right" data-aos-duration="1100">
                  Le partenaire idéal pour vos démarches d’immigration
                </h1>
              </div>
              <div className="space32"></div>
              <div className="hadding7 hadding12">
                <h4 data-aos="fade-right" data-aos-duration="900">
                  <a href="#">
                    Accompagnement personnalisé pour les demandes de visa
                  </a>
                </h4>
                <div className="space16"></div>
                <p data-aos="fade-right" data-aos-duration="1100">
                  Nous vous offrons un suivi adapté à votre situation unique.
                  Nous analysons votre profil, vous orientons vers le bon
                  programme et vous guidons dans la constitution d’un dossier
                  solide et complet.
                </p>
                <div className="space24"></div>
                <h4 data-aos="fade-right" data-aos-duration="1300">
                  <a href="#">Vérification rigoureuse des demandes</a>
                </h4>
                <div className="space16"></div>
                <p data-aos="fade-right" data-aos-duration="900">
                  Une erreur mineure peut entraîner des retards ou un refus.
                  Notre équipe vérifie minutieusement vos formulaires et
                  documents afin d’assurer exactitude et conformité, réduisant
                  ainsi les risques de complication.
                </p>

                <div className="space24"></div>
                <h4 data-aos="fade-right" data-aos-duration="1300">
                  <a href="#">Expertise réglementaire</a>
                </h4>
                <div className="space16"></div>
                <p data-aos="fade-right" data-aos-duration="900">
                  Nous maîtrisons les exigences d’Immigration, Réfugiés et
                  Citoyenneté Canada (IRCC) ainsi que celles des provinces, ce
                  qui nous permet d’anticiper les difficultés et de sécuriser
                  vos démarches.
                </p>

                <div className="space24"></div>
                <h4 data-aos="fade-right" data-aos-duration="1300">
                  <a href="#">Confidentialité garantie</a>
                </h4>
                <div className="space16"></div>
                <p data-aos="fade-right" data-aos-duration="900">
                  Vos données personnelles sont traitées avec le plus haut
                  niveau de confidentialité et de sécurité, conformément aux
                  normes canadiennes (PIPEDA).
                </p>
                <div className="space24"></div>
                <h4 data-aos="fade-right" data-aos-duration="1300">
                  <a href="#">Suivi continu</a>
                </h4>
                <div className="space16"></div>
                <p data-aos="fade-right" data-aos-duration="900">
                  Notre accompagnement ne s’arrête pas au dépôt de la demande :
                  nous vous tenons informé de l’évolution de votre dossier et
                  vous conseillons jusqu’à la décision finale.
                </p>
                <div className="space32"></div>
                <a
                  href="service.html"
                  className="theme-btn21"
                  data-aos="fade-right"
                  data-aos-duration="1300"
                >
                  <span>Prendre un rendez-vous</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="type-visa-images _relative"
                data-aos="zoom-out"
                data-aos-duration="700"
              >
                <div className="type-vis-img1 aniamtion-key-2">
                  <img src="/assets/img/image/confiance.jpg" alt="" />
                </div>

                <div className="type-vis-img2 img100 img5">
                  <img src="/assets/img/image/assurance.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* choose end */}
      <div className="sp3 _relative" style={{ backgroundColor: "#F6F6F6" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="d-flex align-items-start">
                <div
                  className="tab-content"
                  id="v-pills-tabContent"
                  data-aos="zoom-out"
                  data-aos-duration="700"
                >
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="choose4-images text-left">
                      <div className="prosess-shape aniamtion-key-2">
                        <img src="/assets/img/image/conversation.jpg" alt="" />
                      </div>
                      <div className="choose4-img-2 img100 img5">
                        <img src="/assets/img/image/conversation.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="choose4-images text-left">
                      <div className="prosess-shape aniamtion-key-2">
                        <img
                          src="assets/img/shapes/choose4-img-shape1.svg"
                          alt=""
                        />
                      </div>
                      <div className="choose4-img-2 img100 img5">
                        <img src="assets/img/image/choose4-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="choose4-images text-left">
                      <div className="prosess-shape aniamtion-key-2">
                        <img
                          src="assets/img/shapes/choose4-img-shape1.svg"
                          alt=""
                        />
                      </div>
                      <div className="choose4-img-2 img100 img5">
                        <img src="assets/img/image/prosess-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hadding7 hadding12"
                data-aos="fade-left"
                data-aos-duration="700"
              >
                <span className="span span2 font-f-4">Notre processus</span>
                <div className="space16"></div>
                <h1 className="font-f-4">
                  Guidés à chaque étape de votre parcours
                </h1>
              </div>
              <div
                className="nav progress-list4 flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
                data-aos="fade-left"
                data-aos-duration="1100"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <div className="progress-list-box progress-list-box3">
                    <div className="progress-list-number progress-list-number3">
                      <h4>
                        <span className="font-f-4">01</span>
                      </h4>
                    </div>
                    <div className="hadding7 hadding12 progress4-hadding">
                      <h4 className="font-f-4">Découverte</h4>
                      <div className="space8"></div>
                      <p className="font-f-4">
                        Tout commence par une première rencontre où nous
                        écoutons vos rêves et vos objectifs pour le Canada.
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <div className="progress-list-box progress-list-box3">
                    <div className="progress-list-number progress-list-number3">
                      <h4>
                        <span className="font-f-4">02</span>
                      </h4>
                    </div>
                    <div className="hadding7 hadding12 progress4-hadding">
                      <h4 className="font-f-4">Transformation</h4>
                      <div className="space8"></div>
                      <p className="font-f-4">
                        Nous transformons vos informations en un plan
                        d’immigration clair et stratégique, adapté à votre
                        profil et vos objectifs.
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <div className="progress-list-box progress-list-box3">
                    <div className="progress-list-number progress-list-number3">
                      <h4>
                        <span className="font-f-4">03</span>
                      </h4>
                    </div>
                    <div className="hadding7 hadding12 progress4-hadding">
                      <h4 className="font-f-4">Realisation</h4>
                      <div className="space8"></div>
                      <p className="font-f-4">
                        Nous finalisons et soumettons votre dossier avec
                        rigueur, puis restons à vos côtés jusqu’à la
                        concrétisation de votre projet d’immigration.
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="space32"></div>
              <div className="" data-aos="fade-left" data-aos-duration="700">
                <a href="service.html" className="theme-btn21">
                  <span>Découvrez votre parcours</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* conversation end */}

      <div className="team6 sp3" id="team">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hadding7">
                <span
                  className=" span span2"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  Notre Expert
                </span>
                <div className="space16"></div>
                <h1 data-aos="fade-right" data-aos-duration="800">
                  L’humain et l’expertise : Aurelien Noubissie , votre
                  consultant principal
                </h1>
                <div className="space24"></div>
                <p data-aos="fade-right" data-aos-duration="1000">
                  Aurélien est le consultant principal d’ANT Immigration
                  Solutions inc. et met à profit son expertise pour accompagner
                  ceux qui souhaitent réaliser leur projet de vie au Canada.
                  Avec une connaissance approfondie des programmes d’immigration
                  fédéraux et provinciaux, il a guidé avec succès de nombreux
                  étudiants, travailleurs qualifiés et familles dans leurs
                  démarches. Sa mission : offrir un accompagnement clair,
                  personnalisé et transparent, en s’assurant que chaque dossier
                  est préparé avec rigueur et présenté de manière optimale.
                  Aurélien croit fermement que chaque parcours d’immigration est
                  unique, et il s’engage à être un partenaire de confiance à
                  chaque étape.
                </p>
              </div>
              <div>
                <img
                  src="/assets/img/image/certificat.png"
                  height="50%"
                  width="50%"
                  alt="certificat"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="team6-image"
                data-aos="zoom-out"
                data-aos-duration="700"
              >
                <img
                  src="/assets/img/image/team12-img.png"
                  alt="une photo ici"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="tes12 sp3"
        id="testimonial"
        style={{ backgroundColor: "#F6F6F6" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-7 m-auto text-center">
              <div className="hadding7 hadding12">
                <span
                  className="span span2"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  La voix de nos clients
                </span>
                <div className="space16"></div>
                <h1 data-aos="fade-up" data-aos-duration="700">
                  Découvrez l’expérience de ceux qui nous ont fait confiance
                  pour leurs démarches d’immigration.
                </h1>
              </div>
            </div>
          </div>
          <div className="space60"></div>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="tes7-main-image"></div>
            </div>
            <div className="col-lg-7">
              <div
                className="tes7-slider-all owl-carousel"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div className="tes7-slider-single">
                  <div className="hadding7">
                    <p>
                      "ANT Immigration Solutions m’a accompagnée avec
                      professionnalisme pour mon permis de travail. L’équipe a
                      su répondre à toutes mes questions et m’a guidée du début
                      à la fin. Je me sens enfin prête à commencer ma nouvelle
                      vie au Canada."
                    </p>
                    <div className="space30"></div>
                    <div className="tes7-bottom-all">
                      <div className="tes7-bottom-img">
                        <img src="assets/img/image/tes7-img1.png" alt="" />
                      </div>
                      <div className="hadding7 hadding12">
                        <ul className="tes7-review">
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                        <div className="space5"></div>
                        <h5>
                          <a href="#">Jordane - Cameroun</a>
                        </h5>
                        <span className="span span2">Travailleur</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tes7-slider-single">
                  <div className="hadding7">
                    <p>
                      "Grâce à ANT Immigration Solutions, nous avons pu obtenir
                      notre résidence permanente. Leur équipe a été disponible,
                      transparente et toujours à l’écoute. Nous recommandons
                      vivement leurs services."
                    </p>
                    <div className="space30"></div>
                    <div className="tes7-bottom-all">
                      <div className="tes7-bottom-img">
                        <img src="assets/img/image/tes7-img2.png" alt="" />
                      </div>
                      <div className="hadding7 hadding12">
                        <ul className="tes7-review">
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                        <div className="space5"></div>
                        <h5>
                          <a href="#">Carole- Cameroun</a>
                        </h5>
                        <span className="span span2">Résidente permanente</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tes7-slider-single">
                  <div className="hadding7">
                    {" "}
                    <p>
                      {" "}
                      "Le soutien d’ANT Immigration Solutions a été essentiel
                      pour réussir mon projet d’études au Canada. Leur suivi est
                      irréprochable et tout a été simplifié pour moi."
                    </p>
                    <div className="space30"></div>
                    <div className="tes7-bottom-all">
                      <div className="tes7-bottom-img">
                        <img src="assets/img/image/tes7-img3.png" alt="" />
                      </div>
                      <div className="hadding7 hadding12">
                        <ul className="tes7-review">
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                        <div className="space5"></div>
                        <h5>
                          <a href="#">Ferdinand - Cote d'Ivoire</a>
                        </h5>
                        <span className="span span2">Etudiant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="contact7"
          id="contact"
          style={{ backgroundColor: "#F6F6F6" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="hadding7 contact7-hadding">
                  <span className="span span2">Contactez nous</span>
                  <div className="space16"></div>
                  <h1>
                    Vous avez des questions ou souhaitez commencer vos démarches
                    d’immigration ?
                  </h1>
                  <div className="space16"></div>
                  <p>
                    Nous vous répondrons rapidement et avec toute l’attention
                    nécessaire à votre projet.
                  </p>
                  <div className="space8"></div>
                  <form action="#">
                    <div className="contact7-form">
                      <div className="contact7-input">
                        <input type="text" placeholder="Votre nom*" />
                      </div>
                      <div className="contact7-input">
                        <input
                          type="email"
                          placeholder="Votre adresse e-mail*"
                        />
                      </div>
                      <div className="contact7-input">
                        <input
                          type="number"
                          placeholder="Votre numéro de téléphone*"
                        />
                      </div>
                      <div className="contact7-input">
                        <textarea
                          cols={30}
                          rows={3}
                          placeholder="Écrivez un message*"
                        ></textarea>
                      </div>
                      <div className="space32"></div>
                      <button className="theme-btn21">
                        <span>Envoyez</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-map contact-map12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5688922563527!2d-73.46538458768109!3d45.49862547095395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9051d149d1021%3A0xf0abe13b6003793!2s1473%20Rue%20de%20Gaulle%2C%20Longueuil%2C%20QC%20J4T%201M5!5e0!3m2!1sfr!2sca!4v1756952454386!5m2!1sfr!2sca"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="contact7-icon-box contact7-icon-box12">
                  <div className="contact7-icon">
                    <img src="assets/img/icons/contact12-icon1.svg" alt="" />
                  </div>
                  <div className="contact7-iocn-hadding">
                    <h4>
                      <a href="#">Localisation</a>
                    </h4>
                    <div className="space6"></div>
                    <a href="#">1473 rue de Gaulle</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="contact7-icon-box contact7-icon-box12">
                  <div className="contact7-icon">
                    <img src="assets/img/icons/contact12-icon2.svg" alt="" />
                  </div>
                  <div className="contact7-iocn-hadding">
                    <h4>
                      <a href="#">Numéro de téléphone</a>
                    </h4>
                    <div className="space6"></div>
                    <a href="tel:+1 873 660-3991">+1 (873) 660-3991</a>
                    <br />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="contact7-icon-box contact7-icon-box12">
                  <div className="contact7-icon">
                    <img src="assets/img/icons/contact12-icon3.svg" alt="" />
                  </div>
                  <div className="contact7-iocn-hadding">
                    <h4>
                      <a href="#">Adresse e-mail</a>
                    </h4>
                    <div className="space6"></div>
                    <a href="mailto:info@ant-immigration.com">
                      info@ant-immigration.com
                    </a>{" "}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="hadding7 hadding12">
                  <h1>
                    Recevez nos conseils directement dans votre boîte mail
                  </h1>
                  <div className="space30"></div>
                </div>
                <div className="cta4-subsribe-all _relative">
                  <form action="#">
                    <div className="cta4-inuut">
                      <input
                        type="email"
                        placeholder="Saisissez votre adresse e-mail"
                      />
                    </div>
                    <div className="cta4-button">
                      <button type="submit" className="theme-btn21 font-f-4">
                        Souscrire maintenant
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer start */}
      <footer className="footer-area padding-top font-f-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-footer mr50 hadding2">
                <div className="site-logo home1-site-logo">
                  <a href="#">
                    <img src="assets/img/logo/logo-f.png" width="600" alt="" />
                  </a>
                </div>
                <div className="space20"></div>
                <div className="hadding7">
                  <p>
                    ANT Immigration Solutions inc. est une firme spécialisée en
                    consultation d’immigration et de citoyenneté canadienne.
                    Notre mission est d’accompagner étudiants, travailleurs et
                    familles à chaque étape de leur projet, avec
                    professionnalisme, clarté et confidentialité.
                  </p>
                </div>
              </div>
              <div className="space24"></div>
              <div className="social social12">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-6 hadding2">
              <div className="single-footer single-footer12">
                <h3>Explorer</h3>
                <div>
                  <ul>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-solid fa-plane"></i>
                        </span>{" "}
                        Accueil
                      </a>
                    </li>
                    <li>
                      <a href="#about">
                        <span>
                          <i className="fa-solid fa-plane"></i>
                        </span>{" "}
                        A propos
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span>
                          <i className="fa-solid fa-plane"></i>
                        </span>{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#team">
                        <span>
                          <i className="fa-solid fa-plane"></i>
                        </span>{" "}
                        Notre expert
                      </a>
                    </li>
                    <li>
                      <a href="#testimonial">
                        <span>
                          <i className="fa-solid fa-plane"></i>
                        </span>{" "}
                        Témoignages
                      </a>
                    </li>
                    <li>
                      <a href="#contact">
                        <span>
                          <i className="fa-solid fa-plane"></i>
                        </span>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-6 hadding2">
              <div className="single-footer single-footer12">
                <h3>Visa</h3>
                <div>
                  <ul>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-solid fa-plane"></i>
                        </span>
                        Permis de travail
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-solid fa-plane"></i>
                        </span>{" "}
                        Visa étudiant
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-solid fa-plane"></i>
                        </span>{" "}
                        Visa Touriste
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-solid fa-plane"></i>
                        </span>{" "}
                        Residence permanente
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 hadding2">
              <div className="single-footer-contact single-footer single-footer4">
                <h3>Entrer en contact</h3>
                <div className="space10"></div>
                <div className="padding-left20">
                  <div className="hadding7">
                    <p style={{ color: "#181A1C" }}>
                      1474 rue de Gaulle, Longueuil, QC J4T 1M5
                    </p>
                  </div>
                  <div className="space10"></div>

                  <div className="contact-icon-box2">
                    <div className="contact-icon">
                      <img src="assets/img/icons/footer12-icon1.svg" alt="" />
                    </div>
                    <div className="contact-icon-h">
                      <a href="tel:+1 438 872 0336">+1 438 872 0336</a>
                    </div>
                  </div>

                  <div className="contact-icon-box2">
                    <div className="contact-icon">
                      <img src="assets/img/icons/footer12-icon2.svg" alt="" />
                    </div>
                    <div className="contact-icon-h">
                      <a href="mailto:example@visafast.com">
                        info@ant-immigration.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center copyright2">
            <div className="col-lg-12 text-center hadding6">
              <p className="font-f-9">
                © 2025 par ANT-Immigration Solutions inc.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

