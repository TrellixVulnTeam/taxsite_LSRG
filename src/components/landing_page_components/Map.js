import myMap from "../../images/map.png";
const Map = () => {
  const iconStyling = {
    width: "30px",
    height: "30px",
  };

  return (
    <div className="bg-amber-600 col-span-2 rounded pt-5 flex flex-col md:col-span-1 max-h-80 mb-8">
      <div className="info-logo mb-5 font-serif text-center text-slate-50 flex self-center">
        <h1 style={iconStyling} className="rounded-full border-2 ">
          i
        </h1>
      </div>
      <div
        style={{
          backgroundImage: "url(" + myMap + ")",
        }}
        className="background-map-img md:w-full lg:w-full lg:h-full md:h-full h-96 bg-center bg-cover rounded-b"
      ></div>
    </div>
  );
};
export default Map;
