import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingIntro = () => {
  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="bg-color-2 i-boxed icon_wallet"
              ></i>
              <div className="text">
                <h4
                  className=""
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  Set up your wallet
                </h4>
                <p
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="wm icon_wallet"
              ></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="bg-color-2 i-boxed icon_cloud-upload_alt"
              ></i>
              <div className="text">
                <h4
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className=""
                >
                  Add your NFT's
                </h4>
                <p
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="wm icon_cloud-upload_alt"
              ></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="bg-color-2 i-boxed icon_tags_alt"
              ></i>
              <div className="text">
                <h4
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className=""
                >
                  Sell your NFT's
                </h4>
                <p
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="wm icon_tags_alt"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AOS.init();
export default LandingIntro;
