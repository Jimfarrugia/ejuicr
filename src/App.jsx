import { useState, useEffect } from "react";
import TargetEjuice from "./components/TargetEjuice";
import Ingredients from "./components/Ingredients";
import {
  roundToTwoDecimalPlaces,
  totalFlavorPercentage,
  parseNumberInput,
  validatePgVgValue,
  totalFlavorPg,
  totalFlavorVg,
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
      pg: 100, // %
      vg: 0, // %
      percentage: 10,
      amount: 15,
      pgAmount: 15, // mL
      vgAmount: 0, // mL
    },
  ]);
  const [pgRequired, setPgRequired] = useState(21);
  const [vgRequired, setVgRequired] = useState(105);

  const availablePercentage =
    100 - totalFlavorPercentage(flavors) - nicResults.percentage;

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

  const updateFlavorResults = (index, flavors, targetAmount) => {
    const flavor = flavors[index];
    const amount = roundToTwoDecimalPlaces(
      (flavor.percentage / 100) * targetAmount
    );
    const pgAmount = roundToTwoDecimalPlaces((flavor.pg / 100) * amount);
    const vgAmount = roundToTwoDecimalPlaces((flavor.vg / 100) * amount);
    const updatedFlavors = [...flavors];
    updatedFlavors[index] = {
      ...updatedFlavors[index],
      amount,
      pgAmount,
      vgAmount,
    };
    setFlavors(updatedFlavors);
  };

  const updateAllFlavorsResults = (flavors, targetAmount) => {
    const updatedFlavors = flavors.map((flavor) => {
      const amount = roundToTwoDecimalPlaces(
        (flavor.percentage / 100) * targetAmount
      );
      const pgAmount = roundToTwoDecimalPlaces((flavor.pg / 100) * amount);
      const vgAmount = roundToTwoDecimalPlaces((flavor.vg / 100) * amount);
      return {
        ...flavor,
        amount,
        pgAmount,
        vgAmount,
      };
    });
    setFlavors(updatedFlavors);
  };

  const updatePgVgRequired = (
    targetPg,
    targetVg,
    targetAmount,
    nicResults,
    flavors
  ) => {
    const totalPg = (targetPg / 100) * targetAmount;
    const totalVg = (targetVg / 100) * targetAmount;
    setPgRequired(
      roundToTwoDecimalPlaces(totalPg - nicResults.pg - totalFlavorPg(flavors))
    );
    setVgRequired(
      roundToTwoDecimalPlaces(totalVg - nicResults.vg - totalFlavorVg(flavors))
    );
  };

  useEffect(() => {
    updatePgVgRequired(targetPg, targetVg, targetAmount, nicResults, flavors);
  }, [targetPg, targetVg, targetAmount, nicResults, flavors]);

  const handleChangeTargetPgVg = (value, ingredient = "pg") => {
    const validatedValue = validatePgVgValue(value);
    const updatedPg =
      ingredient === "vg" ? 100 - validatedValue : validatedValue;
    const updatedVg =
      ingredient === "vg" ? validatedValue : 100 - validatedValue;
    setTargetPg(updatedPg);
    setTargetVg(updatedVg);
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
    updateAllFlavorsResults(flavors, roundedValue);
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
    const roundedValue = parsedValue > 1000 ? 1000 : Math.round(parsedValue);
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
    const roundedValue = roundToTwoDecimalPlaces(parsedValue);
    updatedFlavors[index].percentage = roundedValue;
    setFlavors(updatedFlavors);
    updateFlavorResults(index, updatedFlavors, targetAmount);
  };

  const handleChangeFlavorPgVg = (index, value, ingredient = "pg") => {
    const validatedValue = validatePgVgValue(value);
    const updatedFlavors = [...flavors];
    updatedFlavors[index].pg =
      ingredient === "vg" ? 100 - validatedValue : validatedValue;
    updatedFlavors[index].vg =
      ingredient === "vg" ? validatedValue : 100 - validatedValue;
    setFlavors(updatedFlavors);
    updateFlavorResults(index, updatedFlavors, targetAmount);
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
      amount: 0,
      pgAmount: 0,
      vgAmount: 0,
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
        targetPg={targetPg}
        targetVg={targetVg}
        pgRequired={pgRequired}
        vgRequired={vgRequired}
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
