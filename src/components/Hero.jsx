import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero bg-yellow-50 h-full px-2 my-16 w-full md:w-3/4 mx-auto rounded-lg">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <p className="text-sm pb-6">Hi! Welcome to Meals 🍕</p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-6">
            Discover all delicious food!
          </h1>
          <img
            src="https://images.squarespace-cdn.com/content/v1/63616c391c5e9d52f62b3801/6668b411-78aa-4954-b791-8544dd67b784/DSC00969-2+%281%29.jpg"
            alt="foods on top of the table"
            className=" mx-auto rounded-lg"
          />
          <p className="max-w-md py-6 mx-auto">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/category" className="btn btn-primary">
            Let's Go!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
