// Round a number to two decimal places
export function roundToTwoDecimalPlaces(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

// Parse the input of target values
export const parseNumberInput = (value) => {
  // Enforce minimum of 0
  if (value < 0) return 0;
  // Remove leading zeros to allow valid inputs like 0.5
  const strippedValue = value.toString().replace(/^0+(?=\d)/, "");
  // Use parseFloat to validate and normalize the input value
  const parsedValue = parseFloat(strippedValue, 10);
  // Return 0 if the parsed value is not a number
  return isNaN(parsedValue) ? 0 : parsedValue;
};

// Validate inputs for PG/VG ratio values
export const validatePgVgValue = (value) => {
  // enforce min 0 / max 100, change "" to 0 and force integer values
  return Math.round(value > 100 ? 100 : value < 0 || value === "" ? 0 : value);
};

// Return the sum of all percentage values of objects in an array
export const totalFlavorPercentage = (flavors) => {
  return flavors.reduce((acc, flavor) => {
    return acc + flavor.percentage;
  }, 0);
};

// Return the sum of all pgAmount values of objects in an array
export const totalFlavorPg = (flavors) => {
  return flavors.reduce((acc, flavor) => {
    return acc + flavor.pgAmount;
  }, 0);
};

// Return the sum of all vgAmount values of objects in an array
export const totalFlavorVg = (flavors) => {
  return flavors.reduce((acc, flavor) => {
    return acc + flavor.vgAmount;
  }, 0);
};

// Calculate the weight of a liquid mixed from PG and/or VG
export const calculateWeight = (totalVolume, pgPercentage, vgPercentage) => {
  const pgDensity = 1.036; // g/mL
  const vgDensity = 1.26; // g/mL
  const pgVolume = (pgPercentage / 100) * totalVolume;
  const vgVolume = (vgPercentage / 100) * totalVolume;
  const pgWeight = pgVolume * pgDensity;
  const vgWeight = vgVolume * vgDensity;
  const totalWeight = pgWeight + vgWeight;
  return totalWeight;
};
