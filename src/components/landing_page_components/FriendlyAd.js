import FriendlyPic from "../../images/friendlyPic.jpg";

const friendlyImgStyles = {
  backgroundImage: "url(" + FriendlyPic + ")",
  width: "100%",
};

const FriendlyAd = () => {
  return (
    <div className=" col-span-2 md:col-span-1 friendly-container flex font-serif text-slate-50">
      <div
        className="friendly-img rounded bg-cover bg-center flex flex-col justify-between text-xl md:text-2xl"
        style={friendlyImgStyles}
      >
        <h3 className="mt-8 ml-4 md:mt-4">Fast Service</h3>
        <h3 className="ml-4 mt-4 mb-4 md:mb-2">Fair Fees</h3>
        <h3 className="ml-4 mb-2 pb-4 md:mb-0 ">Family friendly enviornment</h3>
      </div>
    </div>
  );
};
export default FriendlyAd;
