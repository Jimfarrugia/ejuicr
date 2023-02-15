import NumberControls from "./components/NumberControls";
import ConfigButton from "./components/ConfigButton";

function App() {
  return (
    <div className="calculator">
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
      <h3>Ingredients</h3>
      <hr />
      <div className="row">
        <div>
          <ConfigButton />
          <span className="label-right">Nic. (50mg, 0/100)</span>
        </div>
        <div>
          <span>10%</span>
        </div>
        <div>
          <span>12mL</span>
        </div>
        <div>
          <span>12.48g</span>
        </div>
      </div>
      <hr />
      <div className="row">
        <div>
          <span className="base-ingredient">PG</span>
        </div>
        <div>
          <span>20%</span>
        </div>
        <div>
          <span>60mL</span>
        </div>
        <div>
          <span>62.4g</span>
        </div>
      </div>
      <hr />
      <div className="row">
        <div>
          <span className="base-ingredient">VG</span>
        </div>
        <div>
          <span>66%</span>
        </div>
        <div>
          <span>198mL</span>
        </div>
        <div>
          <span>249.48g</span>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default App;
