export default class RenderModule {
    constructor() {}

    /**
     * @param skills    {string[] | Set<string>}
     */
    renderSkills(skills) {
        let skillHTML = "";
        skills.forEach(skill => {
            skillHTML += "<label>" +
                "    <input type=\"checkbox\" id='" + skill + "'  onchange='renderUsersWithSelectedSkills()'>" +
                "    <span class=\"checkbox\"></span>" +
                "    <a>"+ skill +"</a>" +
                "</label>"
        })

        document.getElementById("skills").innerHTML = skillHTML;
    }

    /**
     * @param users {User[]}
     */
    renderCards(users) {
        let cardsHTML = "";
        users.forEach(user => {
            const fullName = user.firstName + " " + user.lastName;
            const profileUrl = "./profiles/" + this.convertUmlauts(user.firstName.toLowerCase())
                + "_" + this.convertUmlauts(user.lastName.toLowerCase()) + ".html";

            cardsHTML += "<div class=\"card\" onclick=\"window.location = '" + profileUrl + "'\">\n" +
                "                    <img src='" + user.profilePic  + "' alt='Image of "+ fullName +"'>\n" +
                "                    <div class=\"card-desc\">\n" +
                "                        <h6>" + fullName +"</h6>\n" +
                "                        <div class=\"skill-list\">\n";

            user.skills.forEach(skill => {
                cardsHTML += ("<a>" + skill + "</a>")
            })

            cardsHTML += "</div></div></div>";
        })
        document.getElementById("cards").innerHTML = cardsHTML;
    }

    /**
     * @param word {string}
     */
    convertUmlauts(word)
    {
        word = word.replace("ö", "oe");
        word = word.replace("ä", "ae");
        word = word.replace("ü", "ue");
        word = word.replace("Ü", "Ue");
        word = word.replace("Ö", "Oe");
        word = word.replace("Ä", "Ae");

        return word;
    }
}
