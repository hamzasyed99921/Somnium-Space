export default function Hero() {
  return (
    <>
      <div className="hero_bg">
        <div className="container-fluid" style={{ padding: "0px" }}>
          <div className="">
            <video
              id="video7"
              class="hero_video"
              preload="metadata"
              autoPlay
              loop
              width={"100%"}
            >
              <source
                src="https://somniumspace.com/images/AvatarsAnimation.mp4"
                type="video/mp4"
              />
            </video>
            <div className="hero_card">
              <div className="img">
                <img src="assets/images/hero1.png" alt="" />
                <span className="me-5">UnitySDK</span>
              </div>
              <div className="img mt-4">
                <img src="assets/images/hero2.png" alt="" />
                <span className="me-3">Virtual Reality</span>
              </div>
              <div className="img mt-4">
                <img src="assets/images/hero3.png" alt="" />
                <span className="me-5">Builder</span>
              </div>
              <div className="img mt-4">
                <img src="assets/images/hero4.png" alt="" />
                <span className="me-4">Marketplace</span>
              </div>
            </div>
            <div className="hero_txt d-flex flex-column">
                <div className="d-flex">
                    <div className="me-3">
                    <img src="assets/images/new.png"  alt="" />
                    </div>
                    <div className="flex_txt d-flex flex-column align-items-center justify-content-center">
                        <img src="assets/images/new2.png" alt="" />
                        <img src="assets/images/new3.png" className="position-relative mt-2" alt="" />
                        <p className="down_txt">Download</p>
                    </div>
                </div>
            </div>
                <div className="hero_txt2 d-flex flex-column" style={{width: "35%"}}>
                    <div className="d-flex align-items-center">
                        <img src="assets/images/new4.png" className="me-3" alt="" />
                        <h4>Access CUBEs</h4>
                    </div>
                    <div className="hero_txt2_img mt-3">
                        <img src="assets/images/new5.png" className="position-relative me-2" alt="" />
                        <img src="assets/images/btntxt.png" className="img1" alt="" />
                        <img src="assets/images/new6.png" className="position-relative me-2" alt="" />
                        <img src="assets/images/btntxt1.png" className="img2" alt="" />
                        <img src="assets/images/new5.png" className="position-relative" alt="" />
                        <img src="assets/images/btntxt3.png" className="img3" alt="" />
                    </div>
                </div>
          </div>
          <div className="hero_bottem ">
                <div className="d-flex justify-content-around align-items-center image">
                <img src="assets/images/bot1.png" alt="" style={{width: '8%'}} />
                <img src="assets/images/bot2.png" alt="" style={{width: '4%'}} />
                <img src="assets/images/bot3.png" alt="" style={{width: '8%'}}/>
                <img src="assets/images/bot5.png" alt="" style={{width: '4%'}}/>
                <img src="assets/images/bot4.png" alt="" style={{width: '8%'}}/>
                <img src="assets/images/bot6.png" alt="" style={{width: '4%'}}/>
                <img src="assets/images/bot7.png" alt="" style={{width: '8%'}}/>
                <img src="assets/images/bot8.png" alt="" style={{width: '8%'}}/>
                <img src="assets/images/bot9.png" alt="" style={{width: '6%'}}/>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
