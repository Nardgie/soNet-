const router = require("express").Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
    addReaction,
    removeReaction
    } = require("../../controllers/usersCtrl");

// Set up GET all and POST at /api/users
router
    .route("/")
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:userId
router
    .route("/:userId")
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// Set up POST and DELETE at /api/users/:userId/friends/:friendId
router
    .route("/:userId/friends/:friendId")
    .post(addFriend)
    .delete(removeFriend);

// Set up POST and DELETE at /api/users/:userId/reactions/:reactionId
router
    .route("/:userId/reactions/:reactionId")
    .post(addReaction)
    .delete(removeReaction);

module.exports = router;