import { useState } from "react";
import NumberControls from "./NumberControls";

const TargetEjuice = () => {
  const [targetPg, setTargetPg] = useState(30);
  const [targetVg, setTargetVg] = useState(70);
  const [targetNicStrength, setTargetNicStrength] = useState(6);
  const [targetAmount, setTargetAmount] = useState(150);

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
              value={targetPg}
              onChange={(e) => setTargetPg(e.target.value)}
            />
          </div>
          <span className="label-between">/</span>
          <div className="input-border">
            <input
              type="number"
              value={targetVg}
              onChange={(e) => setTargetVg(e.target.value)}
            />
          </div>
        </div>
        <NumberControls />
      </div>
      <hr />
      <div className="row">
        <h5>Strength:</h5>
        <div>
          <div className="input-border">
            <input
              type="number"
              value={targetNicStrength}
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
