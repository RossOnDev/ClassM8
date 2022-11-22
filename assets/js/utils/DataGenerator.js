import User from "../models/User.js";

/**
 *  @Author Patirck Rössler
 *  The DataGenerator class is a collection of function to return useful or test data.
 */
export default class DataGenerator {
    constructor() {}

    /**
     * Returns a set of users, which provided their data for the project
     * @return  {User[]}
     */
   getUsers() {
        const users = [];
        users.push(
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Alexander",
                "Steiner",
                ["Linux", "Webtechnologien", "Datenbankdesign"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Selina",
                "Vielhaber",
                ["Software Entwicklung", "Linux", "Webtechnologien", "Mathematik"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/avatar.jpg"
            ),
        );
        return users;
    }

    /**
     * Collect all skills from all users and return a set with all skills
     * @param users     {User[]}
     * @return          {Set<string>}
     */
    getSkillsListFromUsers(users) {
        const skills = new Set();

        users.forEach(user => {
            user.skills.forEach(skill => skills.add(skill))
        })

        return skills;
    }
}