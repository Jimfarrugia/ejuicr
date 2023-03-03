import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSave } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { SaveRecipeStyled } from "./styled/SaveRecipe.styled";
import { API_URL } from "../constants";

const SaveRecipe = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <SaveRecipeStyled>
      <h3>Save Recipe</h3>
      <hr />
      {(user && (
        <>
          <div className="form-row">
            <div>
              <div className="input-border">
                <input type="text" />
              </div>
            </div>
            <div>
              <button type="button" className="green">
                <FontAwesomeIcon icon={faSave} />
                Save Recipe
              </button>
            </div>
          </div>
        </>
      )) || (
        <>
          <div className="row">
            <div>
              <p>Sign in to your account to save this recipe for next time.</p>
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
                  <button type="button">
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
