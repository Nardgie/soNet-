const connection =require('../config/connection');
const {User,Thought}=require('../models');
const {getRandomName, getRandomUser, getRandomThought, getRandomReaction} = require("./data.js")

connection.on("error", (error)=>error);

connection.once("open", async ()=>{
    console.log("Connected to database");
    // Delete if exists
    let thoughtCheck =  await connection.db.listCollections({name: "Thought"}).toArray();
    if(thoughtCheck.length){
        await connection.db.dropCollection("Thought");
    }

    let userCheck = await connection.db.listCollections({name: "User"}).toArray();
    if(userCheck.length){
        await connection.db.dropCollection("User");
    }

    const users = [];
    const thoughts = getRandomThought(14);
    const reactions = getRandomReaction(14);



    for (let i = 0; i < 5; i++) {
    
        users.push(getRandomUser());
    }

    await User.collection.insertMany(users);

    console.table(users);
    console.table(thoughts);
    console.table(reactions);
    console.log("Seed data added 🎉");
    process.exit(0);
});
