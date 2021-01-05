### Which query below finds restaurants whose borough field is equal to "Queens" in MongoDB? 

1. db.restaurants.find({ "borough" = "Queens" })
1. db.restaurants.find({ "borough" : { $eq : "Queens" }})
1. db.restaurants.find({ "borough" == "Queens" })
1. db.restaurants.find({ "borough" : "Queens" })

There may be multiple right answers. Indicating all of the right answers and none of the wrong answers is requested for full credit.

### Answer:

1. db.restaurants.find({ "borough" : "Queens" })
1. db.restaurants.find({ "borough" : { $eq : "Queens" }})

Correct