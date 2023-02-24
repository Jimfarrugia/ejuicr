import NumberControls from "./NumberControls";

const TargetEjuice = ({
  targetPg,
  targetVg,
  handleChangeTargetPgVg,
  targetNicStrength,
  handleChangeTargetNicStrength,
  targetAmount,
  handleChangeTargetAmount,
}) => {
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
              data-testid="targetPgInput"
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
              data-testid="targetVgInput"
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
              data-testid="targetNicStrengthInput"
              type="number"
              value={targetNicStrength.toString()}
              min="0"
              onChange={(e) => handleChangeTargetNicStrength(e.target.value)}
            />
          </div>
          <span className="label-right">mg/mL</span>
        </div>
        <NumberControls
          value={targetNicStrength}
          handler={handleChangeTargetNicStrength}
          step={1}
          min={0}
        />
      </div>
      <hr />
      <div className="row">
        <h5>Amount:</h5>
        <div>
          <div className="input-border">
            <input
              data-testid="targetAmountInput"
              type="number"
              className="wide"
              value={targetAmount.toString()}
              min="0"
              onChange={(e) => handleChangeTargetAmount(e.target.value)}
            />
          </div>
          <span className="label-right">mL</span>
        </div>
        <NumberControls
          value={targetAmount}
          handler={handleChangeTargetAmount}
          step={10}
          min={0}
        />
      </div>
      <hr />
    </>
  );
};

export default TargetEjuice;
