import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    try {
      setErrorMessage("");
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "detroit"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Ops! Something went Wrong");
      console.log(err);
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
