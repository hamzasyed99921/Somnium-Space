export default function Reality() {
  return (
    <>
      <div className="reality_bg">
        <div className="container-fluid">
          <div className="reality_txt text-white text-center mt-4">
            <h5>SOMNIUM SPACE IS A</h5>
            <h2>VIRTUAL REALITY WORLD</h2>
            <p>Open, Social & Persistent</p>
          </div>
          <div className="mt-5 reality_grid">
            <div className="row d-flex align-items-center">
              <div className="col-md-3 col-12" style={{padding: '0px'}}>
                <p className="text-end">
                  We are creating an Open, Social, Virtual Reality world. A
                  world with its own economy and its own currency. A VR world
                  with its own Marketplace, Games, Social experiences and
                  Virtual Land ownership.
                </p>
              </div>
              <div className="col-md-6 col-12" style={{padding: '0px'}}>
                <img src="assets/images/reality1.png" className="img-fluid" alt="" />
              </div>
              <div className="col-md-3 col-12" style={{padding: '0px'}}>
                <p className="text-start">
                  A VR world which is fully interconnected and seamless. Fully
                  accessible from any device: PC & VR clients for user's Desktop
                  or an immersive VR experience on mobile devices.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center reality_flex ">
            <div className="">
                <img src="assets/images/reality2.png" className="img-fluid w-75 " alt="" />
            </div>
            <div className="" >
                <p className="text-center">PC VR Mode <br />Live Inside Somnium World</p>
            </div>
            <div className=" text-end" style={{width: '35%'}}>
            <img src="assets/images/reality3.png" className="img-fluid w-75" alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center botm_txt">
            <h4 className="text-end">Chat, Build, <br />Trade in dedicated Somnium PC client</h4>
            <h4 className="text-start">Oculus Quest <br />Compatible</h4>
          </div>
        </div>
        <div className="token_bottem d-flex justify-content-center align-items-center">
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
