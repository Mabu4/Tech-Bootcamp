import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import PlayerSectionTwo from "../component/section/playertwo";
import CtaSection from "../component/section/cta";

class TeamPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <PageHeader title={"Projekte"} curPage={"Projekte"} />
        <PlayerSectionTwo />
        <Footer />
      </Fragment>
    );
  }
}

export default TeamPage;
