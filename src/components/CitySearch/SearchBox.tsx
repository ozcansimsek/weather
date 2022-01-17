import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import cities from "cities.json";
import { useAllWeatherDataContext, useSelectedCityContext } from "contexts";
import { City } from "types";
import { useDebounce } from "hooks";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [selectionChanged, setSelectionChanged] = useState<boolean>(false);
  const { selectedCity, setSelectedCity } = useSelectedCityContext();
  const { setAllWeatherData } = useAllWeatherDataContext();
  useState<boolean>(false);
  const debouncedInputValue: string = useDebounce(inputValue, 700);
  const filterOptions = createFilterOptions<City>({
    limit: selectedCity?.name === "your location" ? 0 : 4,
  });

  const inputEqualAndGreaterThanTwo =
    debouncedInputValue === inputValue &&
    debouncedInputValue.length > 2 &&
    inputValue.length > 2;

  const onChange = (e: SyntheticEvent, option: City | null) => {
    if (selectedCity) {
      setAllWeatherData(undefined);
    }
    setSelectedCity(option);
    setSelectionChanged(true);
  };

  const onInputChange = (e: SyntheticEvent, value: string) => {
    setOpen(false);
    setSelectionChanged(false);
    setInputValue(value);
  };

  const onOpen = () => {
    if (selectedCity) setOpen(false);
    else if (!inputEqualAndGreaterThanTwo) setOpen(false);
    else if (debouncedInputValue === inputValue) setOpen(true);
  };

  const onClose = () => setOpen(false);

  useEffect(() => {
    if (
      inputEqualAndGreaterThanTwo &&
      selectedCity?.locationSource === undefined
    )
      setOpen(true);
    if (selectionChanged) setOpen(false);
  }, [selectionChanged, selectedCity, inputEqualAndGreaterThanTwo]);

  return (
    <Autocomplete
      value={selectedCity}
      sx={{ backgroundColor: "background.paper", maxWidth: 500 }}
      selectOnFocus={false}
      clearOnBlur={false}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      filterOptions={filterOptions}
      blurOnSelect={true}
      disablePortal
      id="city-search"
      options={cities as City[]}
      isOptionEqualToValue={(option: City, value: any) =>
        option.name + ", " + option.country ===
        value.name + ", " + value.country
      }
      getOptionLabel={(option: City) =>
        selectedCity?.locationSource === "Device"
          ? "Your location"
          : `${option.name}, ${option.country}`
      }
      fullWidth={true}
      renderInput={(params) => (
        <TextField {...params} label={"Type your city here..."} />
      )}
      onChange={onChange}
      onInputChange={onInputChange}
      noOptionsText="No places found"
    />
  );
};

export default SearchBox;
