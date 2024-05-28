import { IData } from "./types";

export const fetchData = async () => {
  const response = await fetch("https://logiclike.com/docs/courses.json");
  if (!response.ok) {
    throw new Error(`error status ${response.status}`);
  }
  return (await response.json()) as IData[];
};
