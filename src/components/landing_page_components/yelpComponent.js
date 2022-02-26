import YelpIcon from "../../images/yelpIcon.png";

const YelpComp = ({ yelpData }) => {
  let newYelpData = yelpData.slice(0, 3);

  return (
    <div className="col-span-2">
      <img
        className="bg-slate-100 pl-5 pr-5 rounded"
        src={YelpIcon}
        alt=""
        width="70rem"
      />
      {newYelpData.map((data, index) => {
        return (
          <div key={index} className="text-slate-50 flex mb-6 mt-6">
            <img
              src={data.image}
              className="rounded-full border-amber-500 border mr-4 self-start"
              alt="profile picture"
              width="50px"
            />
            <div className="text-area-yelp">
              <h1 className="font-bold font-serif">{data.name}</h1>
              <p className="text-sm">{data.location}</p>
              <p className="text-xs">{data.date_created}</p>
              <p className="text-sm">{data.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default YelpComp;
