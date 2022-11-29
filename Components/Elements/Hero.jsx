export default function Hero() {
  return (
    <>
      <div className="hero_bg">
        <div className="container-fluid" style={{ padding: "0px" }}>
          <div className="position-relative">
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
          </div>
        </div>
      </div>
    </>
  );
}
