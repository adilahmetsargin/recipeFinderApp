import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchRecipes = async (query: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/search.php?s=${query}`);
    return res.data.meals || [];
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
};

export const getRecipeById = async (id: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return res.data.meals?.[0] || null;
  } catch (err) {
    console.error("API Error:", err);
    return null;
  }
};
