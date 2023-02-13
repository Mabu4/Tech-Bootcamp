import { Component } from "react";
import { NavLink, Link } from "react-router-dom";

const contactNumber = "+800-123-4567 6587";
const contactAddress = "Beverley, New York 224 USA";

class Header extends Component {
  menuTrigger() {
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector(".header-bar").classList.toggle("active");
  }
  menuTriggerTwo() {
    document.querySelector(".header-top").classList.toggle("open");
    // document.querySelector('.header-bar').classList.toggle('active')
  }

  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 200) {
        document
          .querySelector(".header-section")
          .classList.add(["header-fixed"], ["fadeInUp"]);
      } else {
        document
          .querySelector(".header-section")
          .classList.remove(["header-fixed"], ["fadeInUp"]);
      }
    });

    return (
      <header className="header-section">
        <div className="container">
          <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
            <div className="brand-logo d-none d-lg-inline-block">
              <div className="logo">
                <Link to="/">
                  <img src="assets/images/logo/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="header-menu-part">
              <div className="header-bottom">
                <div className="header-wrapper justify-content-lg-end">
                  <div className="mobile-logo d-lg-none">
                    <Link to="/">
                      <img src="assets/images/logo/logo.png" alt="logo" />
                    </Link>
                  </div>
                  <div className="menu-area">
                    <ul className="menu">
                      <li className="">
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li className="">
                        <NavLink to="/game-list">Akademie</NavLink>
                      </li>
                      <li className="">
                        <NavLink to="/blog">Blog</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Contact</NavLink>
                      </li>
                    </ul>
                    <Link to="/login" className="login">
                      <i className="icofont-user"></i> <span>LOG IN</span>{" "}
                    </Link>
                    <Link to="/signup" className="signup">
                      <i className="icofont-users"></i> <span>SIGN UP</span>
                    </Link>

                    <div
                      className="header-bar d-lg-none"
                      onClick={this.menuTrigger}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div
                      className="ellepsis-bar d-lg-none"
                      onClick={this.menuTriggerTwo}
                    >
                      <i className="icofont-info-square"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
