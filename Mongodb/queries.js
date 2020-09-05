db.shows.find ({
    $or : [
        {genres : "Drama"},
        {genres : "Horror"}
    ]
},{genres:true}
);

db.shows.find ( 
    {
        
            genres :{
                 $not:
             {
                $in : ["Drama" , "Horror"]
            }
        }
    } , { _id : 0 , genres:true}
)

db.shows.find(
    {
        $or : [
            {genres : { $ne : "Drama"}} ,
            {genres : {$ne : "Horror"}}
        ]
    },{_id:0,genres:1}
);

db.shows.find(
    {
        genres : {
            $not : {
                $in : ["Drama","Horror"]
            }
        }
    } , { _id:0,genres:1}
);

db.shows.find({
    webChannel : {
        $exist:true,
        $not : {
            $type:"null"
        }
    }
})

db.shows.find({
    "webChannel.country" : {
        $ne:null
    }
})

db.shows.find({
    $expr : {
        $gt : [
            "$weight",
           { $multiply : ["$rating.average",10]
        }
        ]
    }
});


db.shows.find({
    genres : {
        $all : ["Drama","Horror"]
    }
},{genres:true,_id:false})
db.shows.findOne();


db.shows.find({
    "schedule.days" : {
        $all : ["Moday","Tuesday"]
    }
},{"schedule.days":1,_id:0})

for(let i = 1 ; i <=5 ; i++){
    db.students.insertOne({
        name : "Student "+i,
        scores : [
            {
                subject : "Geography",
                score :Math.floor(Math.random()*100)
            },
            {
                subject : "History",
                score :Math.floor(Math.random()*100)
            },
            {
                subject : "Science",
                score :Math.floor(Math.random()*100)
            }

        ]
    })
}


db.students.find({
    scores : {$elemMatch : {
        subject : "History" , 
    score : {
        $gt : 90 
     }
    }
}
    
}
   
 )


 db.shows.updateOne({
     weight : {$lt : 40},
     "rating.average" : {$gt:7}
 } , {
     $inc : {
         weight : 10
     } , 
     $set : {
         criticsChoice : true
     }
 })

 db.shows.updateMany({
    weight : {
        $gt : 40 ,
        $lt : 60
    },
    "rating.average" : {
        $lt : 7
    }
 } , {
        $max : {
            weight : 50
        }
 })

 db.shows.updateMany({
     weight : {$lt : 50},
     "rating.average" : {$gt : 7}
 } , {
     $mul : {
         weight : NumberDecimal("1.33333")
     }
 })

 db.show.upadteOne({
     name : {
         $exists : false
     },
     language : "English"
 },{
     $set : {
         "rating.average" : 8,
         genres : ["Drama" , "Horror"]
     },
 },{
    $upsert : true
});


db.shows.updateMany({
    "schedule.days" : "Monday"
} , {
    $set:{
        "schedule.days.$":"monday"
    }
});

db.shows.updateMany({
    genres : "Horror"
} , {
    $push : {
        genres : "DArk"
    }
})

db.shows.updateMany({
    genres : "Horror"
},{
    $push :{
        genres : {
            $each : ["Abc" , "Xyz"] 
        }
    }
   
});

db.shows.aggregate([
    {
        $project:{
            name:"$name",
            networkName : {
                $concat:["$network.name" , "(" ,"$network.country.code",")"]
                 
            },
            schedule : "$schedule.day",
            runtime : "$runtime"
        }
    } 
  ]
)