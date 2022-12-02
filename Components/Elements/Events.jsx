export default function Events() {
  return (
    <>
      <div className="events_bg">
        <div className="container">
          <div className=" text-white text-center mt-5 mb-5" data-aos="fade-up">
            <h5>STAY SHARP WITH UPCOMING EVENTS </h5>
            <h2>SOMNIUM EVENTS CALENDAR</h2>
            <p>
              Have Fun and Share with your Friends our Weekly and Special Events
            </p>
          </div>
          <div className="row">
            <div className='col-md-1 col-12'></div>
            <div className="col-md-5 col-12">
              <section class="slider_img">
                <div class="scroll_img">
                  <img
                    src="https://parcels.somniumspace.org/parcels/api/Events/39/DownloadFile"
                    alt=""
                    style={{ width: "85%", height: "80%" }}
                  />
                </div>
                <div class="scroll_img middle_img">
                  <img
                    src="https://parcels.somniumspace.org/parcels/api/Events/44/DownloadFile"
                    alt=""
                    style={{ width: "90%", height: "85%" }}
                  />
                </div>
                <div class="scroll_img">
                  <img
                    src="https://parcels.somniumspace.org/parcels/api/Events/62/DownloadFile"
                    alt=""
                    style={{ width: "80%", height: "85%" }}
                  />
                </div>
              </section>
            </div>
            <div className="col-md-5 col-12">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=somnium.space.events%40gmail.com"
                width="500"
                height="400"
                scrolling="no"
                style={{border: '0px', borderRadius: '5px'}}
              ></iframe>
              <div className="mt-5 d-flex justify-content-between">
                <button className="btn1">Add Event</button>
                <button className="btn2">Export Google Calender</button>
              </div>
            </div>
            <div className='col-md-1 col-12'></div>
          </div>
        </div>
      </div>
    </>
  );
}
