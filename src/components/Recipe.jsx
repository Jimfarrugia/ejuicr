import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import App from "../App";
import Spinner from "./Spinner";
import { API_URL } from "../constants";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const headers = {
    Authorization: `Bearer ${user.token}`,
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/api/recipes/${id}`, { headers })
      .then((response) => {
        setRecipe(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return <>{isLoading ? <Spinner /> : <App recipe={recipe} />}</>;
};

export default Recipe;
