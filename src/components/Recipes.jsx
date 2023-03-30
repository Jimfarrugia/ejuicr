import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import ConfirmDelete from "./ConfirmDelete";
import Spinner from "./Spinner";
import { RecipesStyled } from "./styled/Recipes.styled";
import { API_URL } from "../constants";

const Recipes = () => {
  const [recipes, setRecipes] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isSortByTitle, setIsSortByTitle] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const headers = {
    Authorization: `Bearer ${user.token}`,
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/api/recipes`, { headers })
      .then((response) => {
        const sortedRecipes = response.data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setRecipes(sortedRecipes);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const handleConfirmDelete = (index) => {
    setIsLoading(true);
    const { _id } = recipes[index];
    axios
      .delete(`${API_URL}/api/recipes/${_id}`, { headers })
      .then((response) => {
        const updatedRecipes = recipes.filter((recipe) => recipe._id !== _id);
        setRecipes(updatedRecipes);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const handleSortByTitle = () => {
    const sortedRecipes = [...recipes].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setRecipes(sortedRecipes);
    setIsSortByTitle(true);
  };

  const handleSortByDate = () => {
    const sortedRecipes = [...recipes].sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
    setRecipes(sortedRecipes);
    setIsSortByTitle(false);
  };

  return (
    <RecipesStyled>
      <h3>Recipes</h3>
      <hr />
      {isLoading && <Spinner />}
      {!isLoading &&
        ((recipes && recipes.length > 0 && (
          <>
            <div className="list-headings">
              <h5 onClick={handleSortByTitle}>
                <span>
                  Title {isSortByTitle && <FontAwesomeIcon icon={faSortDown} />}
                </span>
              </h5>
              <h5 onClick={handleSortByDate}>
                <span>
                  Last Updated{" "}
                  {!isSortByTitle && <FontAwesomeIcon icon={faSortDown} />}
                </span>
              </h5>
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
        )) || <p>You don't have any saved recipes.</p>)}
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
