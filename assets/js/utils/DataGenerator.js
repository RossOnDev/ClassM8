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
                ["Software Development", "Linux", "Webtechnologien", "Netzwerktechnik", "Datenbankdesign"],
                "patrick.roessler@edu.fh-joanneum.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Hannah Pernilla",
                "Offermann",
                ["Datenbankdesign", "Software Development"],
                "patrick.roessler@edu.fh-joanneum.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Alaa",
                "Abou El Fadl",
                ["Grafik"],
                "alaa.abouelfadl@edu.fh-joanneum.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Ivan",
                "Stipanovic",
                ["Mathematik", "Geschichte"],
                "ivan.stipanovic@edu.fh-joanneum.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Gabriel",
                "Ostermann",
                ["Datenbankdesign", "Netzwerktechnik", "Software Development", "Webtechnologien", "3D-Modelierung"],
                "gabriel.ostermann@edu.fh-joanneum.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Helena",
                "Zecevic",
                ["Webtechnologien", "Grafik"],
                "helena.zecevic@edu.fh-joanneum.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Selina",
                "Vielhaber",
                ["Informatik", "Linux", "Mathematik", "Software Development", "Datenbankdesign"],
                "helena.zecevic@edu.fh-joanneum.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Parisa",
                "Fayaz Gharehbolagh",
                [],
                "parisa.fayazgharehbolagh@edu.fh-joanneum.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "David",
                "Kitting-Muhr",
                ["Datenbankdesign", "Software Development"],
                "david.kitting-muhr@edu.fh-joanneum.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Alexander",
                "Steiner",
                ["Linux", "Software Development", "Webtechnologien"],
                "alexander.steiner1@edu.fh-joanneum.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Balazs",
                "Spaczay",
                ["Grafik", "Adobe"],
                "balazs.spaczay@edu.fh-joanneum.at",
                "assets/img/avatars/pp_dummy.svg"
            ),
            new User(
                "Ovdii",
                "Pinalov",
                ["Linux", "Software Development", "Webtechnologien", "3D-Modelierung"],
                "ovdii.pinalov@edu.fh-joanneum.at",
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