import { MOCK_DATA } from "../data/data";
import { DataProps } from "../types/typings";

export const fetchDataWithTimeout = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA as DataProps[]);
    }, 2000);
  });
};
