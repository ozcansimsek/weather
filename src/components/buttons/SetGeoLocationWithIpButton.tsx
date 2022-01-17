import { InfoOutlined } from "@mui/icons-material";
import { Button, CircularProgress, Tooltip } from "@mui/material";
import { useSelectedCityContext } from "contexts";
import { IP_LOCATION } from "endpoints";
import { useEffect, useState } from "react";
import { IpLocation } from "types";
import useFetch from "use-http";

const SetGeoLocationWithIpButton = () => {
  const { setSelectedCity } = useSelectedCityContext();

  const { get, response, loading, error } = useFetch(IP_LOCATION);
  const [open, setOpen] = useState<boolean>(false);

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

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (!!error) setOpen(true);
    return () => {
      setOpen(false);
    };
  }, [error]);

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
            <Tooltip
              open={open}
              onOpen={handleOpen}
              onClose={handleClose}
              title="Some add-ons in your browser may prevent this from working. If you are having problems, 
              please disable adblocker or tracker blocker plugins and try again."
            >
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
