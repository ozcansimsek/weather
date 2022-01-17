import { createContext, ReactNode, useContext, useState } from "react";
import { City } from "types";

type SelectedCityContextProps = {
  children: ReactNode;
};

type SelectedCityContextTypes = {
  selectedCity: City | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<City | null>>;
};

const SelectedCityContext = createContext<SelectedCityContextTypes>({
  selectedCity: null,
  setSelectedCity: () => null,
});

const SelectedCityProvider = ({ children }: SelectedCityContextProps) => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const value: SelectedCityContextTypes = { selectedCity, setSelectedCity };

  return (
    <SelectedCityContext.Provider value={value}>
      {children}
    </SelectedCityContext.Provider>
  );
};

// Custom context hook
const useSelectedCityContext = () => {
  return useContext(SelectedCityContext);
};

export { SelectedCityProvider, useSelectedCityContext };
