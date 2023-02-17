import { useState } from "react";
import NumberControls from "./NumberControls";

const TargetEjuice = () => {
  const [targetPg, setTargetPg] = useState(30);
  const [targetVg, setTargetVg] = useState(70);
  const [targetNicStrength, setTargetNicStrength] = useState(6);
  const [targetAmount, setTargetAmount] = useState(150);

  const onChangeTargetPg = (e) => setTargetPg(e.target.value);
  const onChangeTargetVg = (e) => setTargetVg(e.target.value);
  const onChangeTargetNicStrength = (e) => setTargetNicStrength(e.target.value);
  const onChangeTargetAmount = (e) => setTargetAmount(e.target.value);

  return (
    <>
      <h3>Target Ejuice</h3>
      <hr />
      <div className="row">
        <h5>Base:</h5>
        <div>
          <span className="label-left">PG/VG</span>
          <div className="input-border">
            <input type="number" value={targetPg} onChange={onChangeTargetPg} />
          </div>
          <span className="label-between">/</span>
          <div className="input-border">
            <input type="number" value={targetVg} onChange={onChangeTargetVg} />
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
              onChange={onChangeTargetNicStrength}
            />
          </div>
          <span className="label-right">mg/mL</span>
        </div>
        <NumberControls />
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
              onChange={onChangeTargetAmount}
            />
          </div>
          <span className="label-right">mL</span>
        </div>
        <NumberControls />
      </div>
      <hr />
    </>
  );
};

export default TargetEjuice;
