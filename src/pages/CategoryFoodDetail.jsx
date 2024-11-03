import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CardCategoryFoodDetailList from "../components/CardCategoryFoodDetailList";

function CategoryFoodDetail() {
  const { categoryName } = useParams();

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  return (
    <div className="bg-base-100 my-16 px-2">
      <h2 className="text-4xl font-bold mb-14">{categoryName} Meals</h2>
      <CardCategoryFoodDetailList data={data} loading={loading} error={error} />
    </div>
  );
}

export default CategoryFoodDetail;
