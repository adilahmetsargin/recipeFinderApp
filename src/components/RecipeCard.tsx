import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./RecipeCard.css";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  category?: string;
  area?: string;
  fromFavorites?: boolean;
  favorites?: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
  }[];
}

const RecipeCard = ({
  id,
  title,
  image,
  category,
  area,
  fromFavorites,
  favorites,
}: RecipeCardProps) => {
  const removeFavorite = (id: string) => {
    const updated = favorites?.filter((r) => r.idMeal !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <motion.div
      className="recipe-card"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
    >
      <img src={image} alt={title} />
      <div className="recipe-info">
        <h3>{title}</h3>
        <p>
          {category} • {area}
        </p>
        <div className="button-group">
          <Link to={`/recipe/${id}`} className="details-btn">
            View Details
          </Link>

          {fromFavorites && (
            <button className="remove-btn" onClick={() => removeFavorite(id)}>
              Remove
            </button>
          )}
          <div />
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
