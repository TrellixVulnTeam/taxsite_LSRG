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
}) => {
  return (
    <div className="landing-page grid gap-4">
      <Header
        menu={menu}
        setMenu={setMenu}
        menuIcon={menuIcon}
        setMenuIcon={setMenuIcon}
        menuToggle={menuToggle}
      />
      <div className="page-top grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mr-5 ml-5 md:mr-10 md:ml-10 lg:mr-20 lg:ml-20">
        <RegisterAd />
        <FriendlyAd />
      </div>
      <div className="gap-4 page-mid grid grid-cols-2 md:grid-cols-3 ml-5 mr-5 md:mr-10 md:ml-10 lg:mr-20 lg:ml-20">
        <YelpComp yelpData={yelpData} />
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
