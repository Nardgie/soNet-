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
    }

    //get single thought
                
}