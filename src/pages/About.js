import AboutContent from "../components/about_components/AboutContent";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = ({ footerStyle, sideBarStyle }) => {
  return (
    <>
      <section style={footerStyle} className="main-about-section ">
        <Header />
        <div className="about-content-area flex flex-col mt-4 md:mt-4 ml-5 mr-5 md:ml-10 md:mr-10 lg:mr-20 lg:ml-20 gap-4">
          <div
            className="backgroundSidebarImg w-full h-36 h-28 lg:w h-auto bg-cover rounded bg-center"
            style={sideBarStyle}
          ></div>
          <div className="main-about-content pt-4 pb-8 text-slate-50 bg-amber-600 rounded col-span-2 mb-8  lg:mb-8 row-span-1">
            <AboutContent />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
