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
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Alexander",
                "Steiner",
                ["Linux", "Webtechnologien", "Datenbankdesign"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Selina",
                "Vielhaber",
                ["Software Entwicklung", "Linux", "Webtechnologien", "Mathematik"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Patrick",
                "Rössler",
                ["Software Entwicklung", "Linux", "Webtechnologien"],
                "patrick@roessler.at",
                "assets/img/avatars/pp_dummy.svg"
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

    /**
     * @param users {User[]}
     * @param skills {string[] | Set<string>}
     */
    static getUsersWithSkills(users, skills) {
        const usersWithSkills = []

        users.forEach(user => {
            skills.forEach(skill => {
                if (user.skills.includes(skill))
                {
                    usersWithSkills.push(user);
                }
            })
        })

        return usersWithSkills;
    }
}