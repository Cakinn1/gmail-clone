import { DataProps } from "../typings";

export const addNewData = (
  newData: DataProps,
  setPreviousData: React.Dispatch<React.SetStateAction<DataProps[]>>
) => {
  setPreviousData((prevData) => {
    return [...prevData, newData]
  });
};
