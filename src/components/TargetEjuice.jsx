import NumberControls from "./NumberControls";

const TargetEjuice = () => {
  return (
    <>
      <h3>Target Ejuice</h3>
      <hr />
      <div className="row">
        <h5>Base:</h5>
        <div>
          <span className="label-left">PG/VG</span>
          <div className="input-border">
            <input type="number" value="30" />
          </div>
          <span className="label-between">/</span>
          <div className="input-border">
            <input type="number" value="70" />
          </div>
        </div>
        <NumberControls />
      </div>
      <hr />
      <div className="row">
        <h5>Strength:</h5>
        <div>
          <div className="input-border">
            <input type="number" value="6" />
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
            <input type="number" className="wide" value="150" />
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
