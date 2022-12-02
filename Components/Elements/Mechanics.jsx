export default function Mechanics() {
  return (
    <>
      <div className="mechanic_bg">
        <div className="container">
          <div className="mechanic_txt text-white text-center mt-4" data-aos="fade-up">
            <h5>SOMNIUM SPACE </h5>
            <h2>INGAME MECHANICS</h2>
          </div>
        <div className="mechanic_grid">
        <div className=" row">
            <div className="col-md-5 col-12 d-flex justify-content-end text-end   mt-5 ">
              <div className="text-white">
                <h3>Cross Platform</h3>
                <p>Available on all major VR headsets.</p>
              </div>
              <div>
                <img src="assets/images/mec1.png" className="ms-4 "  alt="" />
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 col-12 d-flex text-start  mt-5 ">
              <div>
                <img src="assets/images/mec2.png" className="me-4 "  alt="" />
              </div>
              <div className="text-white">
                <h3>Persistent Social VR World</h3>
                <p>
                  Unlimited scalable world built by users within one instance.
                </p>
              </div>
            </div>
          </div>
          <div className=" row">
            <div className="col-md-5 col-12 d-flex justify-content-end text-end   mt-5 ">
              <div className="text-white">
                <h3>Customizable PC Client</h3>
                <p>Create and adjust your own layout setup for fast in-game
                  interaction.</p>
              </div>
              <div>
                <img src="assets/images/mec3.png" className="ms-4 "  alt="" />
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 col-12 d-flex text-start  mt-5 ">
              <div>
                <img src="assets/images/mec4.png" className="me-4 "  alt="" />
              </div>
              <div className="text-white">
                <h3>Virtual Land Ownership</h3>
                <p>
                Buy and customize your own land. Build anything you envision.
                </p>
              </div>
            </div>
          </div>
          <div className=" row">
            <div className="col-md-5 col-12 d-flex justify-content-end text-end   mt-5 ">
              <div className="text-white">
                <h3 style={{color: '#D00808'}}>Live Forever</h3>
                <p>Automatic recording mode of yourself on your own property for
                  future AI analysis to bring your avatar to life.</p>
              </div>
              <div>
                <img src="assets/images/mec5.png" className="ms-4 "  alt="" />
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 col-12 d-flex text-start  mt-5 ">
              <div>
                <img src="assets/images/mec6.png" className="me-4 "  alt="" />
              </div>
              <div className="text-white">
                <h3>Scriptable World</h3>
                <p>
                Program your own experience and monetize through the asset
                  store or on your property.
                </p>
              </div>
            </div>
          </div>
          <div className=" row">
            <div className="col-md-5 col-12 d-flex justify-content-end text-end   mt-5 ">
              <div className="text-white">
                <h3>Blockchain</h3>
                <p>Integration of blockchain allows true ownership of digital
                  goods, avatars, items and virtual land. We are creating a long
                  lasting Economy which will allow instant monetization for our
                  in-world creators.</p>
              </div>
              <div>
                <img src="assets/images/mec7.png" className="ms-4 "  alt="" />
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 col-12 d-flex text-start  mt-5 ">
              <div>
                <img src="assets/images/mec8.png" className="me-4 "  alt="" />
              </div>
              <div className="text-white">
                <h3>Monetize Your Space</h3>
                <p>
                Take advantage of fully programmatic VR advertisement plugin.
                  Capture and analyze gaze tracking, engagement and conversion
                  rates.
                </p>
              </div>
            </div>
          </div>
        </div>
         
        </div>
        <div className="token_bottem d-flex justify-content-center align-items-center" style={{marginTop: '18vh'}}>
                    <div className="d-flex justify-content-center align-items-center">
                    <h1 className="me-5">Available Now</h1>
                    <img src="assets/images/window.png" className="me-5"  alt=""  />
                    <img src="assets/images/chain1.png" className="me-5" alt="" />
                    <img src="assets/images/chain2.png" className="me-5" alt="" />
                    <img src="assets/images/chain3.png" className="me-5" alt="" />
                    <h1 className="ms-5">Ready to Play</h1>
                    </div>
            </div>
      </div>
    </>
  );
}
