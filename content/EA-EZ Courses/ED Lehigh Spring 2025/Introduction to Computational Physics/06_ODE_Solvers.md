---
date: 2025-03-28
publish: true
---
The OSP library includes multiple integrators for ordinary differential equations. Each solver implements the interface:

```java
public interface ODESolver {
   void initialize(double stepSize);
   void setStepSize(double stepSize);
   double getStepSize();
   void step();
   // ...
}
```

and works with and `ODE` instance:
```java
public interface ODE {
   double[] getState();
   void getRate(double[] state, double[] rate);
}
```
## Common Solvers

1. **Euler**
    - Simple, first-order.
    - `new Euler(myODE)`
2. **EulerRichardson** (also known as the “midpoint method”)
    - Second-order. Good for many typical physics problems.
3. **RK4 (Runge-Kutta 4)**
    - Fourth-order method; a good general-purpose solver.
4. **RK45**
    - Adaptive step-size method (Dormand-Prince) with error estimation.
5. **Verlet** / **VelocityVerlet**
    - Often used in molecular dynamics, preserves better energy behavior in certain Hamiltonian systems.
### Example Usage

```java
ODE myODE = new FallingParticleODE(); 
ODESolver solver = new Euler(myODE);
solver.setStepSize(0.01);
while(myODE.getState()[0]>0){ // e.g. while y>0
   solver.step();
}
```
See the OSP manual or the “CSM” examples for more advanced usage (e.g., event handling, collisions, etc.).