import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = ({resInfo}) => {

  const {cloudinaryImageId , name , cuisines , avgRating , costForTwo , sla} = resInfo?.info  // destructuring

  // console.log(resInfo);

  return (
    
      <div className="card-container">
        <div className="card">
            
          <img
            src={CLOUDINARY_URL + cloudinaryImageId}
            alt="Restaurant Image"
          />

          <div className="info-container">

          <h3 id="res-name" className="res-info">{name}</h3>
          <h4 id="res-cuisine" className="res-info">{cuisines.join(" ")}</h4>
          <h3 id="rating" className="res-info">{avgRating}</h3>
          <h4 id="avg-price" className="res-info">{costForTwo}</h4>
          <h4 id="delivery-time" className="res-info">{sla?.deliveryTime} minutes</h4>

          </div>

        </div>
      </div>
  );
};

export default RestaurantCard;
