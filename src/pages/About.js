import AboutContent from "../components/about_components/AboutContent";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="main-about-content text-slate-50 bg-amber-600 ml-5 mr-5 md:ml-5 md:ml-10 md:mr-10 rounded pt-4 pb-4 mt-20">
        <AboutContent />
      </div>
    </>
  );
};

export default About;
