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
    if (value === "" || value < 0) return setTargetNicStrength(0);
    // Remove leading zeros to allow valid inputs like 0.5
    const strippedValue = value.replace(/^0+(?=\d)/, "");
    // Use parseFloat to validate and normalize the input value
    const parsedValue = parseFloat(strippedValue, 10);
    // Check if the parsed value is NaN and update the state accordingly
    isNaN(parsedValue)
      ? setTargetNicStrength(0)
      : setTargetNicStrength(roundToTwoDecimalPlaces(parsedValue));
  };

  const handleChangeTargetAmount = (value) => {
    if (value === "" || value < 0) return setTargetAmount(0);
    // Remove leading zeros to allow valid inputs like 0.5
    const strippedValue = value.replace(/^0+(?=\d)/, "");
    // Use parseFloat to validate and normalize the input value
    const parsedValue = parseFloat(strippedValue, 10);
    // Check if the parsed value is NaN and update the state accordingly
    isNaN(parsedValue)
      ? setTargetAmount(0)
      : setTargetAmount(roundToTwoDecimalPlaces(parsedValue));
  };

  const handleChangeNicConfigStrength = (value) => {
    if (value === "" || value < 0)
      return setNicConfig({
        ...nicConfig,
        strength: 0,
      });
    // Remove leading zeros to allow valid inputs like 0.5
    const strippedValue = value.replace(/^0+(?=\d)/, "");
    // Use parseFloat to validate and normalize the input value
    const parsedValue = parseFloat(strippedValue, 10);
    // Check if the parsed value is NaN and update the state accordingly
    isNaN(parsedValue)
      ? setNicConfig({
          ...nicConfig,
          strength: 0,
        })
      : setNicConfig({
          ...nicConfig,
          strength: Math.round(parsedValue),
        });
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
      />
    </div>
  );
}

export default App;
