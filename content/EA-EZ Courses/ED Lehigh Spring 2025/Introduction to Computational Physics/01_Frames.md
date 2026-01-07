---
date: 2025-03-28
publish: true
---
# Frames Package

The **frames** package in OSP provides GUI windows to display and update physics data in multiple ways (2D plots, 3D scenes, tables, etc.). Below is a quick overview of commonly used frame classes:

---

## DisplayFrame
- **Purpose**: A basic 2D frame that can render anything implementing `Drawable`.
- **Key Methods**:
  - `setPreferredMinMax(double xmin, double xmax, double ymin, double ymax)`: sets coordinate bounds.
  - `addDrawable(Drawable d)`: adds a drawable object.
  - `setSquareAspect(boolean isSquare)`: keeps the aspect ratio square if true.

See also:
- [[04_Drawables|Drawables]] for details on implementing `Drawable`.

---

## PlotFrame
- **Purpose**: A specialized frame for plotting `Dataset` objects (x-y data).
- **Key Methods**:
  - `append(int datasetIndex, double x, double y)`: adds a data point.
  - `setXYColumnNames(int datasetIndex, String xName, String yName)`: sets axis labels in the table.
  - `setLogScale(boolean xlog, boolean ylog)`: toggles log scale.

---

## DisplayFrame3D
- **Purpose**: Renders 3D elements. Typically used in tandem with `DrawingPanel3D`.
- **Key Methods**:
  - `addElement(Element e)`: adds a 3D `Element` to the scene (see the `display3d` package).
  - `setProjectionMode(int mode)`: sets perspective vs orthographic.

---

## TableFrame
- **Purpose**: Displays tabular data, like numeric arrays or time-series data.
- **Key Methods**:
  - `appendRow(Data data)`: or similar (depending on the API version).
  - `clearData()`: resets table content.

**Back to** [[00_OSP_Index|Index]]

