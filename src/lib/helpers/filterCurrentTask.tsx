import { DataProps } from "../typings";

export const filterCurrentTask = (
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>,
  setBinData: React.Dispatch<React.SetStateAction<DataProps[]>>,
  data: DataProps[],
  id: number
) => {
  const findCurrentElement: DataProps | undefined = data.find((item: DataProps) => {
    return item.id === id;
  });

  setBinData((prevData: DataProps[]) => {
    if (findCurrentElement) {
      return [...prevData, findCurrentElement];
    }
    return prevData;
  });

  setData((prevData: DataProps[]) => {
    return prevData.filter((data: DataProps) => {
      return data.id !== id;
    });
  });
};
