const data = require("../model/data.model");
const path = require("path");

function getAllFriends(req, res) {
  res.status(200).json(data.friends);
}
function getFriendImage(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
}
function getFriendsById(req, res) {
  let friendId = Number(req.params.friendId);
  let friend = data.friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(400).json({ error: "Friend doesn't exist!" });
  }
}

function addNewFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Invalid data" });
  }
  let newFriendData = {
    id: data.friends.length,
    name: req.body.name,
  };
  data.friends.push(newFriendData);
  res.status(200).json({ newFriendData, message: "Data added successfully" });
}

module.exports = {
  getAllFriends,
  getFriendsById,
  addNewFriend,
  getFriendImage,
};
