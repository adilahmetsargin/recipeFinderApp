/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById } from "../api/recipeApi";
import { FaHeart, FaRegHeart, FaArrowLeft } from "react-icons/fa";
import "./RecipeDetail.css";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
}

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) return;
      const data = await getRecipeById(id);
      setRecipe(data);
    };
    fetchRecipe();

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((r: any) => r.idMeal === id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updated;

    if (isFavorite) {
      updated = favorites.filter((r: any) => r.idMeal !== id);
    } else {
      updated = [...favorites, recipe];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  if (!recipe) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </button>

      <div className="detail-header">
        <h2>{recipe.strMeal}</h2>
        <button onClick={toggleFavorite} className="fav-btn">
          {isFavorite ? (
            <FaHeart color="var(--color-accent)" />
          ) : (
            <FaRegHeart color="gray" />
          )}
        </button>
      </div>

      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="detail-img" />
      <p className="detail-meta">
        {recipe.strCategory} • {recipe.strArea}
      </p>

      <h3>Instructions</h3>
      <p className="instructions">{recipe.strInstructions}</p>

      {recipe.strYoutube && (
        <a
          href={recipe.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-link"
        >
          ▶ Watch on YouTube
        </a>
      )}
    </div>
  );
};

export default RecipeDetail;
