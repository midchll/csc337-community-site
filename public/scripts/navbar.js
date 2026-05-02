function $(id) {
    return document.getElementById(id);
}

function handleLogoutClicked() {
    try {
        const response = fetch('/auth/logout');
        if (!response.message) {
            console.log('Error trying to logout, you may not be signed in.');
            return;
        }
    } catch (err) { console.log('Server error while logging out:', err); }
}

async function handleCommunitiesClicked() {
    try {
        const response = await fetch('/communities');
        if (!response.ok) {
            console.log('Error trying to get communities page');
            return;
        }
    } catch (err) { console.log('Server error trying to load communities page:', err); }
}

async function handleProfileClicked() {
    // IMPLEMENT
}

async function renderNavbar() {
    const navlinks = $("nav-links")
    if (!navlinks) return;
    navlinks.innerHTML = "";

    try {
        const response = await fetch("/session");
        const session = await response.json();

        if (!response.ok || !session.user) {
            // User not logged in -> redirect to login at root
            window.location.href="/login";
            return;
        }

        const user = session.user; // potentially will use for profile page/name render in navbar

        const communitiesLink = document.createElement("button");
        communitiesLink.innerText = 'Communities';
        communitiesLink.addEventListener("click", handleCommunitiesClicked);

        const logoutLink = document.createElement("button");
        logoutLink.innerText = 'Logout';
        logoutLink.addEventListener("click", handleLogoutClicked);

        const profileLink = document.createElement("button");
        profileLink.innerText = "Profile (WIP)";
        profileLink.addEventListener("click", handleProfileClicked);

        navlinks.appendChild(communitiesLink);
        navlinks.appendChild(logoutLink);
        navlinks.appendChild(profileLink);


    } catch (err) {
        console.err("Error rendering navbar");
    }
}

document.addEventListener("DOMContentLoaded", renderNavbar);