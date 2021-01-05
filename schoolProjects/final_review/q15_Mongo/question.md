# MongoDB related questions. 

For testing these questions you may use your local mongo instance (remember to run it with the command `mongod`),
or use the class server. 

To access the class server, you may run the command
<pre>
    mongo --host pgdb.accsoftwarebootcamp.com
        --port 27017 
        --authenticationDatabase "acc"
        -u accMongoUser 
        -p acc_rocks_2020 

    use INSERT_YOUR_FIRST_NAME_AS_DB_NAME_HERE
</pre>


Or access the database using your Robo3T client using the following settings (all other settings are default):

<img src="images/mongodb_connect.png" width="400px">
<img src="images/mongodb_connect_2.png" width="400px">


## Question A:

Suppose you run the following code on a MongoDB database

    use INSERT_YOUR_FIRST_NAME_AS_DB_NAME_HERE
    db.animals.insert( { type : ['dog', 'cat'] } );
    db.animals.insert( { type :  ['cat'] } );
    db.animals.insert( { type : ['cow'] } );
    db.animals.insert( { egg: ['duck', 'hen', 'ostrich']  } );

On the data written above, write a mongo query that would return unique 
values of each of the keys
	- type, 
        db.animals.find({type:{$exists:true}})
    - egg, 
        db.animals.find({egg:{$exists:true}})
    - hello // non existent
        db.animals.find({hello:{$exists:true}})


## Question B:

In the above database, how would you count the number of mongo documents which contain a type "cat".

### Answer: 
db.animals.find({type: 'cat'}).count()

