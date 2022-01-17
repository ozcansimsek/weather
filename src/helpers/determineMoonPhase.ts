export const determineMoonPhase = (moonPhase: number): string => {
  let moonState = "";
  if (moonPhase) {
    if (moonPhase === 0 || moonPhase === 1) {
      moonState = "New moon";
    } else if (moonPhase === 0.75) {
      moonState = "Last quarter moon";
    } else if (moonPhase === 0.5) {
      moonState = "Full moon";
    } else if (moonPhase === 0.25) {
      moonState = "First quarter moon";
    } else if (moonPhase > 0.75) {
      moonState = "Waning crescent";
    } else if (moonPhase > 0.5) {
      moonState = "Waning gibous";
    } else if (moonPhase > 0.25) {
      moonState = "Waxing gibous";
    } else if (moonPhase > 0) {
      moonState = "Waxing crescent";
    } else moonState = "N/A";
  }
  return moonState;
};
