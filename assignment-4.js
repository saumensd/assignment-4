function perfectFriend(friendName) {
    let largest = friendName[0];
    for (let i = 0; i < friendName.length; i++) {
        if (friendName[i].length == 5) {
            largest = friendName[i];
        }
    }
    return largest;
}

const friend = ["lipi", "Mahfuj", "moti", "faysal", "tamim", "tamijina", "mosfiq", "sakiib"];
const nameBoroFriend = perfectFriend(friend);
console.log(nameBoroFriend);






