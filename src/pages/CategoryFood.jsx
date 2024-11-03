import useFetch from "../hooks/useFetch";
import CardList from "../components/CardList";

function CategoryFood() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  return (
    <div className="bg-base-100 my-16">
      <h2 className="text-4xl font-bold mb-14">Category Food</h2>
      <CardList data={data} loading={loading} error={error} />
    </div>
  );
}

export default CategoryFood;
