import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState, useEffect } from "react";

export const useContent = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get(BACKEND_URL + "/api/v1/content", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContent(response.data.content);
      });
  }, []);

  return content;
};
