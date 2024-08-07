

    const mongodb = require ('mongodb')

    const mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

  

    const dbname = "Task5"

    mongoClient.connect(connectionUrl , (error,res) =>{
        if(error){
            return  console.log('error has occured')
        }
        console.log('All Perfect')

        const db = res.db(dbname)

//////////////////////////////////////////////////////////////


        insertOne( Doc , options , callback )

        db.collection('users').insertOne({
            name : 'Reem    ',
            age : 30
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        })

        insertOne( Doc , options , callback )

        db.collection('users').insertOne({
            name : 'Rasha',
            age : 31
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        })

        //////////////////////////////////////////////////////////////
        db.collection ('users').insertMany(
           [ {
                name: 'Ahamed',
                age: 27
            },
            {
                name: 'Rawan',
                age: 27
            },
            {
                name: 'Reem',
                age: 27
            },
            {
                name: 'Tamany',
                age: 27
            },
            {
                name: 'Hossam',
                age: 27
            },
            {
                name: 'Haneen',
                age: 25
            },
            {
                name: 'Moatsam',
                age: 20
            },
            {
                name: 'Wala',
                age: 24
            }
            ,
            {
                name: 'Elham',
                age: 31
            }
            ,
            {
                name: 'Habaa',
                age: 32
            }] , (error,data)=>{
                if(error){
                    console.log('Unable to insert data')
                }
                console.log(data.insertedCount)
            } 
        )
      /////////////////////////////////////////////////////////////////////

      
      db.collection('users').find({age:27}).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })
/////////////////////////////////////////////////////////////////////////////
      db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })
   
  ///////   ///// //////////////////////////////////////////////////////////////////////////////
     
      db.collection('users').find().limit(4).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        const firstOf4=users.map(user=>({
            upadteOne:{
            filter:{_id:user.id},
            update: {
                $set:{name: "Amal" },
                $inc: {age: 4}}}
    }))
    db.collection("users").usersFour(firstOf4)

    .then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

      })
    

    
    ///////////////////////////////////////////////////////////////////

    db.collection('users').updateMany({},{
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})

    ////////////////////////////////////////////////////////////////////


    db.collection('users').deleteMany({age:41})
    .then((data1)=>{console.log(data1.deletedCount)})
   .catch((error)=> {console.log(error)})


  
})

     


