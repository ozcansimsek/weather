export interface Alerts {
  sender_name: string; // NWS Tulsa,
  event: string; // Heat Advisory,
  start: number; // 1597341600,
  end: number; // 1597366800,
  description: string; // ...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.,
  tags: string[];
}
