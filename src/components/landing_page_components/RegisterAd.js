import LaptopImg from "../../images/computer-1185626_1280.jpg";

const RegisterAd = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(" + LaptopImg + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };
  return (
    <div className="col-span-2 register-ad-container text-slate-50 bg-amber-600 rounded flex justify-between">
      <div className=" flex flex-col justify-between take-back-section ml-2  pt-2 mr-2">
        <h1 className="font-serif font-bold text-xl md:text-2xl md:mb-2 lg:text-3xl">
          Take Back What's Yours
        </h1>
        <p className="text-xs md:text-md md:mb-2 lg:text-lg lg:mb-0">
          File your taxes with us today by scheduling a session with one of our
          tax professionals.
        </p>
        <button className=" flex start max-w-max	bg-sky-600 hover:bg-sky-700 mt-2 text-sm md:text-lg pt-2 pb-2 pl-4 pr-4 rounded mb-2 lg:text-xl">
          Register <strong>Now</strong>
        </button>
      </div>
      <div
        style={backgroundImageStyle}
        className="comp-img rounded-l-none rounded w-2/5 md:w-2/4"
      ></div>
    </div>
  );
};
export default RegisterAd;
