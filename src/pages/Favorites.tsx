import { useEffect, useState } from "react";
import "./Favorites.css";
import RecipeCard from "../components/RecipeCard";

interface Favorite {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(data);
  }, []);


  if (favorites.length === 0) {
    return <p style={{ textAlign: "center" }}>No favorites yet! ❤️</p>;
  }

  return (
    <div className="favorites-container">
      <h2>Your Favorite Recipes</h2>
      <div className="recipe-grid">
        {favorites.map((r) => (
          <RecipeCard id={r.idMeal} title={r.strMeal} image={r.strMealThumb} category={r.strCategory} area={r.strArea} fromFavorites={true} favorites={favorites} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
