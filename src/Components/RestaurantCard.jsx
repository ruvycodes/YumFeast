const RestaurantCard = ({resInfo}) => {

  console.log(resInfo);

  return (
    
      <div className="card-container">
        <div className="card">
            
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${resInfo.info.cloudinaryImageId}`}
            alt=""
          />

          <div className="info-container">

          <h3 id="res-name" className="res-info">{resInfo.info.name}</h3>
          <h4 id="res-cuisine" className="res-info">{resInfo.info.cuisines.join(" ")}</h4>
          <h3 id="rating" className="res-info">{resInfo.info.avgRating}</h3>
          <h4 id="avg-price" className="res-info">{resInfo.info.costForTwo}</h4>
          <h4 id="delivery-time" className="res-info">{resInfo.info.sla.deliveryTime} minutes</h4>

          </div>

        </div>
      </div>
  );
};

export default RestaurantCard;
