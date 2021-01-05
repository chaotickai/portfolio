What screen sizes are supported by bootstrap?

### Answer:
xs (for phones - screens less than 768px wide)
sm (for tablets - screens equal to or greater than 768px wide)
md (for small laptops - screens equal to or greater than 992px wide)
lg (for laptops and desktops - screens equal to or greater than 1200px wide)


Please describe what would be the output of the following code snippet on mobile phone and on desktop computer, when using Twitter Bootstrap?  What would you expect to see?

```
    <div class="row">
        <div class="col-xs-12 col-md-3">Ruby Red</div>
        <div class="col-xs-12 col-md-3">Navy Blue</div>
        <div class="col-xs-12 col-md-3">Lime Green</div>
        <div class="col-xs-12 col-md-3">Egg Nog</div>
    </div>
```

### Answer:
On a phone I would expect to see the divs stacked on eachother, while on desktop they would appear side by side.