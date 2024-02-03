import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = ({ resInfo }) => {

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resInfo?.info  // destructuring

  // console.log(resInfo);

  return (

    <div className="card-container">
      <div className="card h-[360px] w-52 mx-1 p-2 bg-[#ffe6e4] hover:bg-[#fcdbda] shadow-lg my-2 py-1 rounded-md flex justify-center flex-wrap overflow-y-scroll [&::-webkit-scrollbar]:hidden">

        <img
          src={CLOUDINARY_URL + cloudinaryImageId}
          alt="Restaurant Image" className="w-52 h-40 rounded-md my-1"
        />

        <div className="info-container flex flex-wrap py-2 ">

          <h3 id="res-name" className="res-info font-medium text-md p-1 mx-1">{name}</h3>
          <h4 id="res-cuisine" className="res-info text-xs p-1 mx-1"><span className="text-sm">Cuisines Offered :</span> {cuisines.join(" ")}</h4>
          <h3 id="rating" className="res-info text-xs p-1 mx-1">Rating: {avgRating}</h3>
          <h4 id="avg-price" className="res-info text-xs p-1 mx-1">{costForTwo}</h4>
          <h4 id="delivery-time" className="res-info text-xs p-1 mx-1">{sla?.deliveryTime} minutes</h4>

        </div>

      </div>
    </div>
  );
};

export default RestaurantCard;
