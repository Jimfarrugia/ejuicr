import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import ConfirmDelete from "./ConfirmDelete";
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

  const handleConfirmDelete = (index) => {
    const { _id } = recipes[index];
    axios
      .delete(`${API_URL}/api/recipes/${_id}`, { headers })
      .then((response) => {
        const updatedRecipes = recipes.filter((recipe) => recipe._id !== _id);
        setRecipes(updatedRecipes);
      })
      .catch((error) => console.error(error));
  };

  return (
    <RecipesStyled>
      <h3>Recipes</h3>
      <hr />
      {(recipes && recipes.length > 0 && (
        <>
          <div className="list-headings">
            <h5>Title</h5>
            <h5>Last Updated</h5>
            <h5></h5>
          </div>
          <ul>
            {recipes.map((recipe, index) => (
              <RecipeListItem
                key={`recipe-${index}`}
                recipe={recipe}
                index={index}
                handleConfirmDelete={handleConfirmDelete}
              />
            ))}
          </ul>
        </>
      )) || <p>You don't have any saved recipes.</p>}
    </RecipesStyled>
  );
};

const RecipeListItem = ({ recipe, index, handleConfirmDelete }) => {
  const [showDeleteDialogue, setShowDeleteDialogue] = useState(false);

  const handleClickDelete = () => setShowDeleteDialogue(true);

  const handleCancelDelete = () => setShowDeleteDialogue(false);

  return (
    <>
      <li>
        <div>
          <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
        </div>
        <div>{recipe.updatedAt.slice(0, 10)}</div>
        <div>
          <DeleteButton handler={handleClickDelete} index={index} />
        </div>
      </li>
      {showDeleteDialogue && (
        <ConfirmDelete
          index={index}
          name={recipe.name}
          handleCancelDelete={handleCancelDelete}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
    </>
  );
};

export default Recipes;
