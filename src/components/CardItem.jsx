import { Link } from "react-router-dom";

function CardItem({ image, title, link }) {
  return (
    <Link to={link}>
      <div className="card bg-base-100 shadow-xl h-[304,4px]">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl h-[172,4px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title line-clamp-1">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default CardItem;
