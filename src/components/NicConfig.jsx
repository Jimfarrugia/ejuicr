import NumberControls from "./NumberControls";

const NicConfig = ({
  nicConfig,
  handleChangeNicConfigStrength,
  handleChangeNicConfigPgVg,
}) => {
  return (
    <div className="config-wrapper">
      <div className="row">
        <div>
          <span>PG/VG ratio</span>
        </div>
        <div>
          <div className="input-border">
            <input
              data-testid="nicConfigPgInput"
              type="number"
              value={parseFloat(nicConfig.pg).toString()}
              min="0"
              max="100"
              onChange={(e) => handleChangeNicConfigPgVg(e.target.value, "pg")}
            />
          </div>
          <span className="label-between">/</span>
          <div className="input-border">
            <input
              data-testid="nicConfigVgInput"
              type="number"
              value={parseFloat(nicConfig.vg).toString()}
              min="0"
              max="100"
              onChange={(e) => handleChangeNicConfigPgVg(e.target.value, "vg")}
            />
          </div>
        </div>
        <div>
          <NumberControls
            incrementTestId="nicConfigPgIncBtn"
            decrementTestId="nicConfigPgDecBtn"
            value={nicConfig.pg}
            handler={handleChangeNicConfigPgVg}
            step={5}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div>
          <span>Strength</span>
        </div>
        <div>
          <div className="input-border">
            <input
              data-testid="nicConfigStrengthInput"
              type="number"
              className="wide"
              value={nicConfig.strength.toString()}
              min="0"
              onChange={(e) => handleChangeNicConfigStrength(e.target.value)}
            />
          </div>
          <span className="label-right">mg/mL</span>
        </div>
        <div>
          <NumberControls
            incrementTestId="nicConfigStrengthIncBtn"
            decrementTestId="nicConfigStrengthDecBtn"
            value={nicConfig.strength}
            handler={handleChangeNicConfigStrength}
            step={5}
            min={0}
          />
        </div>
      </div>
    </div>
  );
};

export default NicConfig;
