import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSave } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Login from "./Login";
import { SaveRecipeStyled } from "./styled/SaveRecipe.styled";
import { API_URL } from "../constants";

const SaveRecipe = ({
  targetPg,
  targetVg,
  targetNicStrength,
  targetAmount,
  nicConfig,
  flavors,
}) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [recipeTitle, setRecipeTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const handleClickLoginWithEmail = () => setShowLoginForm(true);

  const handleClickLoginCancel = () => setShowLoginForm(false);

  const handleClickSaveRecipe = async () => {
    setError("");
    setSuccess("");
    if (!recipeTitle) {
      return setError("Recipe title must not be blank.");
    }
    const recipe = {
      name: recipeTitle,
      strength: targetNicStrength,
      base: {
        pg: targetPg,
        vg: targetVg,
      },
      amount: targetAmount,
      ingredients: {
        nicotine: {
          strength: nicConfig.strength,
          base: {
            pg: nicConfig.pg,
            vg: nicConfig.vg,
          },
        },
        flavors: flavors.map((flavor) => ({
          name: flavor.name,
          percentage: flavor.percentage,
          base: {
            pg: flavor.pg,
            vg: flavor.vg,
          },
        })),
      },
    };
    await axios
      .post(`${API_URL}/api/recipes`, recipe, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setSuccess(`"${response.data.name}" has been saved to your recipes.`);
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.message || "Failed to save recipe.");
      });
  };

  return (
    <SaveRecipeStyled>
      <h3>Save Recipe</h3>
      <hr />
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      {(user && (
        <>
          <div className="form-row">
            <div>
              <div className="input-border">
                <input
                  type="text"
                  placeholder="Recipe Title"
                  onChange={(e) => setRecipeTitle(e.target.value.trim())}
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="green"
                onClick={handleClickSaveRecipe}
              >
                <FontAwesomeIcon icon={faSave} />
                Save Recipe
              </button>
            </div>
          </div>
        </>
      )) ||
        (showLoginForm && (
          <>
            <Login handleClickBack={handleClickLoginCancel} />
          </>
        )) || (
          <>
            <div className="row">
              <div>
                <p>
                  Sign in to your account to save this recipe for next time.
                </p>
              </div>
              <div>
                <ul>
                  <li>
                    <form action={`${API_URL}/auth/google`}>
                      <button type="submit">
                        <FontAwesomeIcon icon={faGoogle} />
                        Sign in with Google
                      </button>
                    </form>
                  </li>
                  <li>
                    <form action={`${API_URL}/auth/twitter`}>
                      <button type="submit">
                        <FontAwesomeIcon icon={faTwitter} />
                        Sign in with Twitter
                      </button>
                    </form>
                  </li>
                  <li>
                    <button type="button" onClick={handleClickLoginWithEmail}>
                      <FontAwesomeIcon icon={faEnvelope} />
                      Sign in with Email
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
    </SaveRecipeStyled>
  );
};

export default SaveRecipe;