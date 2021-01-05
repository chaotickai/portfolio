## Question A (40% credit):

In CSS3, how would you select:

  - Every `<a>` element whose `href` attribute value begins with “https”.
  	a[href^="https"]

  - Every `<a>` element whose `href` attribute value ends with “.pdf”.
    a[href$=".pdf"]

  - Every `<a>` element whose `href` attribute value contains the substring “css”.
    a[href*="css"]

## Question B (30% credit):

What is the purpose of the z-index and how is it used? What possible values does the z-index take (e.g. one of those is "auto")?

### Answer:
A z-index property denotes the stack order of an element as long as it is positioned, meaning an element with a higher z-index would be rendered in front of an element with a lower z-index. The z-index can have the values of auto, any number, initial, and inherit.