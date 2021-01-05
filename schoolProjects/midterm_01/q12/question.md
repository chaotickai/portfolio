### Please use your own simple words to describe what are cascading rules in CSS. Please keep it short.


### Answer:
The CSS is sorted by importance, if there are conflicts styles will be applied in order of importance of the selectors.

The CSS is sorted by weight (i.e Default browser specifications are weighted the least while inline css is weighted the heighest).

The CSS is sorted by specificity (i.e id first, then class, then basic selector, with each combination of the three being evaluated)

Finally the CSS is sorted by order from top to bottom unless you add !important to the style.