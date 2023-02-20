import { useState } from "react";
import TargetEjuice from "./components/TargetEjuice";
import Ingredients from "./components/Ingredients";
import {
  roundToTwoDecimalPlaces,
  totalFlavorPercentage,
  parseNumberInput,
  validatePgVgValue,
} from "./helpers";

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
  const [nicResults, setNicResults] = useState({
    amount: 9,
    percentage: 6,
    pg: 9,
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

  const availablePercentage =
    100 - totalFlavorPercentage(flavors) - nicResults.percentage;

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

  const updateNicResults = (targetNicStrength, targetAmount, nicConfig) => {
    if (nicConfig.strength <= 0 || nicConfig.strength < targetNicStrength) {
      return setNicResults({
        amount: 0,
        percentage: 0,
        pg: 0,
        vg: 0,
      });
    }
    const amount = roundToTwoDecimalPlaces(
      (targetNicStrength * targetAmount) / nicConfig.strength
    );
    const percentage = roundToTwoDecimalPlaces((amount / targetAmount) * 100);
    const pg = roundToTwoDecimalPlaces((nicConfig.pg / 100) * amount);
    const vg = roundToTwoDecimalPlaces((nicConfig.vg / 100) * amount);
    setNicResults({ amount, percentage, pg, vg });
  };

  const handleChangeTargetNicStrength = (value) => {
    const parsedValue = parseNumberInput(value);
    const roundedValue = roundToTwoDecimalPlaces(parsedValue);
    setTargetNicStrength(roundedValue);
    updateNicResults(roundedValue, targetAmount, nicConfig);
  };

  const handleChangeTargetAmount = (value) => {
    const parsedValue = parseNumberInput(value);
    const roundedValue = roundToTwoDecimalPlaces(parsedValue);
    setTargetAmount(roundedValue);
    updateNicResults(targetNicStrength, roundedValue, nicConfig);
  };

  const handleChangeNicConfigPgVg = (value, ingredient = "pg") => {
    const validatedValue = validatePgVgValue(value);
    const updatedNicConfig =
      ingredient === "vg"
        ? {
            ...nicConfig,
            pg: 100 - validatedValue,
            vg: validatedValue,
          }
        : {
            ...nicConfig,
            pg: validatedValue,
            vg: 100 - validatedValue,
          };
    setNicConfig(updatedNicConfig);
    updateNicResults(targetNicStrength, targetAmount, updatedNicConfig);
  };

  const handleChangeNicConfigStrength = (value) => {
    const parsedValue = parseNumberInput(value);
    const roundedValue = Math.round(parsedValue);
    const updatedNicConfig = { ...nicConfig, strength: roundedValue };
    setNicConfig(updatedNicConfig);
    updateNicResults(targetNicStrength, targetAmount, updatedNicConfig);
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
        handleChangeTargetNicStrength={handleChangeTargetNicStrength}
        targetAmount={targetAmount}
        handleChangeTargetAmount={handleChangeTargetAmount}
      />
      <Ingredients
        nicConfig={nicConfig}
        nicResults={nicResults}
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
