import User from "./models/User.js";

const user = new User("Patrick", "Rössler", ["IT", "DB"]);
const user2 = new User("Alexander", "Steiner", ["IT", "Linux"]);


document.getElementById("name").innerText = user.firstName + " " + user.lastName;