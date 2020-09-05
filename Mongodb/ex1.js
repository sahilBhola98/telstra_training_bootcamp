//drop all documents of a collection, drop a collection,drop a database

use dummyDB

for(let i = 1;i<=10;i++){
    db.dummy.insertOne({
        productNo : "product "+i,
        review : {
            content : "good",
            authorid : i
        }
    });
}

//dropping documents of colection
db.dummy.remove({});

//dropping a collection
db.dummy.drop()

//dropping database
db.dropDatabase();