import { DataProps } from "../typings";

export const filterMail = (
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>,
  id: number | undefined,
  setArchieveData: React.Dispatch<React.SetStateAction<DataProps[]>>,
  data: DataProps[]
) => {
  setData((prevData) => {
    const filterItem = prevData.filter((data) => {
      return data.id !== id;
    });
    return filterItem;
  });

  setArchieveData((prevData) => {
    const findCurrentElement = data.find((item) => {
      return item.id === id;
    });

    if (findCurrentElement) { 
      return [...prevData, findCurrentElement];
    } else {
      return prevData;
    }
  });
};
