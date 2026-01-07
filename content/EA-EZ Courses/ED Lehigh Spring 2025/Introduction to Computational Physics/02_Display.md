---
date: 2025-03-28
publish: true
---
# Display Package

The **display** package is the foundation for 2D drawing and event handling. Key concepts include:

1. **DrawingPanel** – The actual canvas for 2D drawing.
2. **Drawable** interface – A contract for any object that knows how to draw itself.
3. **DrawingPanel Interaction** – Mouse events, coordinate transforms, etc.

---

## DrawingPanel
- A drawing surface that handles coordinate transforms (world to pixel).
- Methods:
  - `setSquareAspect(boolean sq)`: forces the panel to remain square.
  - `setPreferredMinMax(xmin, xmax, ymin, ymax)`: specify the coordinate bounds.
  - `render()`: forces a redraw.

If you need custom painting, you can subclass or implement `Drawable` and then add it to the panel.

---

## Drawable Interface
- The core method is `draw(DrawingPanel panel, Graphics g)`.
- Any shape or object that wants to appear on the panel implements this interface.

See [[04_Drawables|Drawables]] for more detail on common built-in drawable shapes (e.g. `DrawableShape`, `Trail`, `Plot2D` objects, etc.).

---

## Inspectors and Message
- The package also supports pop-up inspectors for debugging or showing object properties.
- `MessageFrame` or `MessageBox` classes can display text quickly.

**Back to** [[00_OSP_Index|Index]]

