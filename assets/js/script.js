import DataGenerator from "./utils/DataGenerator.js";

const dataGenerator = new DataGenerator();

const users = dataGenerator.getUsers();
const skills = dataGenerator.getSkillsListFromUsers(users);

let skillHTML = "";
skills.forEach(skill => {
    skillHTML += "<label>" +
                 "    <input type=\"checkbox\">" +
                 "    <span class=\"checkbox\"></span>" +
                 "    <a>"+ skill +"</a>" +
                 "</label>"
})

document.getElementById("skills").innerHTML = skillHTML;

let cardsHTML = "";
users.forEach(user => {
    const fullName = user.firstName + " " + user.lastName;
    const profileUrl = "./profiles/" + user.firstName.toLowerCase() + "_" + user.lastName.toLowerCase() + ".html";

    cardsHTML += "<div class=\"card\" onclick=\"window.location = '" + profileUrl + "'\">\n" +
        "                    <img src=\"assets/img/avatars/avatar.jpg\" alt='Image of "+ fullName +"'>\n" +
        "                    <div class=\"card-desc\">\n" +
        "                        <h6>" + fullName +"</h6>\n" +
        "                        <div class=\"skill-list\">\n";

    user.skills.forEach(skill => {
        cardsHTML += ("<a>" + skill + "</a>")
    })

    cardsHTML += "</div></div></div>";
})
document.getElementById("cards").innerHTML = cardsHTML;
