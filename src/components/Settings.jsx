import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faSave } from "@fortawesome/free-solid-svg-icons";
import NumberControls from "./NumberControls";
import Spinner from "./Spinner";
import { SettingsStyled } from "./styled/Settings.styled";
import {
  validatePgVgValue,
  roundToTwoDecimalPlaces,
  parseNumberInput,
} from "../helpers";
import { API_URL } from "../constants";

const Settings = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mixingUnits, setMixingUnits] = useState("both");
  const [targetPg, setTargetPg] = useState(30);
  const [targetVg, setTargetVg] = useState(70);
  const [targetNicStrength, setTargetNicStrength] = useState(6);
  const [targetAmount, setTargetAmount] = useState(30);
  const [zeroNicotineMode, setZeroNicotineMode] = useState(false);
  const [nicConfig, setNicConfig] = useState({
    strength: 100,
    pg: 100,
    vg: 0,
  });
  const [flavorConfig, setFlavorConfig] = useState({
    percentage: 5,
    pg: 100,
    vg: 0,
  });

  useEffect(() => {
    setIsLoading(true);
    // Get existing settings
    const headers = { Authorization: `Bearer ${user.token}` };
    axios
      .get(`${API_URL}/api/settings/`, { headers })
      .then((response) => {
        if (!Object.keys(response.data).length) {
          return setIsLoading(false);
        }
        localStorage.setItem("settings", JSON.stringify(response.data));
        const settings = response.data;
        setTheme(settings.theme);
        setMixingUnits(settings.units);
        setTargetPg(settings.base.pg);
        setTargetVg(settings.base.vg);
        setTargetNicStrength(settings.strength);
        setTargetAmount(settings.amount);
        setZeroNicotineMode(settings.zeroNicotineMode);
        setNicConfig({
          strength: settings.nicotine.strength,
          pg: settings.nicotine.base.pg,
          vg: settings.nicotine.base.vg,
        });
        setFlavorConfig({
          percentage: settings.flavor.percentage,
          pg: settings.flavor.base.pg,
          vg: settings.flavor.base.vg,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const handleChangeTheme = (e) => setTheme(e.target.value);

  const handleChangeMixingUnits = (e) => setMixingUnits(e.target.value);

  const handleChangeTargetPgVg = (value, ingredient = "pg") => {
    const validatedValue = validatePgVgValue(value);
    const updatedPg =
      ingredient === "vg" ? 100 - validatedValue : validatedValue;
    const updatedVg =
      ingredient === "vg" ? validatedValue : 100 - validatedValue;
    setTargetPg(updatedPg);
    setTargetVg(updatedVg);
  };

  const handleChangeTargetNicStrength = (value) => {
    const parsedValue = parseNumberInput(value);
    const roundedValue = roundToTwoDecimalPlaces(parsedValue);
    setTargetNicStrength(roundedValue);
  };

  const handleChangeTargetAmount = (value) => {
    const parsedValue = parseNumberInput(value);
    const roundedValue = roundToTwoDecimalPlaces(parsedValue);
    setTargetAmount(roundedValue);
  };

  const handleChangeNicConfigStrength = (value) => {
    const parsedValue = parseNumberInput(value);
    const roundedValue = parsedValue > 1000 ? 1000 : Math.round(parsedValue);
    const updatedNicConfig = { ...nicConfig, strength: roundedValue };
    setNicConfig(updatedNicConfig);
  };

  const handleChangeNicConfigPgVg = (value, ingredient = "pg") => {
    const validatedValue = validatePgVgValue(value);
    const updatedNicConfig =
      ingredient === "vg"
        ? {
            ...nicConfig,
            pg: 100 - validatedValue,
            vg: validatedValue,
          }
        : {
            ...nicConfig,
            pg: validatedValue,
            vg: 100 - validatedValue,
          };
    setNicConfig(updatedNicConfig);
  };

  const handleChangeFlavorConfigPercentage = (value) => {
    const parsedValue = parseNumberInput(value);
    const roundedValue =
      parsedValue > 100 ? 100 : roundToTwoDecimalPlaces(parsedValue);
    const updatedFlavorConfig = { ...flavorConfig, percentage: roundedValue };
    setFlavorConfig(updatedFlavorConfig);
  };

  const handleChangeFlavorConfigPgVg = (value, ingredient = "pg") => {
    const validatedValue = validatePgVgValue(value);
    const updatedFlavorConfig =
      ingredient === "vg"
        ? {
            ...flavorConfig,
            pg: 100 - validatedValue,
            vg: validatedValue,
          }
        : {
            ...flavorConfig,
            pg: validatedValue,
            vg: 100 - validatedValue,
          };
    setFlavorConfig(updatedFlavorConfig);
  };

  const handleClickSaveSettings = async () => {
    setError("");
    setSuccess("");
    setIsSaving(true);
    const newSettings = {
      theme,
      units: mixingUnits,
      base: {
        pg: targetPg,
        vg: targetVg,
      },
      strength: targetNicStrength,
      amount: targetAmount,
      zeroNicotineMode: zeroNicotineMode,
      nicotine: {
        strength: nicConfig.strength,
        base: {
          pg: nicConfig.pg,
          vg: nicConfig.vg,
        },
      },
      flavor: {
        percentage: flavorConfig.percentage,
        base: {
          pg: flavorConfig.pg,
          vg: flavorConfig.vg,
        },
      },
    };
    const headers = { Authorization: `Bearer ${user.token}` };
    axios
      .post(`${API_URL}/api/settings`, newSettings, { headers })
      .then((response) => {
        localStorage.setItem("settings", JSON.stringify(response.data));
        setSuccess(`Your settings have been saved.`);
        setIsSaving(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.message || "Failed to save settings.");
        setIsSaving(false);
      });
  };

  return (
    <SettingsStyled>
      <h3>Settings</h3>
      <hr />
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <h4>Appearance</h4>
          <hr />
          <div className="form-row">
            <div>Theme:</div>
            <div>
              <label htmlFor="light" className="radio-label">
                <input
                  id="light"
                  type="radio"
                  value="light"
                  checked={theme === "light"}
                  onChange={handleChangeTheme}
                />
                Light
              </label>
              <label htmlFor="dark" className="radio-label">
                <input
                  id="dark"
                  type="radio"
                  value="dark"
                  checked={theme === "dark"}
                  onChange={handleChangeTheme}
                />
                Dark
              </label>
            </div>
          </div>
          <hr />
          <div className="form-row">
            <div>
              <label htmlFor="mixing-units">Mixing units:</label>
            </div>
            <div>
              <select
                id="mixing-units"
                value={mixingUnits}
                onChange={handleChangeMixingUnits}
              >
                <option value="both">Both</option>
                <option value="volume">Volume (mL)</option>
                <option value="weight">Weight (g)</option>
              </select>
            </div>
          </div>
          <hr />
          <h4>Target Ejuice</h4>
          <hr />
          <div className="form-row">
            <div>Default base:</div>
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
              <NumberControls
                value={targetPg}
                handler={handleChangeTargetPgVg}
                step={5}
              />
            </div>
          </div>
          <hr />
          <div className="form-row">
            <div>Default strength:</div>
            <div>
              <div className="input-border">
                <input
                  type="number"
                  value={targetNicStrength.toString()}
                  min="0"
                  onChange={(e) =>
                    handleChangeTargetNicStrength(e.target.value)
                  }
                />
              </div>
              <span className="label-right">mg/mL</span>
              <NumberControls
                value={targetNicStrength}
                handler={handleChangeTargetNicStrength}
                step={1}
                min={0}
              />
            </div>
          </div>
          <hr />
          <div className="form-row">
            <div>Default amount:</div>
            <div>
              <div className="input-border">
                <input
                  type="number"
                  className="wide"
                  value={targetAmount.toString()}
                  min="0"
                  onChange={(e) => handleChangeTargetAmount(e.target.value)}
                />
              </div>
              <span className="label-right">mL</span>
              <NumberControls
                value={targetAmount}
                handler={handleChangeTargetAmount}
                step={10}
                min={0}
              />
            </div>
          </div>
          <hr />
          <h4>Nicotine</h4>
          <hr />
          <div className="form-row">
            <div>Zero Nicotine Mode:</div>
            <div>
              <span className="label-left">
                {zeroNicotineMode ? "Enabled" : "Disabled"}
              </span>
              <FontAwesomeIcon
                className={`toggle ${zeroNicotineMode ? "on" : "off"}`}
                icon={faToggleOn}
                onClick={() => setZeroNicotineMode(!zeroNicotineMode)}
              />
            </div>
          </div>
          <hr />
          <div className="form-row">
            <div>Default strength (undiluted):</div>
            <div>
              <div className="input-border">
                <input
                  type="number"
                  className="wide"
                  value={nicConfig.strength.toString()}
                  min="0"
                  onChange={(e) =>
                    handleChangeNicConfigStrength(e.target.value)
                  }
                />
              </div>
              <span className="label-right">mg/mL</span>
              <NumberControls
                value={nicConfig.strength}
                handler={handleChangeNicConfigStrength}
                step={5}
                min={0}
              />
            </div>
          </div>
          <hr />
          <div className="form-row">
            <div>Default base:</div>
            <div>
              <span className="label-left">PG/VG</span>
              <div className="input-border">
                <input
                  type="number"
                  value={parseFloat(nicConfig.pg).toString()}
                  min="0"
                  max="100"
                  onChange={(e) =>
                    handleChangeNicConfigPgVg(e.target.value, "pg")
                  }
                />
              </div>
              <span className="label-between">/</span>
              <div className="input-border">
                <input
                  type="number"
                  value={parseFloat(nicConfig.vg).toString()}
                  min="0"
                  max="100"
                  onChange={(e) =>
                    handleChangeNicConfigPgVg(e.target.value, "vg")
                  }
                />
              </div>
              <NumberControls
                value={nicConfig.pg}
                handler={handleChangeNicConfigPgVg}
                step={5}
              />
            </div>
          </div>
          <hr />
          <h4>Flavors</h4>
          <hr />
          <div className="form-row">
            <div>Default base:</div>
            <div>
              <span className="label-left">PG/VG</span>
              <div className="input-border">
                <input
                  type="number"
                  value={parseFloat(flavorConfig.pg).toString()}
                  min="0"
                  max="100"
                  onChange={(e) =>
                    handleChangeFlavorConfigPgVg(e.target.value, "pg")
                  }
                />
              </div>
              <span className="label-between">/</span>
              <div className="input-border">
                <input
                  type="number"
                  value={parseFloat(flavorConfig.vg).toString()}
                  min="0"
                  max="100"
                  onChange={(e) =>
                    handleChangeFlavorConfigPgVg(e.target.value, "vg")
                  }
                />
              </div>
              <NumberControls
                value={flavorConfig.pg}
                handler={handleChangeFlavorConfigPgVg}
                step={5}
              />
            </div>
          </div>
          <hr />
          <div className="form-row">
            <div>Default percentage:</div>
            <div>
              <div className="input-border">
                <input
                  type="number"
                  value={flavorConfig.percentage.toString()}
                  min="0"
                  onChange={(e) =>
                    handleChangeFlavorConfigPercentage(e.target.value)
                  }
                />
              </div>
              <span className="label-right">%</span>
              <NumberControls
                value={flavorConfig.percentage}
                handler={handleChangeFlavorConfigPercentage}
                step={0.5}
                min={0}
              />
            </div>
          </div>
          <hr />
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          {isSaving && <Spinner />}
          {!isSaving && (
            <div className="button-row">
              <button className="green" onClick={handleClickSaveSettings}>
                <FontAwesomeIcon icon={faSave} />
                Save Settings
              </button>
            </div>
          )}
        </>
      )}
    </SettingsStyled>
  );
};

export default Settings;
