---
date: 2025-05-31
tags:
  - statistical-mechanics
  - Statistics
publish: true
---
###### References:
- Our lord and saviour David Tong's notes: [[Stochastic Processes.pdf]]
- A good text on application of Langevin dynamics and computer simulations: [[Pastor - 1994 - Techniques and Applications of Langevin Dynamics Simulations.pdf]]

## Time dependent correlation functions:
---
![[2025-05-29#Stochastic process]]

### Essence of time correlation functions:
The essence of correlation function is that it tells how much of a quantity/property/system/etc. $A$ at a given time $t$ are affected by the value of that quantity at an earlier time $t'$.
	This essence is captured by the way correlation function is defined. To see how much the quantity $A$ *is correlated over time at two different timesteps* $t$ and $t'$, the correlation function:


$$
C_{AA}(t-t') = \langle A(t) A(t') \rangle
$$

For physical quantities such as velocity of a gas molecule in an open system, it would make sense that the correlation at two different timesteps would be larger if timesteps are close to each other ($t-t'\ll0)$ (<span style="color:rgb(255, 0, 0)">Not sure what's the physical significance of the value of correlation function for</span> $\tau = 0$ <span style="color:rgb(255, 0, 0)">being equal to the mean square value</span> $\langle A^2 \rangle$), and over bigger time difference, the correlation is less, and it tends to zero as the time goes on ($t$ get's bigger compared to $t'$):
	

$$
C_{AA} \to 0, \text{ for } t-t' \gg 0
$$
	 
This is exactly the point of correlation and the math in [[22.05__Time-Correlation_Functions.pdf#page=1]] is just the formal proof of these statements.
### Key takeaway from [[Stochastic Processes.pdf#page=3]]:

- Noise ($\vec{f}(t)$) is uncorrelated $\implies$ $\langle f_{i}(t)f_{j}(t') \rangle = 0$ ($\forall \text{ }t'-t \gg \tau _{col}$, the direction of the force)