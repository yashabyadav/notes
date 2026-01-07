---
date: 2025-03-28
publish: true
---
# Numerics Package

Provides mathematical and numerical utilities, such as:
- **Functions** and function parsing
- **FFT** (fast Fourier transform)
- **Root finding** (Newton’s method, bisection, etc.)
- **Integration** (Riemann, Simpson, etc.)
- **Polynomials**

---

## Key Classes

### Function & Parser
- `Function`: an interface representing a mathematical function f(x).
- `ParsedFunction`: parse a string like `"x^2 + sin(x)"` into an executable function.

### FFT (Fast Fourier Transform)
- Found in `org.opensourcephysics.numerics.FFT`.
- Usage for forward/backward transforms on arrays, e.g. 
  ```java
  FFT fft = new FFT(N);
  fft.transform(realPart, imagPart);