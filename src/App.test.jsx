import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

const { getByTestId, getByText } = screen;

describe("App", () => {
  test("renders the Target Ejuice form correctly", () => {
    render(<App />);
    const baseLabel = getByText(/Base:/i);
    const strengthLabel = getByText(/Strength:/i);
    const amountLabel = getByText(/Amount:/i);
    const targetPgInput = getByTestId("targetPgInput");
    const targetVgInput = getByTestId("targetVgInput");
    const targetNicStrengthInput = getByTestId("targetNicStrengthInput");
    const targetAmountInput = getByTestId("targetAmountInput");
    expect(baseLabel).toBeInTheDocument();
    expect(strengthLabel).toBeInTheDocument();
    expect(amountLabel).toBeInTheDocument();
    expect(targetPgInput).toHaveAttribute("type", "number");
    expect(targetPgInput).toHaveValue(30);
    expect(targetVgInput).toHaveAttribute("type", "number");
    expect(targetVgInput).toHaveValue(70);
    expect(targetNicStrengthInput).toHaveAttribute("type", "number");
    expect(targetNicStrengthInput).toHaveValue(6);
    expect(targetAmountInput).toHaveAttribute("type", "number");
    expect(targetAmountInput).toHaveValue(30);
  });

  test("renders the Ingredeints section correctly", () => {
    render(<App />);
    const nicLabel = getByText("Nic. (100mg, 100/0)");
    const pgLabel = getByText("PG");
    const vgLabel = getByText("VG");
    const flavorConfigBtn = getByTestId("flavor1ConfigBtn");
    const flavorIncBtn = getByTestId("flavor1PercentIncBtn");
    const flavorDecBtn = getByTestId("flavor1PercentDecBtn");
    const flavorDeleteBtn = getByTestId("flavor1DeleteBtn");
    const flavorAddBtn = getByTestId("flavorAddBtn");
    const nicWeight = getByText("1.86g");
    const pgWeight = getByText("5.91g");
    const vgWeight = getByText("26.46g");
    const flavorWeight = getByText("1.55g");
    expect(nicLabel).toBeInTheDocument();
    expect(pgLabel).toBeInTheDocument();
    expect(vgLabel).toBeInTheDocument();
    expect(flavorConfigBtn).toBeInTheDocument();
    expect(flavorIncBtn).toBeInTheDocument();
    expect(flavorDecBtn).toBeInTheDocument();
    expect(flavorDeleteBtn).toBeInTheDocument();
    expect(flavorAddBtn).toBeInTheDocument();
    expect(nicWeight).toBeInTheDocument();
    expect(pgWeight).toBeInTheDocument();
    expect(vgWeight).toBeInTheDocument();
    expect(flavorWeight).toBeInTheDocument();
  });
});

describe("Nicotine config", () => {
  test("toggle renders", () => {
    render(<App />);
    const nicConfigBtn = getByTestId("nicConfigBtn");
    expect(nicConfigBtn).toBeInTheDocument();
  });

  test("button click renders nicConfig component", () => {
    render(<App />);
    const nicConfigBtn = getByTestId("nicConfigBtn");
    fireEvent.click(nicConfigBtn);
    const nicConfigStrengthInput = getByTestId("nicConfigStrengthInput");
    expect(nicConfigStrengthInput).toHaveAttribute("type", "number");
    expect(nicConfigStrengthInput).toHaveValue(100);
  });

  test("ratio number controls work correctly", () => {
    render(<App />);
    const nicConfigBtn = getByTestId("nicConfigBtn");
    fireEvent.click(nicConfigBtn);
    const nicConfigPgIncBtn = getByTestId("nicConfigPgIncBtn");
    const nicConfigPgDecBtn = getByTestId("nicConfigPgDecBtn");
    const pgInput = getByTestId("nicConfigPgInput");
    const vgInput = getByTestId("nicConfigVgInput");
    fireEvent.click(nicConfigPgDecBtn);
    expect(pgInput).toHaveValue(95);
    expect(vgInput).toHaveValue(5);
    fireEvent.click(nicConfigPgIncBtn);
    expect(pgInput).toHaveValue(100);
    expect(vgInput).toHaveValue(0);
  });

  test("strength number controls work correctly", () => {
    render(<App />);
    const nicConfigBtn = getByTestId("nicConfigBtn");
    fireEvent.click(nicConfigBtn);
    const nicConfigStrengthIncBtn = getByTestId("nicConfigStrengthIncBtn");
    const nicConfigStrengthDecBtn = getByTestId("nicConfigStrengthDecBtn");
    const strengthInput = getByTestId("nicConfigStrengthInput");
    fireEvent.click(nicConfigStrengthIncBtn);
    expect(strengthInput).toHaveValue(105);
    fireEvent.click(nicConfigStrengthDecBtn);
    expect(strengthInput).toHaveValue(100);
  });
});

