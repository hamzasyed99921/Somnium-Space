import Link from "next/link";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top "
        style={{ zIndex: "1" }}
        id="navbar_top"
      >
        <div className="container-fluid">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <Link className="navbar-brand" href="/">
                <img
                  src="assets/images/nav-logo.png"
                  className="img-fluid "
                  alt="logo"
                />
              </Link>
              <ul className="d-flex align-items-center justify-content-between">
                <li className="me-3">BlockChain</li>
                <li className="me-3">Mechanics</li>
                <li className="me-3">Partners</li>
                <li className="me-3">Events</li>
              </ul>
              <div className="ms-5">
                <button className="me-3 btn1">Explore Somnium Map</button>
                <button className="me-3 btn2">Marketplace</button>
              </div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ width: "73%" }}
            >
              <h3 className="login me-2">Login</h3>
              <h3 className="signup">Sign Up</h3>
              <div className="ms-3">
                <FaDiscord className="icon" size={25} color="#fff" />
                <FaFacebookF className="icon" size={25} color="#fff" />
                <FaInstagram className="icon" size={25} color="#fff" />
                <FaTelegramPlane className="icon" size={25} color="#fff" />
                <FaTwitter className="icon" size={25} color="#fff" />
                <FaYoutube className="icon" size={25} color="#fff" />
              </div>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="nav_right d-flex flex-column w-100">
              <div className="">
                <p className="para1">Download VR Client</p>
              </div>
              <div className="">
                <p className="para2">Join SOMNIUM</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
