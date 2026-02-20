---
creation date: 2026-02-09 19:40
modification date: Monday 9th February 2026 19:40:37
publish: true
tags: [Statistics, data-science, PhD, ]
---


## When performing regression to a dataset, what kind of error should be minimized?

There two options: Ordinary least square (OLS) and Weighted least squares (WLS)

>[!tldr] From google search AI summary:
> - Use OLS when your data is consistent and the variance of residuals is constant across all predictors (homoscedastic).
> - Use WLS when the data is heteroscedastic, when using sample statistics (like means) that have unequal variances, or when some observations are known to be more accurate than others. [[1](https://statisticsbyjim.com/regression/weighted-least-squares/), [2](https://www.linkedin.com/posts/henry-edoghogho-0742b5135_ols-vs-wls-which-regression-should-you-use-activity-7396107409947254784-jZWi), [4](https://www.stat.cmu.edu/~larry/=stat401/lecture-24.pdf), [5](https://fiveable.me/linear-modeling-theory-and-applications/unit-4/transformations-weighted-squares/study-guide/rallL4PSJxCfcSRc), [6](https://online.stat.psu.edu/stat501/book/export/html/1086)]
### Google search AI summary - 'difference in linear fitting with least squares and weighted least squares'

The primary difference between linear fitting with Ordinary Least Squares (OLS) and Weighted Least Squares (WLS) is how they handle the variance of errors across data points. OLS treats all observations equally (assuming constant variance), while WLS assigns different weights to each data point based on its variance or reliability, making it ideal for data with non-constant variance (heteroscedasticity). [[1](https://statisticsbyjim.com/regression/weighted-least-squares/), [2](https://www.linkedin.com/posts/henry-edoghogho-0742b5135_ols-vs-wls-which-regression-should-you-use-activity-7396107409947254784-jZWi)]

  

Key Differences at a Glance

|Feature [[1](https://statisticsbyjim.com/regression/weighted-least-squares/), [2](https://www.linkedin.com/posts/henry-edoghogho-0742b5135_ols-vs-wls-which-regression-should-you-use-activity-7396107409947254784-jZWi), [3](https://online.stat.psu.edu/stat501/lesson/13/13.1), [4](https://www.stat.cmu.edu/~larry/=stat401/lecture-24.pdf), [5](https://fiveable.me/linear-modeling-theory-and-applications/unit-4/transformations-weighted-squares/study-guide/rallL4PSJxCfcSRc)]|Ordinary Least Squares (OLS)|Weighted Least Squares (WLS)|
|---|---|---|
|Error Assumption|Homoscedasticity (constant variance).|Heteroscedasticity (non-constant variance).|
|Weighting|All points weighted equally ($w_i = 1$).|Points weighted by $1/\sigma_i^2$ (inverse of variance).|
|Objective|Minimize sum of squared residuals: $\sum(y_i - \hat{y}_i)^2$.|Minimize weighted sum of squared residuals: $\sum w_i(y_i - \hat{y}_i)^2$.|
|Accuracy|Less efficient when variances are not equal.|More efficient; precise points have higher impact.|
|Use Case|General, clean, consistent data.|Data with outliers, grouped data, or changing noise levels.|

  

Detailed Breakdown

- Handling Variance (Heteroscedasticity): OLS assumes that the noise (residuals) is constant across all measurements. When the noise is not constant—such as when smaller values are more precise and larger values are less precise—OLS becomes unreliable. WLS corrects this by giving less weight to high-variance (noisy) points and more weight to low-variance (precise) points.
- Influence on the Line: In OLS, an outlier or a noisy measurement with a high $y$-value can disproportionately pull the regression line away from the true relationship. WLS reduces the weight of these noisy points, resulting in a fit that more accurately reflects the bulk of the data.
- Precision and Efficiency: When data contains points of varying quality, WLS produces more efficient and precise estimates of the regression coefficients than OLS.
- When to Use Which:

- Use OLS when your data is consistent and the variance of residuals is constant across all predictors (homoscedastic).
- Use WLS when the data is heteroscedastic, when using sample statistics (like means) that have unequal variances, or when some observations are known to be more accurate than others. [[1](https://statisticsbyjim.com/regression/weighted-least-squares/), [2](https://www.linkedin.com/posts/henry-edoghogho-0742b5135_ols-vs-wls-which-regression-should-you-use-activity-7396107409947254784-jZWi), [4](https://www.stat.cmu.edu/~larry/=stat401/lecture-24.pdf), [5](https://fiveable.me/linear-modeling-theory-and-applications/unit-4/transformations-weighted-squares/study-guide/rallL4PSJxCfcSRc), [6](https://online.stat.psu.edu/stat501/book/export/html/1086)]

Example of WLS Weights

  

If a data point is the average of 10 observations, it should be given a higher weight than a data point that is the average of only 2 observations, because the former is more precise. If the variance ($Var(y_i)$) of a point is known, the weight is typically defined as the inverse of that variance ($w_i = 1 / Var(y_i)$). [[1](https://statisticsbyjim.com/regression/weighted-least-squares/), [4](https://www.stat.cmu.edu/~larry/=stat401/lecture-24.pdf)]

  
  

_AI responses may include mistakes._

[1] [https://statisticsbyjim.com/regression/weighted-least-squares/](https://statisticsbyjim.com/regression/weighted-least-squares/)

[2] [https://www.linkedin.com/posts/henry-edoghogho-0742b5135_ols-vs-wls-which-regression-should-you-use-activity-7396107409947254784-jZWi](https://www.linkedin.com/posts/henry-edoghogho-0742b5135_ols-vs-wls-which-regression-should-you-use-activity-7396107409947254784-jZWi)

[3] [https://online.stat.psu.edu/stat501/lesson/13/13.1](https://online.stat.psu.edu/stat501/lesson/13/13.1)

[4] [https://www.stat.cmu.edu/~larry/=stat401/lecture-24.pdf](https://www.stat.cmu.edu/~larry/=stat401/lecture-24.pdf)

[5] [https://fiveable.me/linear-modeling-theory-and-applications/unit-4/transformations-weighted-squares/study-guide/rallL4PSJxCfcSRc](https://fiveable.me/linear-modeling-theory-and-applications/unit-4/transformations-weighted-squares/study-guide/rallL4PSJxCfcSRc)

[6] [https://online.stat.psu.edu/stat501/book/export/html/1086](https://online.stat.psu.edu/stat501/book/export/html/1086)



## P value and $R^2$ value

https://rcompanion.org/handbook/G_10.html

### Google search AI summary

P-values and R-squared ($R^2$) are distinct regression metrics: $R^2$ measures the strength of the relationship (proportion of variance explained), while the P-value determines the statistical significance of that relationship. A high $R^2$ shows strong predictive power, while a low P-value ($\leq$ 0.05) indicates the model is better than a null model. [[1](https://medium.com/@faisalshahbaz/relationship-between-r-squared-and-p-value-in-a-regression-2378b1e2e9ce), [2](https://rcompanion.org/handbook/G_10.html), [3](https://www.displayr.com/what-is-r-squared/), [4](https://rstudio-pubs-static.s3.amazonaws.com/411980_85836ec0002244819a77e3f8ad5f20bd.html)]

  

Key Differences and Relationships:

- R-Squared (): Ranges from 0 to 1 (0% to 100%). It explains the proportion of variation in the dependent variable explained by independent variables. A higher value means the model explains more variation.
- P-value: Indicates whether the model's predictive power is likely due to chance. A p-value $\leq$ 0.05 suggests the model is statistically significant, meaning the relationship is likely real.
- Relationship: They do not always correlate. It is possible to have a high $R^2$ with a high p-value (good fit, not significant) or a very low $R^2$ with a low p-value (poor fit, but significant, often with large sample sizes).
- Interpretation: $R^2$ indicates how well the data points fit the line, while the p-value indicates if the slope is significantly different from zero. [[1](https://medium.com/@faisalshahbaz/relationship-between-r-squared-and-p-value-in-a-regression-2378b1e2e9ce), [2](https://rcompanion.org/handbook/G_10.html), [4](https://rstudio-pubs-static.s3.amazonaws.com/411980_85836ec0002244819a77e3f8ad5f20bd.html), [5](https://www.rpubs.com/shubh2565/pvalue-rsquared), [6](https://www.researchgate.net/post/What_is_the_relationship_between_R-squared_and_p-value_in_a_regression/1000), [7](https://www.reddit.com/r/statistics/comments/2sb9gv/eli5_pvalue_vs_rsquared/)]

_Example:_ In a large dataset, a very small, weak relationship (low $R^2$ of 0.05) might still be statistically significant (p &lt; 0.05) because the sample size is large enough to confirm the relationship isn't just noise. [[1](https://medium.com/@faisalshahbaz/relationship-between-r-squared-and-p-value-in-a-regression-2378b1e2e9ce), [2](https://rcompanion.org/handbook/G_10.html), [8](https://www.reddit.com/r/AskStatistics/comments/1havonz/multiple_linear_regression_low_r2_value_but/), [9](https://media.clear.uconn.edu/geospatial/workshops/Python/pythonlecturenotes/12d%20-%20Associations,%20correlations,%20and%20linear%20regression.pdf#:~:text=A%20significant%20p%2Dvalue%20indicates%20that%20the%20slope,too%20weak%20to%20be%20of%20practical%20importance.), [10](https://medium.com/@nivedita.home/understand-p-value-and-confidence-interval-6fcf3e68667b#:~:text=The%20p%2Dvalue%20doesn't%20prove%20the%20null%20hypothesis;,and%20reduces%20the%20influence%20of%20random%20noise.)]

  
  

_AI responses may include mistakes._

[1] [https://medium.com/@faisalshahbaz/relationship-between-r-squared-and-p-value-in-a-regression-2378b1e2e9ce](https://medium.com/@faisalshahbaz/relationship-between-r-squared-and-p-value-in-a-regression-2378b1e2e9ce)

[2] [https://rcompanion.org/handbook/G_10.html](https://rcompanion.org/handbook/G_10.html)

[3] [https://www.displayr.com/what-is-r-squared/](https://www.displayr.com/what-is-r-squared/)

[4] [https://rstudio-pubs-static.s3.amazonaws.com/411980_85836ec0002244819a77e3f8ad5f20bd.html](https://rstudio-pubs-static.s3.amazonaws.com/411980_85836ec0002244819a77e3f8ad5f20bd.html)

[5] [https://www.rpubs.com/shubh2565/pvalue-rsquared](https://www.rpubs.com/shubh2565/pvalue-rsquared)

[6] [https://www.researchgate.net/post/What_is_the_relationship_between_R-squared_and_p-value_in_a_regression/1000](https://www.researchgate.net/post/What_is_the_relationship_between_R-squared_and_p-value_in_a_regression/1000)

[7] [https://www.reddit.com/r/statistics/comments/2sb9gv/eli5_pvalue_vs_rsquared/](https://www.reddit.com/r/statistics/comments/2sb9gv/eli5_pvalue_vs_rsquared/)

[8] [https://www.reddit.com/r/AskStatistics/comments/1havonz/multiple_linear_regression_low_r2_value_but/](https://www.reddit.com/r/AskStatistics/comments/1havonz/multiple_linear_regression_low_r2_value_but/)

[9] [https://media.clear.uconn.edu/geospatial/workshops/Python/pythonlecturenotes/12d%20-%20Associations,%20correlations,%20and%20linear%20regression.pdf](https://media.clear.uconn.edu/geospatial/workshops/Python/pythonlecturenotes/12d%20-%20Associations,%20correlations,%20and%20linear%20regression.pdf#:~:text=A%20significant%20p%2Dvalue%20indicates%20that%20the%20slope,too%20weak%20to%20be%20of%20practical%20importance.)

[10] [https://medium.com/@nivedita.home/understand-p-value-and-confidence-interval-6fcf3e68667b](https://medium.com/@nivedita.home/understand-p-value-and-confidence-interval-6fcf3e68667b#:~:text=The%20p%2Dvalue%20doesn't%20prove%20the%20null%20hypothesis;,and%20reduces%20the%20influence%20of%20random%20noise.)