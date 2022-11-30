let users;

(async () => {
    const DataGenerator = await import("./utils/DataGenerator.js");
    const RenderModule = await import("./utils/RenderModule.js");

    const dataGenerator = new DataGenerator.default;
    const renderModule = new RenderModule.default;

    users = dataGenerator.getUsers();
    const skills = dataGenerator.getSkillsListFromUsers(users);

    renderModule.renderSkills(skills);
    renderModule.renderCards(users);
})();

async function renderUsersWithSelectedSkills() {
    const DataGenerator = await import("./utils/DataGenerator.js");
    const RenderModule = await import("./utils/RenderModule.js");

    const dataGenerator = DataGenerator.default;
    const renderModule = new RenderModule.default;

    const usersWithSkills = dataGenerator.getUsersWithSkills(users, getSelectedSkills());
    const usersForRender = usersWithSkills.length > 0 ? usersWithSkills : users;

    renderModule.renderCards(usersForRender);
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


    if(menuItems.style.left === "0px")
    {
        menuItems.style.left = "-100vw";
    }
    else
    {
        menuItems.style.left = "0"
    }
}

