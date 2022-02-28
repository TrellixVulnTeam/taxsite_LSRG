// importing components
import Header from "../components/Header";
import RegisterAd from "../components/landing_page_components/RegisterAd";
import FriendlyAd from "../components/landing_page_components/FriendlyAd";
import YelpComp from "../components/landing_page_components/yelpComponent";
import Map from "../components/landing_page_components/Map";
import Footer from "../components/Footer";

const LandingPage = ({
  yelpData,
  menu,
  setMenu,
  menuIcon,
  setMenuIcon,
  menuToggle,
  footerStyle,
}) => {
  return (
    <div className="landing-page ">
      <section style={footerStyle} className="landing-page-container ">
        <Header
          menu={menu}
          setMenu={setMenu}
          menuIcon={menuIcon}
          setMenuIcon={setMenuIcon}
          menuToggle={menuToggle}
        />
        <div className="landing-content-area grid gap-4 mt-4">
          <div className="page-top grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-4 mr-5 ml-5 md:mr-10 md:ml-10 lg:mr-20 lg:ml-20">
            <RegisterAd />
            <FriendlyAd />
          </div>
          <div className="gap-4 page-mid grid grid-cols-2 md:grid-cols-3 ml-5 mr-5 md:mr-10 md:ml-10 lg:mr-20 lg:ml-20">
            <YelpComp yelpData={yelpData} />
            <Map />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
