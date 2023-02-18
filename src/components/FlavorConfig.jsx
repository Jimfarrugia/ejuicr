import NumberControls from "./NumberControls";

const FlavorConfig = () => {
  return (
    <div className="config-wrapper">
      <div className="row">
        <div>
          <span>PG/VG ratio</span>
        </div>
        <div>
          <div className="input-border">
            <input type="number" defaultValue="0" />
          </div>
          <span className="label-between">/</span>
          <div className="input-border">
            <input type="number" defaultValue="100" />
          </div>
        </div>
        <div>
          <NumberControls />
        </div>
      </div>
    </div>
  );
};

export default FlavorConfig;
