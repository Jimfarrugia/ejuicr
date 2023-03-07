import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import { RecipesStyled } from "./styled/Recipes.styled";
import { API_URL } from "../constants";

const Recipes = () => {
  const [recipes, setRecipes] = useState(undefined);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const headers = {
    Authorization: `Bearer ${user.token}`,
  };

  useEffect(() => {
    if (!user) return navigate("/");
    axios
      .get(`${API_URL}/api/recipes`, { headers })
      .then((response) => {
        const sortedRecipes = response.data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setRecipes(sortedRecipes);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleClickDelete = (index) => {
    const { _id } = recipes[index];
    axios
      .delete(`${API_URL}/api/recipes/${_id}`, { headers })
      .then((response) => {
        const updatedRecipes = recipes.filter((recipe) => recipe._id !== _id);
        setRecipes(updatedRecipes);
      })
      .catch((error) => console.error(error));
  };

  // link to recipe calculator

  return (
    <RecipesStyled>
      <h3>Recipes</h3>
      <hr />
      <div className="list-headings">
        <h5>Title</h5>
        <h5>Last Updated</h5>
        <h5></h5>
      </div>
      <ul>
        {recipes &&
          recipes.map((recipe, index) => (
            <li key={`recipe-${index}`}>
              <div>
                <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
              </div>
              <div>{recipe.updatedAt.slice(0, 10)}</div>
              <div>
                <DeleteButton handler={handleClickDelete} index={index} />
              </div>
            </li>
          ))}
      </ul>
    </RecipesStyled>
  );
};

export default Recipes;
