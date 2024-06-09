const connection =require('../config/connection');
const {User,Thought}=require('../models');
const {getRandomName, getRandomEmail, getRandomAge, getRandomThought, getRandomReaction} = require("./data.js")

connection.on("error", (error)=>error);

connection.once("open", async ()=>{
    console.log("Connected to database");
    // Delete if exists
    let thoughtCheck =  await connection.db.listCollections({name: "thoughts"}).toArray();
    if(thoughtCheck.length){
        await connection.dropCollection("thoughts");
    }

    let userCheck = await connection.db.listCollections({name: "users"}).toArray();
    if(userCheck.length){
        await connection.dropCollection("users");
    }

    const users = [];
    const thoughts = getRandomThought(14);

    await Thought.collection.insertMany(thoughts);

    const thoughtsData = await Thought.find().exec();
    console.log(thoughtsData);

    const reactions = getRandomReaction(14);
    const emails = getRandomEmail(14);
    const name = getRandomName(14); 



    for (let i = 0; i < 14; i++) {
        // const emails = getRandomEmail(i);
        // const name = getRandomName(i);
        users.push({
            username: name[i],
            email: emails[i],
            age: getRandomAge().age,
            thoughts: [thoughtsData[i]._id],
            reactions: [reactions[i]],
        
        });
    }

    await User.collection.insertMany(users);

    console.table(users);
    console.table(thoughts);
    console.table(reactions);
    console.log("Seed data added 🎉");
    process.exit(0);
});
