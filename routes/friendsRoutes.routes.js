const express = require("express");
const friendsRouter = express.Router();
const friend = require("../controller/friends.controller");

//api declaration
friendsRouter.get("/", friend.getAllFriends);
friendsRouter.get("/:friendId", friend.getFriendsById);
friendsRouter.post("/", friend.addNewFriend);

module.exports = friendsRouter;
