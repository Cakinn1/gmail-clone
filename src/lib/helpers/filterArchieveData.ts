import { DataProps } from "../typings";

export const filterArchieveData = (
  setPreviousData: (value: DataProps[]) => void,
  setFilteredData: (value: DataProps[]) => void,
  data: DataProps[]
) => {
  setPreviousData([]);
  setFilteredData(data);
};
