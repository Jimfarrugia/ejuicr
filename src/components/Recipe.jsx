import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import App from "../App";
import { API_URL } from "../constants";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(undefined);

  const user = JSON.parse(localStorage.getItem("user"));
  const headers = {
    Authorization: `Bearer ${user.token}`,
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/api/recipes/${id}`, { headers })
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return <App recipe={recipe} />;
};

export default Recipe;
