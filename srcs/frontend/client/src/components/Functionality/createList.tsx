import {JWT } from "../../data/DataFetching";
import { List } from "../../context/ContextScheme";

export const createList = async (list: List) => {
  const response = await fetch(`http://localhost:5002/api/v1/lists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JWT}`,
    },
    body: JSON.stringify(list),
  });

  return await response.json();
};
