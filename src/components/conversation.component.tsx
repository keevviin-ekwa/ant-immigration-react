function Conversation(){ 
    return(
       <div className="sp3 _relative" style={{ backgroundColor: '#F6F6F6' }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="d-flex align-items-start">
            <div className="tab-content" id="v-pills-tabContent" data-aos="zoom-out" data-aos-duration="700">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div className="choose4-images text-left">
                    <div className="prosess-shape aniamtion-key-2">
                        <img src="assets/img/image/conversation.jpg" alt="" />
                    </div>
                    <div className="choose4-img-2 img100 img5">
                        <img src="assets/img/image/conversation.jpg" alt=""/>
                    </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <div className="choose4-images text-left">
                    <div className="prosess-shape aniamtion-key-2">
                      <img src="assets/img/shapes/choose4-img-shape1.svg" alt=""/>
                  </div>
                    <div className="choose4-img-2 img100 img5">
                        <img src="assets/img/image/choose4-img.png" alt="" />
                    </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                  <div className="choose4-images text-left">
                    <div className="prosess-shape aniamtion-key-2">
                      <img src="assets/img/shapes/choose4-img-shape1.svg" alt="" />
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
          <div className="hadding7 hadding12" data-aos="fade-left" data-aos-duration="700">
            <span className="span span2 font-f-4">Notre processus</span>
                <div className="space16"></div>
                <h1 className="font-f-4">Guidés à chaque étape de votre parcours</h1>
          </div>
          <div className="nav progress-list4 flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical" data-aos="fade-left" data-aos-duration="1100">
            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
              <div className="progress-list-box progress-list-box3">
                <div className="progress-list-number progress-list-number3">
                  <h4><span className="font-f-4">01</span></h4>
                </div>
                <div className="hadding7 hadding12 progress4-hadding">
                  <h4 className="font-f-4">Découverte</h4>
                  <div className="space8"></div>
                  <p className="font-f-4">Tout commence par une première rencontre où nous écoutons vos rêves et vos objectifs pour le Canada.</p>
                </div>
              </div>
            </button>
            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
              <div className="progress-list-box progress-list-box3">
                <div className="progress-list-number progress-list-number3">
                  <h4><span className="font-f-4">02</span></h4>
                </div>
                <div className="hadding7 hadding12 progress4-hadding">
                  <h4 className="font-f-4">Transformation</h4>
                  <div className="space8"></div>
                  <p className="font-f-4">Nous transformons vos informations en un plan d’immigration clair et stratégique, adapté à votre profil et vos objectifs.</p>
                </div>
              </div>
            </button>
            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
              <div className="progress-list-box progress-list-box3">
                <div className="progress-list-number progress-list-number3">
                  <h4><span className="font-f-4">03</span></h4>
                </div>
                <div className="hadding7 hadding12 progress4-hadding">
                  <h4 className="font-f-4">Realisation</h4>
                  <div className="space8"></div>
                  <p className="font-f-4">Nous finalisons et soumettons votre dossier avec rigueur, puis restons à vos côtés jusqu’à la concrétisation de votre projet d’immigration.</p>
                </div>
              </div>
            </button>
          </div>

          <div className="space32"></div>
          <div className="" data-aos="fade-left" data-aos-duration="700">
            <a href="service.html" className="theme-btn21"><span>Décrouvrez votre parcou</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
 }
 
 export default Conversation;