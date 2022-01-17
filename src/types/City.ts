export interface City {
  country: string;
  lat: string;
  lng: string;
  name: string;
  locationSource?: "IP" | "Device";
}
