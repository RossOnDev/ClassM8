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