describe("Flavor config", () => {
  it("toggle renders", () => {
    render(<App />);
    const flavorConfigBtn = getByTestId("flavor1ConfigBtn");
    expect(flavorConfigBtn).toBeInTheDocument();
  });

  it("button click renders flavorConfig component", () => {
    render(<App />);
    const flavorConfigBtn = getByTestId("flavor1ConfigBtn");
    fireEvent.click(flavorConfigBtn);
    const pgInput = getByTestId("flavor1ConfigPgInput");
    const vgInput = getByTestId("flavor1ConfigVgInput");
    expect(pgInput).toBeInTheDocument();
    expect(vgInput).toBeInTheDocument();
  });

  it("ratio number controls work correctly", () => {
    render(<App />);
    const flavorConfigBtn = getByTestId("flavor1ConfigBtn");
    fireEvent.click(flavorConfigBtn);
    const flavorConfigPgIncBtn = getByTestId("flavor1ConfigPgIncBtn");
    const flavorConfigPgDecBtn = getByTestId("flavor1ConfigPgDecBtn");
    const pgInput = getByTestId("flavor1ConfigPgInput");
    const vgInput = getByTestId("flavor1ConfigVgInput");
    fireEvent.click(flavorConfigPgDecBtn);
    fireEvent.click(flavorConfigPgDecBtn);
    expect(pgInput).toHaveValue(90);
    expect(vgInput).toHaveValue(10);
    fireEvent.click(flavorConfigPgIncBtn);
    expect(pgInput).toHaveValue(95);
    expect(vgInput).toHaveValue(5);
  });
});

describe("Flavor", () => {
  it("number controls work correctly", () => {
    render(<App />);
    const flavorPercentInput = getByTestId("flavor1PercentInput");
    const flavorPercentIncBtn = getByTestId("flavor1PercentIncBtn");
    const flavorPercentDecBtn = getByTestId("flavor1PercentDecBtn");
    fireEvent.click(flavorPercentIncBtn);
    expect(flavorPercentInput).toHaveValue(5.5);
    fireEvent.click(flavorPercentDecBtn);
    expect(flavorPercentInput).toHaveValue(5);
  });

  it("'add' button displays a new flavor row", () => {
    render(<App />);
    const flavorAddBtn = getByTestId("flavorAddBtn");
    fireEvent.click(flavorAddBtn);
    const newFlavorNameInput = getByTestId("flavor2NameInput");
    expect(newFlavorNameInput).toBeInTheDocument();
  });

  it("'delete' button removes a flavor row", () => {
    render(<App />);
    const flavorAddBtn = getByTestId("flavorAddBtn");
    fireEvent.click(flavorAddBtn);
    const flavorDeleteBtn = getByTestId("flavor2DeleteBtn");
    expect(flavorDeleteBtn).toBeInTheDocument();
    fireEvent.click(flavorDeleteBtn);
    expect(flavorDeleteBtn).not.toBeInTheDocument();
  });
});

describe("Nicotine", () => {
  it("is calculated correctly", () => {
    render(<App />);
    const targetNicStrengthInput = getByTestId("targetNicStrengthInput");
    expect(targetNicStrengthInput).toHaveValue(6);
    fireEvent.change(targetNicStrengthInput, { target: { value: 4 } });
    expect(targetNicStrengthInput).toHaveValue(4);
    const updatedNicVolume = getByText("1.2mL");
    const updatedNicWeight = getByText("1.24g");
    expect(updatedNicVolume).toBeInTheDocument();
    expect(updatedNicWeight).toBeInTheDocument();
  });
});

describe("Flavor", () => {
  it("is calculated correctly", () => {
    render(<App />);
    const flavorPercentInput = getByTestId("flavor1PercentInput");
    expect(flavorPercentInput).toHaveValue(5);
    fireEvent.change(flavorPercentInput, { target: { value: 3 } });
    expect(flavorPercentInput).toHaveValue(3);
    const updatedFlavorVolume = getByText("0.9mL");
    const updatedFlavorWeight = getByText("0.93g");
    expect(updatedFlavorVolume).toBeInTheDocument();
    expect(updatedFlavorWeight).toBeInTheDocument();
  });
});

