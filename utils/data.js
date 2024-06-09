// names of abbot elementary characters
const names = [
    'Abbot',
    'Baker',
    'Charlie',
    'David',
    'Edward',
    'Frank',
    'George',
    'Henry',
    'Ida',
    'John',
    'King',
    'Lincoln',
    'Mary',
    'Nora',
]
// ages over 18
const ages = [
    52,
    45,
    38,
    31,
    24,
    18,
    27,
    53,
    46,
    39,
    32,
    25,
    19,
    28,

]

const emails = [
  "abbot@email.com",
  "baker@email.com",
  "charlie@email.com",
  "david@email.com",
  "edward@email.com",
  "frank@email.com",
  "george@email.com",
  "henry@email.com",
  "ida@email.com",
  "john@email.com",
  "king@email.com",
  "lincoln@email.com",
  "mary@email.com",
  "nora@email.com",
];

const thoughts = [
    "I love the rain!",
    "I love the snow!",
    "I love the sunshine!",
    "I love the clouds!",
    "I love the wind!",
    "I love the heat!",
    "I love the cold!",
    "I love the beach!",
    "I love the mountains!",
    "I love the desert!",
    "I love the forest!",
    "I love the city!",
    "I love the country!",
    "I love the ocean!",
    ];


const reactions = [
    "Hey! I love that too!",
    "I don't like that.",
    "Have you been there?",
    "I want to go there!",
    "I like that!",
    "Hate that!",
]

const users = []

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    const name = getRandomArrItem(names);
    results.push(name);
  }
    return results;
    };

  
  // generate random thought to add to database
  const getRandomThought = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      const thought = {
        thoughtText: getRandomArrItem(thoughts),
        reactions: [...getRandomReaction(3)],
        createdAt: new Date(),
      };
      results.push(thought);
    }
    return results
  };

// generate random reaction to add to thought
const getRandomReaction = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      const reaction = {
        reactionBody: getRandomArrItem(reactions),
        username: getRandomName(),
        createdAt: new Date(),
      };
      results.push(reaction);
    }
    return results; 
  };

  const getRandomEmail = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      const email = emails[i]
      results.push(email);
    }
    return results;

  };    

  const getRandomAge = () => {
    const age = {
      age: getRandomArrItem(ages),
    };
    return age;
  };


// generate random user to add to database
// const getRandomUser = () => {
//     const user = {
//       username: getRandomName(),
//       email: getRandomArrItem(emails),
//       age: getRandomArrItem(ages),
//     };
//     return user;
//   };

module.exports = { getRandomName, getRandomEmail, getRandomAge, getRandomThought, getRandomReaction };
