import CardItem from "./CardItem";

function CardList({ data, loading, error }) {
  return (
    <div className="w-full">
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
          {data.categories.map((category) => (
            <CardItem
              key={category.idCategory}
              image={category.strCategoryThumb}
              title={category.strCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardList;
