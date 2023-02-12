import { Component } from "react";

const subtitle = "Wir sind";
const title = "Eine Community aus Entwicklern";
const desc =
  "Gegründet von professionellen Entwicklern haben wir ein Konzept geschaffen um jeden zu einem Softwareentwickler zu machen.";

let AboutListContent = [
  {
    imgUrl: "assets/images/about/counter-6.png",
    imgAlt: "About Icon",
    title: "Kostenfrei",
    desc: "Das gesamte Bootcamp ist kostenfrei und kann ohne versteckte Kosten absolviert werden.",
  },
  {
    imgUrl: "assets/images/about/counter-8.png",
    imgAlt: "About Icon",
    title: "Peer Learning",
    desc: "Du lernst im Team und alleine Projekte umzusetzen, wodurch du genau die Skills lernst, welche du später im Beruf brauchst.",
  },
  {
    imgUrl: "assets/images/about/counter-5.png",
    imgAlt: "About Icon",
    title: "Jobeinstieg",
    desc: "Nach erfolgreichem Abschluss erhältst du ein Zertifikat und hast ein starkes Portfolio erarbeitet, wodurch deinem Jobeinstieg nichts mehr im Wege steht.",
  },
];

class AboutSection extends Component {
  render() {
    const { imgUrl } = this.props;
    return (
      <section className="about-section">
        <div className="container">
          <div className="section-wrapper padding-top">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image">
                  <img src={imgUrl} alt="about-image" />
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="about-wrapper">
                  <div className="section-header">
                    <p>{subtitle}</p>
                    <h2>{title}</h2>
                  </div>
                  <div className="about-content">
                    <p>{desc}</p>
                    <ul className="about-list">
                      {AboutListContent.map((val, i) => (
                        <li className="about-item d-flex flex-wrap" key={i}>
                          <div className="about-item-thumb">
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                          </div>
                          <div className="about-item-content">
                            <h5>{val.title}</h5>
                            <p>{val.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
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

export default AboutSection;
