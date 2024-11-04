import { API_BASE_URL } from "../constants/constants";

export const fetchBudget = async (): Promise<number> => {
  const response = await fetch(`${API_BASE_URL}/budget`);
  if (!response.ok) {
    throw new Error("Failed to fetch budget");
  }

  let budgetNum = response.json().then((jsonResponse) => {
    console.log("data in fetchBudget", jsonResponse);
    return jsonResponse.data;
  });

  console.log("response in fetchExpenses", budgetNum);
  return budgetNum;
};
