// GET POST DELETE PUT controller for users
const User = require('../models/User');
const mongoose = require('mongoose');

module.exports = {
    // GET all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    },

    // GET single user
    async getSingleUser(reg, res) {
        try {
            const user =  await User.findOne({ _id: req.params.userId }).select("-__v");

            if (!user) {
                return res.status(404).json({ message: 'No user found' });
            }

            res.json(user);
    
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    },

    // POST create single user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    },

   // PUT update single user

   async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { new: true }
            );
            res.json(user);

        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
   },

   // DELETE single user

    async deleteUser(req, res) {
          try {
                const user = await User.findOneAndDelete({ _id: req.params.userId });
                res.json(user);

} catch (error) {
    console.error(error.message);
    res.status(500).json(error);
}
},
};
