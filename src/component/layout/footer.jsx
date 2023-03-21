import { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "../section/rating";
import SocialMedia from "../section/socialmedia";

// const postTitle = "Top jackpot games";
const newsTitle = "Rechtliches";

let FooterItemList = [
  {
    imgUrl: "assets/images/footer/01.jpg",
    imgAlt: "Footer Blog Post",
    title: "free Poker Game",
    proName: "Poker",
    proPrice: "$230",
  },
  {
    imgUrl: "assets/images/footer/02.jpg",
    imgAlt: "Footer Blog Post",
    title: "CLUB Poker Game",
    proName: "Poker",
    proPrice: "$230",
  },
  {
    imgUrl: "assets/images/footer/03.jpg",
    imgAlt: "Footer Blog Post",
    title: "ROYAL Poker Game",
    proName: "Poker",
    proPrice: "$300",
  },
];

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsName: "",
      newsEmail: "",
    };
  }
  render() {
    return (
      <footer className="footer-section">
        <div className="footer-top">
          <div className="container">
            <div className="row g-3 justify-content-center g-lg-0">
              {/* <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/01.png" alt="Phone-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Phone Number : +88019 339 702 520</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
              <div className="col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img
                        src="assets/images/footer/icons/02.png"
                        alt="email-icon"
                      />
                    </div>
                    <div className="lab-content">
                      <span>Email : info@tech-bootcamp.de</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-content text-center">
                  <p>
                    &copy;2023 <Link to="/">Tech - Bootcamp</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
