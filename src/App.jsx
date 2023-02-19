import { useState } from "react";
import TargetEjuice from "./components/TargetEjuice";
import Ingredients from "./components/Ingredients";
import { roundToTwoDecimalPlaces, totalFlavorPercentage } from "./helpers";

function App() {
  const [targetPg, setTargetPg] = useState(30);
  const [targetVg, setTargetVg] = useState(70);
  const [targetNicStrength, setTargetNicStrength] = useState(6);
  const [targetAmount, setTargetAmount] = useState(150);
  const [nicConfig, setNicConfig] = useState({
    strength: 100,
    pg: 100,
    vg: 0,
  });
  const [flavors, setFlavors] = useState([
    {
      name: "Flavor 1",
      pg: 100,
      vg: 0,
      percentage: 10,
    },
  ]);

  // TODO - also subtract nicotine percentage
  const availablePercentage = 100 - totalFlavorPercentage(flavors);

  const parseNumberInput = (value) => {
    // Remove leading zeros to allow valid inputs like 0.5
    const strippedValue = value.toString().replace(/^0+(?=\d)/, "");
    // Use parseFloat to validate and normalize the input value
    const parsedValue = parseFloat(strippedValue, 10);
    // Return 0 if the parsed value is not a number
    return isNaN(parsedValue) ? 0 : parsedValue;
  };

  const validatePgVgValue = (value) => {
    // enforce min 0 / max 100, change "" to 0 and force integer values
    return Math.round(
      value > 100 ? 100 : value < 0 || value === "" ? 0 : value
    );
  };

  const handleChangeTargetPgVg = (value, ingredient = "pg") => {
    const validatedValue = validatePgVgValue(value);
    if (ingredient === "vg") {
      setTargetVg(validatedValue);
      setTargetPg(100 - validatedValue);
    } else {
      setTargetPg(validatedValue);
      setTargetVg(100 - validatedValue);
    }
  };

  const handleChangeTargetNicStrength = (value) => {
    if (value < 0) return setTargetNicStrength(0);
    const parsedValue = parseNumberInput(value);
    setTargetNicStrength(roundToTwoDecimalPlaces(parsedValue));
  };

  const handleChangeTargetAmount = (value) => {
    if (value < 0) return setTargetNicStrength(0);
    const parsedValue = parseNumberInput(value);
    setTargetAmount(roundToTwoDecimalPlaces(parsedValue));
  };

  const handleChangeNicConfigPgVg = (value, ingredient = "pg") => {
    const validatedValue = validatePgVgValue(value);
    if (ingredient === "vg") {
      setNicConfig({
        ...nicConfig,
        pg: 100 - validatedValue,
        vg: validatedValue,
      });
    } else {
      setNicConfig({
        ...nicConfig,
        pg: validatedValue,
        vg: 100 - validatedValue,
      });
    }
  };

  const handleChangeNicConfigStrength = (value) => {
    if (value < 0) return setNicConfig({ ...nicConfig, strength: 0 });
    const parsedValue = parseNumberInput(value);
    const roundedValue = Math.round(parsedValue);
    setNicConfig({ ...nicConfig, strength: roundedValue });
  };

  const handleChangeFlavorName = (index, value) => {
    const updatedFlavors = [...flavors];
    updatedFlavors[index].name = value;
    setFlavors(updatedFlavors);
  };

  const handleChangeFlavorPercentage = (index, value) => {
    const updatedFlavors = [...flavors];
    const parsedValue = parseNumberInput(value);
    updatedFlavors[index].percentage =
      parsedValue < 0 ? 0 : roundToTwoDecimalPlaces(parsedValue);
    setFlavors(updatedFlavors);
  };

  const handleChangeFlavorPgVg = (index, value, ingredient = "pg") => {
    const validatedValue = validatePgVgValue(value);
    const updatedFlavors = [...flavors];
    if (ingredient === "vg") {
      updatedFlavors[index].vg = validatedValue;
      updatedFlavors[index].pg = 100 - validatedValue;
      setFlavors(updatedFlavors);
    } else {
      updatedFlavors[index].pg = validatedValue;
      updatedFlavors[index].vg = 100 - validatedValue;
      setFlavors(updatedFlavors);
    }
  };

  const handleRemoveFlavor = (index) => {
    const updatedFlavors = [...flavors];
    updatedFlavors.splice(index, 1);
    setFlavors(updatedFlavors);
  };

  const handleAddFlavor = () => {
    const name = `Flavor ${flavors.length + 1}`;
    const newFlavor = {
      name,
      pg: 100,
      vg: 0,
      percentage: 0,
    };
    setFlavors([...flavors, newFlavor]);
  };

  return (
    <div className="calculator">
      <TargetEjuice
        targetPg={targetPg}
        targetVg={targetVg}
        handleChangeTargetPgVg={handleChangeTargetPgVg}
        targetNicStrength={targetNicStrength}
        setTargetNicStrength={setTargetNicStrength}
        handleChangeTargetNicStrength={handleChangeTargetNicStrength}
        targetAmount={targetAmount}
        setTargetAmount={setTargetAmount}
        handleChangeTargetAmount={handleChangeTargetAmount}
      />
      <Ingredients
        nicConfig={nicConfig}
        setNicConfig={setNicConfig}
        handleChangeNicConfigStrength={handleChangeNicConfigStrength}
        handleChangeNicConfigPgVg={handleChangeNicConfigPgVg}
        flavors={flavors}
        handleChangeFlavorName={handleChangeFlavorName}
        handleChangeFlavorPercentage={handleChangeFlavorPercentage}
        handleChangeFlavorPgVg={handleChangeFlavorPgVg}
        handleRemoveFlavor={handleRemoveFlavor}
        handleAddFlavor={handleAddFlavor}
      />
    </div>
  );
}

export default App;
