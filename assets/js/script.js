import User from "./models/User.js";

const users = [];

const user = new User("Patrick", "Rössler", ["Informatik", "Datenbankdesign", "Softwareentwicklung"]);
const user2 = new User("Alexander", "Steiner", ["Linux", "Mathematik"]);
const user3 = new User("Alexander", "Steiner", ["Informatik", "Linux", "Datenbankdesign"]);

users.push(user);
users.push(user2);
users.push(user3);

function getSkillsListFromUsers(users) {
    const skills = new Set();

    users.forEach(user => {
        user.skills.forEach(skill => skills.add(skill))
    })

    return skills;
}


const skills = getSkillsListFromUsers(users);

let skillHTML = "";
skills.forEach(skill => {
    skillHTML += "<label>" +
                 "    <input type=\"checkbox\">" +
                 "    <span class=\"checkbox\"></span>" +
                 "    <a>"+ skill +"</a>" +
                 "</label>"
})

document.getElementById("skills").innerHTML = skillHTML;
