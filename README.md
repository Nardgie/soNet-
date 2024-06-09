# SoNet

## Description
A Social Network api that uses a NoSQL database

SoNet is a robust API designed for a social network that require the flexibility and scalability provided by a NoSQL database like MongoDB. This project was created to support a social media startup's need to handle large amounts of unstructured data efficiently. By utilizing MongoDB, SoNet can manage dynamic data models, which is crucial for the rapidly evolving social media data involving users, thoughts, reactions, and friendships. Developing this API provided deep insights into handling large datasets with high performance and introduced advanced data modeling techniques with MongoDB and Mongoose.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Follow these steps to set up the Sonet API on your local machine:

1. Ensure MongoDB is installed on your machine. Follow the [MongoDB installation guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) if you haven't installed it yet.
2. Clone the repository to your development environment.
3. Navigate to the project directory and run:

`npm i` to install all of the necessary dependencies.

4. Run `npm run seed` to seed the database

5. Start the application by running:

 `npm run start`. 


## Usage

SoNet is designed to be interacted with via API testing tools such as Insomnia or Postman. Below are the steps to test the API:

1. Use the `GET` routes to fetch all users and thoughts:
- `GET /api/users`
- `GET /api/thoughts`

2. Test user functionalities with `POST`, `PUT`, and `DELETE` routes:
- Create, update, and delete users and thoughts and manage their friend lists.

3. Engage with thoughts and reactions:
- Post new thoughts, update them, or delete them.
- Add or remove reactions to thoughts.

### Demonstrations

Here is a video demonstration testing the various routes with routes labeled in video. 

[Demo-link](https://go.screenpal.com/watch/cZ1i2VVNT7x)


## Credits

This project was developed by me, Nardgelen Jean Francois

This project uses the following open source packages:

- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node.js](https://nodejs.org/)

Special thanks to UCF Coding Bootcamps for their guidence and support. 

## License

MIT License

Copyright (c) 2024 Nardgelen Jean Francois

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



______________________________________________________________________________


## Features

- **Dynamic Data Modeling**: Utilizes MongoDB for flexible data structures.
- **CRUD Operations**: Full suite of CRUD operations for managing users, thoughts, and reactions.


## How to Contribute

Interested in contributing? Great! Here's how you can help:

1. Fork the repo.








