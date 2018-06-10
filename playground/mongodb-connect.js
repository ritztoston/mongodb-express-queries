//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


/*const user = {name: 'Kim', age: 20};
const {name} = user;*/

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    /*db.collection('Users').insertOne({
        name: "Something to do",
        age: 20,
        location: 'Taloto Dist'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        //console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });*/


    client.close();
});