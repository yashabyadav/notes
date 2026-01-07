---
date: 2025-03-28
publish: true
---
# Controls Package

The **controls** package supplies GUI components (like text fields, sliders, and buttons) for quick parameter inputs. It also defines structures for splitting your simulation logic vs. UI logic.

---

## Control Classes Overview

### ControlFrame
- A container for various controls (like a panel with fields, combos, etc.).
- Usually used via “tools” (like `CalculationControl`, `SimulationControl`).

### AbstractCalculation
- A convenience class that implements a “calculate” method. 
- Typically used for non-animated calculations: users type input → press “Calculate.”

### AbstractSimulation
- A base class for time-stepped simulations with Start/Stop/Step/Reset interface.

Most OSP examples rely on `SimulationControl.createApp(...)` or `CalculationControl.createApp(...)` to set up a default window with controls.

---

### Common Methods
- `setValue(String name, Object value)`: sets an initial value for a control.
- `getDouble(String name)`: retrieves a numeric entry from the user input.
- `println(String text)`: appends text to the console area within the control frame.

---

**Back to** [[00_OSP_Index|Index]]
