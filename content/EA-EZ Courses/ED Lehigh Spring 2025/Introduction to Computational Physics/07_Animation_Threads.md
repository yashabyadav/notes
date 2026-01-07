---
date: 2025-03-28
publish: true
---

---

# Animation & Threads in OSP

Many OSP-based applications are time-stepped simulations (e.g., “start,” “step,” “stop”). Under the hood, OSP’s **AbstractSimulation** framework uses a timer (swing Timer or a thread) to call `doStep()` repeatedly.

---

## Key Classes / Interfaces

### AbstractAnimation
- The older base for building animations in OSP (lower-level).
- Provides `initializeAnimation()`, `resetAnimation()`, `stopAnimation()`, etc.

### AbstractSimulation
- More common high-level framework for time-stepped simulations.
- You only implement `initialize()`, `doStep()`, `reset()`. Then OSP handles the timer, user’s Start/Stop button, etc.

```java
public class MySim extends AbstractSimulation {
   public void initialize(){
      // set up frames, variables, initial conditions
   }
   public void doStep(){
      // update the model for one time step
   }
   public void reset(){
      // reset GUI and variables
   }
}
```
Then:
```java
public static void main(String[] args){
   SimulationControl.createApp(new MySim());
}
```