import { useState } from "react";
import NumberControls from "./NumberControls";

const TargetEjuice = () => {
  const [targetPg, setTargetPg] = useState(30);
  const [targetVg, setTargetVg] = useState(70);
  const [targetNicStrength, setTargetNicStrength] = useState(6);
  const [targetAmount, setTargetAmount] = useState(150);

  const handleChangeTargetPgVg = (input, ingredient = "pg") => {
    // enforce min 0 / max 100 and change "" to 0
    const newValue = +(input > 100
      ? 100
      : input < 0
      ? 0
      : input === ""
      ? 0
      : input);

    if (ingredient === "vg") {
      setTargetVg(newValue);
      setTargetPg(100 - newValue);
    } else {
      setTargetPg(newValue);
      setTargetVg(100 - newValue);
    }
  };

  return (
    <>
      <h3>Target Ejuice</h3>
      <hr />
      <div className="row">
        <h5>Base:</h5>
        <div>
          <span className="label-left">PG/VG</span>
          <div className="input-border">
            <input
              type="number"
              value={parseFloat(targetPg, 10).toString()}
              min="0"
              max="100"
              onChange={(e) => handleChangeTargetPgVg(e.target.value, "pg")}
            />
          </div>
          <span className="label-between">/</span>
          <div className="input-border">
            <input
              type="number"
              value={parseFloat(targetVg, 10).toString()}
              min="0"
              max="100"
              onChange={(e) => handleChangeTargetPgVg(e.target.value, "vg")}
            />
          </div>
        </div>
        <NumberControls
          value={targetPg}
          handler={handleChangeTargetPgVg}
          step={5}
        />
      </div>
      <hr />
      <div className="row">
        <h5>Strength:</h5>
        <div>
          <div className="input-border">
            <input
              type="number"
              value={targetNicStrength}
              min="0"
              onChange={(e) => setTargetNicStrength(e.target.value)}
            />
          </div>
          <span className="label-right">mg/mL</span>
        </div>
        <NumberControls
          value={targetNicStrength}
          handler={setTargetNicStrength}
          step={1}
        />
      </div>
      <hr />
      <div className="row">
        <h5>Amount:</h5>
        <div>
          <div className="input-border">
            <input
              type="number"
              className="wide"
              value={targetAmount}
              min="0"
              onChange={(e) => setTargetAmount(e.target.value)}
            />
          </div>
          <span className="label-right">mL</span>
        </div>
        <NumberControls
          value={targetAmount}
          handler={setTargetAmount}
          step={10}
        />
      </div>
      <hr />
    </>
  );
};

export default TargetEjuice;
