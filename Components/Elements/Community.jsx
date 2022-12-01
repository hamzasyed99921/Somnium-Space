import {
    FaDiscord,
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";

export default function Community() {
    
  return (
    <>
      <div className="community_bg position-relative">
        <div className="container">
          <div className=" text-white text-center mt-5 mb-5">
            <h5>KEEP IN TOUCH WITH </h5>
            <h2>SOMNIUM COMMUNITY</h2>
            <p>
            Share your thoughts with Us and the World
            </p>
          </div>

        </div>
        <div className="footer_bottem d-flex justify-content-center align-items-center" >
                    <div className="d-flex justify-content-between align-items-center w-50 py-3">
                        <FaTelegramPlane  size={50} color='#fff'/>
                        <FaInstagram size={50} color='#fff'/>
                        <FaYoutube size={50} color='#fff'/>
                        <FaTwitter size={50} color='#fff'/>
                        <FaDiscord size={50} color='#fff'/>
                        <FaFacebookF size={50} color='#fff'/>
                    </div>
            </div>
      </div>
    </>
  );
}
