// Round a number to two decimal places
export function roundToTwoDecimalPlaces(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

// Return the sum of all percentage values of objects in an array
export const totalFlavorPercentage = (flavors) => {
  return flavors.reduce((acc, flavor) => {
    return acc + flavor.percentage;
  }, 0);
};
