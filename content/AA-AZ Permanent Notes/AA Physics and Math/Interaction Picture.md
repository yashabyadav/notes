---
date: 2024-10-12
tags:
  - quantum-mechanics
  - TDPT
  - perturbation-theory
  - PHY-424
publish: true
---

## Why is interaction picture used for TDPT?
1. The kets can be written in form of time-dependent Schrodinger equation, where $H$ is replace by $V_I$:
$$\begin{align}
i\hbar \frac{\partial}{\partial t} |\alpha, t_0; t\rangle_I = V_I |\alpha, t_0; t\rangle_I
\end{align}
$$

2. The state kets in interaction picture are constant. The time dependence is capture by probability coefficients:
$$
|\alpha, t_0; t\rangle_I = \sum_n c_n(t) |n\rangle.
$$
### Exercise:
Using the equations above, derive the system of differential equations for the coefficients $c_n(t)$ in terms of perturbation $V(t)$.
#### Solution:
$$
i\hbar \frac{d}{dt} C_n(t) = \sum_m V_{nm} e^{i\omega_{mn} t} C_m(t), \tag{5.187}
$$
where $\omega_{mn} = \frac{(E_m - E_n)}{\hbar} = -\omega_{nm}$. 

Explicitly,
$$
i\hbar \begin{pmatrix}
\dot{c}_1 \\
\dot{c}_2 \\
\dot{c}_3 \\
\vdots
\end{pmatrix} = \begin{pmatrix}
V_{11} & V_{12} e^{i\omega_{12} t} & V_{13} e^{i\omega_{13} t} \\
V_{21} e^{-i\omega_{21} t} & V_{22} & V_{23} e^{i\omega_{23} t} \\
V_{31} e^{-i\omega_{31} t} & V_{32} e^{-i\omega_{32} t} & V_{33} \\
\vdots & \vdots & \vdots
\end{pmatrix} \begin{pmatrix}
c_1 \\
c_2 \\
c_3 \\
\vdots
\end{pmatrix}. \tag{5.189}
$$

## Different Pictures comparison Table:

| **  Heisenberg, Interaction, and Schrödinger Pictures** |                             |                               |                             |
| ------------------------------------------------------- | --------------------------- | ----------------------------- | --------------------------- |
|                                                         | <u>Heisenberg picture</u>   | <u>Interaction picture</u>    | <u>Schrödinger picture</u>  |
| **State ket**                                           | No change                   | Evolution determined by $V_I$ | Evolution determined by $H$ |
| **Observable**                                          | Evolution determined by $H$ | Evolution determined by $H_0$ | No change                   |
