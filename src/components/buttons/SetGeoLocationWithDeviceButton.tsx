import { InfoOutlined } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { useSelectedCityContext } from "contexts";

const SetGeoLocationWithDeviceButton = () => {
  const { setSelectedCity } = useSelectedCityContext();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
        setSelectedCity({
          country: "",
          name: "your location",
          lat: pos.coords.latitude.toString(),
          lng: pos.coords.longitude.toString(),
          locationSource: "Device",
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <Button
      variant="outlined"
      sx={{ margin: 1 }}
      onClick={getLocation}
      endIcon={
        <Tooltip title="Please allow the location request in your browser for this feature to work. If you no longer receive this request, reset the page permissions and try again.">
          <InfoOutlined />
        </Tooltip>
      }
    >
      Set Device Location
    </Button>
  );
};

export default SetGeoLocationWithDeviceButton;
