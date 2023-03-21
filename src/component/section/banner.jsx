import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Werde Softwareentwickler";
const desc = "In 3-9 Monaten zum Softwareentwickler";
const btnText = "Kostenfrei beitreten";

class BannerSection extends Component {
  render() {
    return (
      <section
        className="banner-section"
        style={{ backgroundImage: "url(/assets/images/banner/bgNew.jpeg)" }}
      >
        <div className="container">
          <div className="">
            <div className="banner-content text-center">
              <h2 className="fw-normal theme-color mb-4">{title}</h2>
              <h1 className="mb-4">Kostenfreies Bootcamp</h1>
              <p>{desc}</p>
              <Link to="/login" className="default-button reverse-effect">
                <span>
                  {btnText} <i className="icofont-play-alt-1"></i>
                </span>{" "}
              </Link>
            </div>
            <div className="banner-thumb d-flex flex-wrap justify-content-center justify-content-between align-items-center align-items-lg-end">
              <div className="banner-thumb-img ml-xl-50-none">
                <Link to="/team-single">
                  <img src="assets/images/team/1_new.png" alt="banner-thumb" />
                </Link>
              </div>
              {/* <div className="banner-thumb-vs">
                <img src="assets/images/banner/vs.png" alt="banner-thumb" />
              </div> */}
              <div className="banner-thumb-img mr-xl-50-none">
                <Link to="/team-single">
                  <img src="assets/images/team/4.png" alt="banner-thumb" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BannerSection;
