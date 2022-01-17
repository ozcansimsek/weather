import { createContext, ReactNode, useContext, useState } from "react";
import { AllWeatherData } from "types";

type WeatherDataContextProps = {
  children: ReactNode;
};

type WeatherDataContextTypes = {
  allWeatherData?: AllWeatherData;
  setAllWeatherData: React.Dispatch<
    React.SetStateAction<AllWeatherData | undefined>
  >;
};

const AllWeatherDataContext = createContext<WeatherDataContextTypes>({
  allWeatherData: undefined,
  setAllWeatherData: () => null,
});

const AllWeatherDataProvider = ({ children }: WeatherDataContextProps) => {
  const [allWeatherData, setAllWeatherData] = useState<AllWeatherData>();

  const value: WeatherDataContextTypes = { allWeatherData, setAllWeatherData };

  return (
    <AllWeatherDataContext.Provider value={value}>
      {children}
    </AllWeatherDataContext.Provider>
  );
};

// Custom context hook
const useAllWeatherDataContext = () => {
  return useContext(AllWeatherDataContext);
};

export { AllWeatherDataProvider, useAllWeatherDataContext };
