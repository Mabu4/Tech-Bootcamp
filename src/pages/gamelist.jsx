import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GameList from "../component/section/gamelist";
import VideoSection from "../component/section/video";

class GameListSection extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <PageHeader title={"Projekte"} curPage={"Projekte"} />
        <GameList />
        <Footer />
      </Fragment>
    );
  }
}

export default GameListSection;
