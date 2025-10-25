/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { searchRecipes } from "../api/recipeApi";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    const data = await searchRecipes(query);
    setRecipes(data);
    setLoading(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      {!loading && recipes.length === 0 && (
        <p style={{ textAlign: "center" }}>Try searching for a recipe!</p>
      )}

      <div className="recipe-grid">
        {recipes.map((r) => (
          <RecipeCard
            key={r.idMeal}
            id={r.idMeal}
            title={r.strMeal}
            image={r.strMealThumb}
            category={r.strCategory}
            area={r.strArea}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
