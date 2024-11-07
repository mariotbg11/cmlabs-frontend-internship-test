import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function FoodDetail() {
  const { mealId } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-[700px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center  h-[700px] w-full md:w-[600px] mx-auto">
        <div
          role="alert"
          className="alert alert-error flex flex-col md:flex-row justify-center items-center rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Error: Something went wrong, Please refresh or try again later
          </span>
        </div>
      </div>
    );

  return (
    <div className="bg-base-100 my-16 px-2">
      <h2 className="text-4xl font-bold mb-14">{data.meals[0].strMeal}</h2>
      <img
        src={data.meals[0].strMealThumb}
        alt={data.meals[0].strMeal}
        className="rounded-xl w-full max-w-lg mx-auto mb-8"
      />
      <p className="mb-6">{data.meals[0].strInstructions}</p>
      <div className="flex items-center mb-6 gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6h.008v.008H6V6Z"
          />
        </svg>

        <p>: {data.meals[0].strTags}</p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Ingredients</h3>
        <ul className="list-disc list-inside">
          {Array.from({ length: 20 }, (_, i) => {
            const ingredient = data.meals[0][`strIngredient${i + 1}`];
            const measure = data.meals[0][`strMeasure${i + 1}`];
            return ingredient ? (
              <li key={i}>
                {measure} - {ingredient}
              </li>
            ) : null;
          })}
        </ul>
      </div>

      {data.meals[0].strYoutube && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Tutorial</h3>
          <iframe
            src={`https://www.youtube.com/embed/${
              data.meals[0].strYoutube.split("v=")[1]
            }`}
            title={data.meals[0].strMeal}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto w-full md:w-[800px] h-[300px] md:h-[500px]"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default FoodDetail;
