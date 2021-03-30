import React, { useContext } from "react";
import { DataCollector } from "./DataCollector";

export interface DataCollectorContextProps {
  dataCollector: DataCollector;
}

export const DataCollectorContext = React.createContext<DataCollectorContextProps>(
  {} as DataCollectorContextProps
);
export const useDataCollectorContext = () => useContext(DataCollectorContext);

interface Props {
  children: React.ReactNode;
}

export const DataCollectorProvider: React.FC<Props> = (props: Props) => {
  const dataCollector = {
    dataCollector: new DataCollector(),
  };
  return (
    <DataCollectorContext.Provider value={dataCollector}>
      {props.children}
    </DataCollectorContext.Provider>
  );
};
