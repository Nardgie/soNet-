const { Thought, User, Reaction } = require('../models');

module.exports = {

    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    },

    //get single thought
    async getSingleThought(req, res) { 
        try {
            //find thought by id ***
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found' });
            }

            res.json(thought);
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    },

    //create thought

    async createThought(req, res) {
        try {
            //create thought ***
            const thought = await Thought.create(req.body);
            //find user by id and push thought id to user thoughts array ***
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'Thought crrated but no user found with this ID' });
            }
            res.json({ message: 'Thought created!' });
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    },

    //PUT(update) single thought
    async updateThought(req, res) {
        try {
            //update thought by id ***
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this ID' });
            }
            res.json(thought);
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    },

    //DELETE single thought

    async deleteThought(req, res) {
        try {
            //delete thought by id ***
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this ID' });
            }
            //find user by id and pull thought id from user thoughts array ***
            const user = await User.findOneAndUpdate(
                { _id: thought.userId },
                { $pull: { thoughts: thought._id } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'Thought deleted but no user found with this ID' });
            }
            res.json({ message: 'Thought deleted!' });
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    },

    //POST(create) reaction
    async createReaction(req, res) {
        try {
            //create reaction ***
            const reaction = await Reaction.create(req.body);
            //find thought by id and push reaction id to thought reactions array ***
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: reaction._id } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'Reaction created but no thought found with this ID' });
            }
            res.json({ message: 'Reaction created!' });
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    },

    //DELETE reaction

    async deleteReaction(req, res) {
        try {
            //delete reaction by id ***
            const reaction = await Reaction.findOneAndDelete({ _id: req.params.reactionId });

            if (!reaction) {
                return res.status(404).json({ message: 'No reaction found with this ID' });
            }
            //find thought by id and pull reaction id from thought reactions array ***
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: reaction._id } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'Reaction deleted but no thought found with this ID' });
            }
            res.json({ message: 'Reaction deleted!' });
        } catch (error) {
            console.error(error.message);
            res.status(500).json(error);
        }
    }


}