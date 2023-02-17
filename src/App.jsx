import { useState } from "react";
import TargetEjuice from "./components/TargetEjuice";
import Ingredients from "./components/Ingredients";
import { roundToTwoDecimalPlaces } from "./helpers";

function App() {
  const [targetPg, setTargetPg] = useState(30);
  const [targetVg, setTargetVg] = useState(70);
  const [targetNicStrength, setTargetNicStrength] = useState(6);
  const [targetAmount, setTargetAmount] = useState(150);

  const handleChangeTargetPgVg = (value, ingredient = "pg") => {
    // enforce min 0 / max 100 and change "" to 0
    const newValue = +(value > 100
      ? 100
      : value < 0 || value === ""
      ? 0
      : value);

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
    const parsedValue = parseFloat(strippedValue);
    // Check if the parsed value is NaN and update the state accordingly
    isNaN(parsedValue)
      ? setTargetNicStrength(0)
      : setTargetNicStrength(roundToTwoDecimalPlaces(parsedValue));
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
      />
      <Ingredients />
    </div>
  );
}

export default App;
