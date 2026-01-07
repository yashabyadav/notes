---
date: 2025-03-28
publish: true
---
# Common Built-in Drawables

While you can implement `Drawable` yourself, OSP includes many ready-made shapes:

---

## Trail
- **Purpose**: Keep track of an (x,y) path over time.
- **Usage**:
  - `Trail trail = new Trail();`
  - `trail.addPoint(x, y);` // typically each step
  - `frame.addDrawable(trail);`
- **Appearance**:
  - `trail.color = Color.red;`
  - `trail.setStroke(strokeInstance);` // to customize line thickness

---

## DrawableShape
- Prebuilt shapes (rectangles, circles, arcs) that can be placed in world coordinates, auto-drawn.
- `DrawableShape.createRectangle(x, y, width, height)`
- `setAngle(double theta)`: rotates shape.

---

## Circle, PixelRectangle, Arrow...
- **Circle**: a typical usage for representing a small object.
- **PixelRectangle**: draws a rectangle in pixel coords (handy for UI overlays).
- **Arrow**: a vector arrow from (x1, y1) to (x2, y2).

See also the “display3d” equivalents for 3D shapes if you are working with [[02_Display#DisplayFrame3D|DisplayFrame3D]].

**Back to** [[00_OSP_Index|Index]]
