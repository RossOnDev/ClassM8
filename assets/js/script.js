let users;

(async () => {
    const DataGenerator = await import("./utils/DataGenerator.js");
    const RenderModule = await import("./utils/RenderModule.js");

    const dataGenerator = new DataGenerator.default;
    const renderModule = new RenderModule.default;

    users = dataGenerator.getUsers();
    const skills = dataGenerator.getSkillsListFromUsers(users);

    document.getElementById("skills").innerHTML = renderModule.getSkillsListDOM(skills);
    document.getElementById("cards").innerHTML = renderModule.getCardsDOM(users);
})();

async function renderUsersWithSelectedSkills() {
    const DataGenerator = await import("./utils/DataGenerator.js");
    const RenderModule = await import("./utils/RenderModule.js");

    const dataGenerator = DataGenerator.default;
    const renderModule = new RenderModule.default;

    const selectedSkills = getSelectedSkills();

    const usersWithSkills = dataGenerator.getUsersWithSkills(users, selectedSkills);
    const usersForRender = usersWithSkills.size > 0 ? usersWithSkills : users;

    let cardsHTML = renderModule.getCardsDOM(usersForRender);
    selectedSkills.forEach(selectedSkill =>
        cardsHTML = cardsHTML.replaceAll(selectedSkill, "<span class='selected-skill'>" + selectedSkill + "</span>")
    )

    document.getElementById("cards").innerHTML = cardsHTML;
}

function getSelectedSkills()
{
    const checkboxes = document.getElementsByTagName("input");
    const checkedSkills = new Set();

    for (const checkbox of checkboxes)
    {
        if (checkbox.checked)
        {
            checkedSkills.add(checkbox.id);
        }
    }

    return checkedSkills;
}

function toggleMenuBar()
{
    let menuItems = document.getElementById("menu-items");

    if (menuItems.style.left === "0px")
    {
        menuItems.style.left = "-100vw";
    }
    else
    {
        menuItems.style.left = "0"
    }
}

function toggleDropdown()
{
    const dropDrown = document.getElementById("drop-down");
    let content = dropDrown.getElementsByClassName("drop-down-content")[0];

    if (content.style.display === "none" || content.style.display === "")
    {
        content.style.display = "block";
    }
    else
    {
        content.style.display = "none";
    }

}
