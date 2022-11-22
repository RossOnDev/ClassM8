/**
 * @Author Patrick Rössler
 */
export default class User {
    /**
     * @param firstName     {string}
     * @param lastName      {string}
     * @param skills        {string[]}
     * @param email         {string}
     * @param profilePic    {string} Absolute path to file in /assets/img/avatars/..
     */
    constructor(firstName, lastName, skills, email, profilePic) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.skills = skills;
        this.email = email;
        this.profilePic = profilePic;
    }
}