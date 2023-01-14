export default class RenderModule {
    constructor() {}

    /**
     * @param skills    {string[] | Set<string>}
     */
    getSkillsListDOM(skills) {
        let skillHTML = "";
        skills.forEach(skill => {
            skillHTML += "<div class='skill'><label>" +
                "    <input type=\"checkbox\" id='" + skill + "' onchange='renderUsersWithSelectedSkills()'>" +
                "    <span class=\"checkbox\"></span>" +
                "    <a>"+ skill +"</a>" +
                "</label></div>"
        })

        return skillHTML;
    }

    /**
     * @param users {User[]}
     */
    getCardsDOM(users) {
        let cardsHTML = "";
        users.forEach(user => {
            const fullName = user.firstName + " " + user.lastName;
            const profileUrl = "./profiles/" + this.convertUmlauts(user.firstName.toLowerCase().replaceAll(" ", "_"))
                + "_" + this.convertUmlauts(user.lastName.toLowerCase().replaceAll(" ", "_")) + ".html";

            cardsHTML +=
                "   <section class=\"card\" onclick=\"window.location = '" + profileUrl + "'\">" +
                "        <img src='" + user.profilePic  + "' alt='Image of "+ fullName +"'>" +
                "            <div class=\"card-desc\">" +
                "                <h6>" + fullName +"</h6>" +
                "                <div class=\"skill-list\">";

            user.skills.forEach(skill => {
                cardsHTML += ("<a>" + skill + "</a>")
            })

            cardsHTML += "</div></div></section>";
        })
        return cardsHTML;
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
