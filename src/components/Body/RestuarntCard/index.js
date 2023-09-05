import { CDN_URL } from "../../../utils/constants";

const RestuarntCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, deliveryTime, avgRating } = resData?.data
    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

export default RestuarntCard;