describe("PG", () => {
  it("is calculated correctly from target base ratio", () => {
    render(<App />);
    const targetPgInput = getByTestId("targetPgInput");
    expect(targetPgInput).toHaveValue(30);
    fireEvent.change(targetPgInput, { target: { value: 50 } });
    expect(targetPgInput).toHaveValue(50);
    const updatedPgVolume = getByText("11.7mL");
    const updatedPgWeight = getByText("12.12g");
    expect(updatedPgVolume).toBeInTheDocument();
    expect(updatedPgWeight).toBeInTheDocument();
  });

  it("is calculated correctly from nicotine ratio", () => {
    render(<App />);
    const nicConfigBtn = getByTestId("nicConfigBtn");
    fireEvent.click(nicConfigBtn);
    const pgInput = getByTestId("nicConfigPgInput");
    fireEvent.change(pgInput, { target: { value: 50 } });
    const updatedPgVolume = getByText("6.6mL");
    const updatedPgWeight = getByText("6.84g");
    expect(updatedPgVolume).toBeInTheDocument();
    expect(updatedPgWeight).toBeInTheDocument();
  });

  it("is calculated correctly from flavor ratio", () => {
    render(<App />);
    const flavorConfigBtn = getByTestId("flavor1ConfigBtn");
    fireEvent.click(flavorConfigBtn);
    const pgInput = getByTestId("flavor1ConfigPgInput");
    fireEvent.change(pgInput, { target: { value: 50 } });
    const updatedPgVolume = getByText("6.45mL");
    const updatedPgWeight = getByText("6.68g");
    expect(updatedPgVolume).toBeInTheDocument();
    expect(updatedPgWeight).toBeInTheDocument();
  });
});

describe("VG", () => {
  it("is calculated correctly from target base ratio", () => {
    render(<App />);
    const targetVgInput = getByTestId("targetVgInput");
    expect(targetVgInput).toHaveValue(70);
    fireEvent.change(targetVgInput, { target: { value: 30 } });
    expect(targetVgInput).toHaveValue(30);
    const updatedVgVolume = getByText("9mL");
    const updatedVgWeight = getByText("11.34g");
    expect(updatedVgVolume).toBeInTheDocument();
    expect(updatedVgWeight).toBeInTheDocument();
  });

  it("is calculated correctly from nicotine ratio", () => {
    render(<App />);
    const nicConfigBtn = getByTestId("nicConfigBtn");
    fireEvent.click(nicConfigBtn);
    const vgInput = getByTestId("nicConfigVgInput");
    fireEvent.change(vgInput, { target: { value: 100 } });
    const updatedVgVolume = getByText("19.2mL");
    const updatedVgWeight = getByText("24.19g");
    expect(updatedVgVolume).toBeInTheDocument();
    expect(updatedVgWeight).toBeInTheDocument();
  });

  it("is calculated correctly from flavor ratio", () => {
    render(<App />);
    const flavorConfigBtn = getByTestId("flavor1ConfigBtn");
    fireEvent.click(flavorConfigBtn);
    const vgInput = getByTestId("flavor1ConfigVgInput");
    fireEvent.change(vgInput, { target: { value: 100 } });
    const updatedVgVolume = getByText("19.5mL");
    const updatedVgWeight = getByText("24.57g");
    expect(updatedVgVolume).toBeInTheDocument();
    expect(updatedVgWeight).toBeInTheDocument();
  });
});

describe("Error message", () => {
  it("renders when base nic strength is less than target strength", () => {
    render(<App />);
    const nicConfigBtn = getByTestId("nicConfigBtn");
    fireEvent.click(nicConfigBtn);
    const strengthInput = getByTestId("nicConfigStrengthInput");
    fireEvent.change(strengthInput, { target: { value: 3 } });
    const errorMessage = getByTestId("errorMessage");
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders when target pg/vg ratio is not possible", () => {
    render(<App />);
    const targetPgInput = getByTestId("targetPgInput");
    const targetVgInput = getByTestId("targetVgInput");
    expect(targetPgInput).toHaveValue(30);
    fireEvent.change(targetPgInput, { target: { value: 0 } });
    expect(targetVgInput).toHaveValue(100);
    const errorMessage = getByTestId("errorMessage");
    expect(errorMessage).toBeInTheDocument();
  });
});
