import { InfoOutlined } from "@mui/icons-material";
import { Button, CircularProgress, Tooltip } from "@mui/material";
import { useSelectedCityContext } from "contexts";
import { IP_LOCATION } from "endpoints";
import { IpLocation } from "types";

import useFetch from "use-http";

const SetGeoLocationWithIpButton = () => {
  const { setSelectedCity } = useSelectedCityContext();

  const { get, response, loading } = useFetch(IP_LOCATION);

  async function determineIPLocation() {
    const res: IpLocation = await get();
    if (response.ok) {
      setSelectedCity({
        country: res.country_code,
        name: res.city,
        lat: res.latitude.toString(),
        lng: res.longitude.toString(),
        locationSource: "IP",
      });
    }
  }

  return (
    <Button
      disabled={loading}
      onClick={determineIPLocation}
      variant="outlined"
      sx={{ margin: 1 }}
      endIcon={
        <>
          {loading ? (
            <CircularProgress size="1rem" />
          ) : (
            <Tooltip title="Some add-ons in your browser may prevent this from working. If you are having problems, please disable ad and tracking blocking plugins and try again.">
              <InfoOutlined />
            </Tooltip>
          )}
        </>
      }
    >
      Set IP Location
    </Button>
  );
};

export default SetGeoLocationWithIpButton;
