export interface DataProps {
  id: number;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export interface ItemsInBinProps {
  itemsInBinProps: {
    filterArchieveData: () => void;
    filteredData: DataProps[];
    archieveData: DataProps[];
  };
}
