import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, title, price, _id } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="car service" className="rounded-xl h-52 w-80" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
