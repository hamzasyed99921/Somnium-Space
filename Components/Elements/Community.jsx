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
          <div className=" text-white text-center mt-5 mb-5" data-aos="fade-up">
            <h5>KEEP IN TOUCH WITH </h5>
            <h2>SOMNIUM COMMUNITY</h2>
            <p>Share your thoughts with Us and the World</p>
          </div>
          <div className="py-2 text-center"><FaDiscord className="icon" size={50} color="#fff"/></div>
          <div className="community_video">
            <iframe
              src="https://e.widgetbot.io/channels/494994753146847233/496817347211034630"
              width="1200"
              height="400"
              
              style={{border: '2px solid gray'}}
            ></iframe>
          </div>
          <div className="row bottom_video">
            <div className="col-md-6 col-12">
            <div className="py-2 text-center"><FaTwitter className="icon" size={50} color="#fff"/></div>
              <iframe
                id="twitter-widget-1"
                scrolling="no"
                frameborder="0"
                allowtransparency="true"
                allowfullscreen="true"
                class=""
                style={{
                  position: "static",
                  visibility: "visible",
                  width: "500px",
                  height: "600px",
                  display: "block",
                  flexGrow: "1",
                  
                }}
                title="Twitter Timeline"
                src="https://syndication.twitter.com/srv/timeline-profile/screen-name/somniumspace?dnt=false&amp;embedId=twitter-widget-1&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19ibHVlX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;maxHeight=600px&amp;origin=https%3A%2F%2Fsomniumspace.com%2F&amp;sessionId=853b8a8234c39c8530281449ac7b99c3cea57dbf&amp;showHeader=true&amp;showReplies=false&amp;theme=dark&amp;transparent=false&amp;widgetsVersion=a3525f077c700%3A1667415560940"
              ></iframe>
            </div>
            <div className="col-md-6 col-12">
            <div className="py-2 text-center"><FaFacebookF className="icon" size={50} color="#fff"/></div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSomniumSpace&amp;tabs=timeline&amp;width=500&amp;height=600&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
                width="500"
                height="600"
                scrolling="no"
                frameborder="0"
                allow="encrypted-media"
                style={{borderRadius: '5px'}}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer_bottem d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-between align-items-center w-50 py-3">
            <FaTelegramPlane size={50} color="#fff" />
            <FaInstagram size={50} color="#fff" />
            <FaYoutube size={50} color="#fff" />
            <FaTwitter size={50} color="#fff" />
            <FaDiscord size={50} color="#fff" />
            <FaFacebookF size={50} color="#fff" />
          </div>
        </div>
      </div>
    </>
  );
}
