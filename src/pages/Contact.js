import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = ({ footerStyle, sideBarStyle }) => {
  return (
    <>
      <>
        <section style={footerStyle} className="main-contact-section">
          <Header />
          <div className="contact-content-area flex flex-col mt-4 md:mt-4 ml-5 mr-5 md:ml-10 md:mr-10 lg:mr-20 lg:ml-20 gap-4">
            <div
              className="backgroundSidebarImg w-full h-36 h-28 lg:w h-auto bg-cover rounded bg-center"
              style={sideBarStyle}
            ></div>
            <div className="main-contact-content flex flex-col pt-4 pb-8 bg-amber-600 rounded ">
              <form className="form-area flex flex-col ml-5 mr-5 text-slate-50">
                <h1 className="text-4xl font-bold text-center">Contact Us</h1>
                <input className="mb-4" type="text" />
                <input className="mb-4" type="email" />
                <textarea name="" id="" cols="20" rows="4"></textarea>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </>
  );
};

export default Contact;
