import { Component } from "react";
import { Link } from "react-router-dom";

const title = (
  <h2 className="mb-3">
    Tritt unserem <span className="theme-color text-uppercase">Bootcamp</span>{" "}
    bei und werde professioneller Entwickler!
  </h2>
);

const subtitle = "Fang noch heute an";

const desc =
  "Lerne mit einem bewährten Konzept alle Dinge die für den Einstieg in die IT notwendig sind. Nach dem Abschluss hindert dich nichts daran einen Job als Entwickler zu bekommen.";

const btnText = "Kostenfrei beitreten";

class CtaSection extends Component {
  render() {
    const { imgUrl } = this.props;
    return (
      <section className="cta-section padding-bottom">
        <div className="container">
          <div className="cta-wrapper item-layer">
            <div
              className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0"
              style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="cta-content">
                    <p className="theme-color text-uppercase ls-2">
                      {subtitle}
                    </p>
                    {title}
                    <p className="mb-4">{desc}</p>
                    <Link to="/signup" className="default-button">
                      <span>
                        {btnText} <i className="icofont-circled-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cta-thumb text-end">
                    <img src={imgUrl} alt="gamer-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CtaSection;
