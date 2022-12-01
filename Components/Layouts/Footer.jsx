import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column">
              <div>
                <img
                  src="assets/images/nav-logo.png"
                  className="img-fluid "
                  alt="logo"
                />
              </div>
              <div className="mt-3">
                <p style={{ fontSize: "12px", color: "#fff" }}>
                  © 2022 by Somnium Space LTD. Somnium Space and <br /> Somnium
                  Space Logo are trademarks of Somnium <br /> Space LTD. All
                  other trademarks are the property of <br /> their respective
                  owners. All rights reserved.
                </p>
              </div>
            </div>
            <div className="footer_txt row w-50">
              <div className="col-md-3 mt-3">
                <h3>Get Somnium</h3>
                <h3>Events</h3>
              </div>
              <div className="col-md-3 mt-3">
                <h3>Partners</h3>
                <h3>Support</h3>
              </div>
              <div className="col-md-3 mt-3">
                <h3>Terms of Service</h3>
                <h3>Privacy Policy</h3>
              </div>
              <div className="col-md-3 mt-3">
                <h3>FAQ</h3>
                <h3>Contact</h3>
              </div>
            </div>
            <div className="footer_icons " style={{width: '20%'}}>
              <div className="d-flex justify-content-around">
                <FaTelegramPlane className="icon" size={50} color="#fff" />
                <FaInstagram className="icon" size={50} color="#fff" />
                <FaYoutube className="icon" size={50} color="#fff" />
              </div>
              <div className="d-flex justify-content-around mt-3">
                <FaTwitter className="icon" size={50} color="#fff" />
                <FaDiscord className="icon" size={50} color="#fff" />
                <FaFacebookF className="icon" size={50} color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
