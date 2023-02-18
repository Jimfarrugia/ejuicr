import { useState } from "react";
import TargetEjuice from "./components/TargetEjuice";
import Ingredients from "./components/Ingredients";
import { roundToTwoDecimalPlaces } from "./helpers";

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

  const parseNumberInput = (value) => {
    // Remove leading zeros to allow valid inputs like 0.5
    const strippedValue = value.replace(/^0+(?=\d)/, "");
    // Use parseFloat to validate and normalize the input value
    const parsedValue = parseFloat(strippedValue, 10);
    // Return 0 if the parsed value is not a number
    return isNaN(parsedValue) ? 0 : parsedValue;
  };

  const handleChangeTargetPgVg = (value, ingredient = "pg") => {
    // enforce min 0 / max 100, change "" to 0 and force integer values
    const newValue = Math.round(
      value > 100 ? 100 : value < 0 || value === "" ? 0 : value
    );
    if (ingredient === "vg") {
      setTargetVg(newValue);
      setTargetPg(100 - newValue);
    } else {
      setTargetPg(newValue);
      setTargetVg(100 - newValue);
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
    // enforce min 0 / max 100, change "" to 0 and force integer values
    const newValue = Math.round(
      value > 100 ? 100 : value < 0 || value === "" ? 0 : value
    );
    if (ingredient === "vg") {
      setNicConfig({
        ...nicConfig,
        pg: 100 - newValue,
        vg: newValue,
      });
    } else {
      setNicConfig({
        ...nicConfig,
        pg: newValue,
        vg: 100 - newValue,
      });
    }
  };

  const handleChangeNicConfigStrength = (value) => {
    if (value < 0) return setNicConfig({ ...nicConfig, strength: 0 });
    const parsedValue = parseNumberInput(value);
    const roundedValue = Math.round(parsedValue);
    setNicConfig({ ...nicConfig, strength: roundedValue });
  };

  const handleChangeFlavorName = (value) => {
    const updatedFlavors = [...flavors];
    updatedFlavors[0].name = value;
    setFlavors(updatedFlavors);
  };

  const handleChangeFlavorPercentage = (value) => {
    const updatedFlavors = [...flavors];
    const parsedValue = parseNumberInput(value);
    updatedFlavors[0].percentage =
      parsedValue < 0 ? 0 : roundToTwoDecimalPlaces(parsedValue);
    setFlavors(updatedFlavors);
  };

  const handleRemoveFlavor = (index) => {
    const updatedFlavors = [...flavors];
    updatedFlavors.splice(index, 1);
    setFlavors(updatedFlavors);
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
        handleRemoveFlavor={handleRemoveFlavor}
      />
    </div>
  );
}

export default App;
