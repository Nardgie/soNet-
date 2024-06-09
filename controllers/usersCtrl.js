// GET POST DELETE PUT controller for users
const User = require('../models/User');

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
    async getSingleUser(req, res) {
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

    // POST to add friend to user's friend list
    async addFriend(req, res) {
        try {

            const friend = await User.findOneAndUpdate({ _id: req.params.userId }, { $push: { friends: req.params.friendId } }, { new: true });

            if (!friend) {
                return res.status(404).json({ message: 'No friend found with this ID' });
            }

            const user = await User.findOneAndUpdate({ _id: req.params.friendId }, { $push: { friends: req.params.userId } }, { new: true });

            if (!user) {
                return res.status(404).json({ message: 'No user found with this ID' });
            }
            res.json(user);

         } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    },

    // DELETE to remove friend from user's friend list
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true });
            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    },

    // POST add reaction to user's thought

    async addReaction(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $push: { reactions: req.body } }, { new: true });    
            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        } 
    },

    // DELETE remove reaction from user's thought

    async removeReaction(req, res) {
        try {
            const user  = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    }









};
