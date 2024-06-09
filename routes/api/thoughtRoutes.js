const router = require("express").Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
    } = require("../../controllers/thoughtsCtrl");

// Set up GET all and POST at /api/thoughts
router
    .route("/")
    .get(getAllThoughts)
    .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:thoughtId
router
    .route("/:thoughtId")
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// Set up POST and DELETE at /api/thoughts/:thoughtId/reactions
router
    .route("/:thoughtId/reactions")
    .post(createReaction);

router
    .route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction);

module.exports = router;
