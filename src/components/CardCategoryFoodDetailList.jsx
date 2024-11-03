import CardItem from "./CardItem";

function CardCategoryFoodDetailList({ data, loading, error }) {
  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-[600px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center  h-[600px] w-full md:w-[600px] mx-auto">
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
    <div className="w-full">
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
          {data.meals.map((meal) => (
            <CardItem
              key={meal.idMeal}
              image={meal.strMealThumb}
              title={meal.strMeal}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardCategoryFoodDetailList;
