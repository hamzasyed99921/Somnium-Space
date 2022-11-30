export default function Blockchain() {
  return (
    <>
      <div className="blockchain_bg ">
        <div className="container">
          <div className="block_top position-relative">
            <img
              src="assets/images/blokchain1.png"
              className="img-fluid"
              alt=""
            />
            <div className="block_txt flex-column d-flex">
              <h4 className="mb-3">True Ownership of In-Game Assets on</h4>
              <h3>ETHEREUM & SOLANA BLOCKCHAIN</h3>
              <div className="d-flex flex-column mt-5">
                <div className="d-flex  justify-content-between">
                  <img
                    src="assets/images/block1.png"
                    className="img-fluid"
                    style={{ width: "20%", height: "20%" }}
                    alt=""
                  />
                  <h5 className="text-white">in Partnership with</h5>
                  <img
                    src="assets/images/block2.png"
                    className="img-fluid"
                    style={{ width: "20%", height: "20%" }}
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src="assets/images/block3.png"
                    className="img-fluid"
                    style={{ width: "20%", height: "20%" }}
                    alt=""
                  />
                  <img
                    src="assets/images/block4.png"
                    className="img-fluid"
                    style={{ width: "20%", height: "20%" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
