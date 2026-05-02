function $(id) {
    return document.getElementById(id);
}

async function handleLogoutClicked() {
    try {
        const response = await fetch('/auth/logout', {
            method: "POST"
        });
        if (!response.ok) {
            console.log('Error trying to logout, you may not be signed in.');
            return;
        }
        window.location.href = '/login';
    } catch (err) {
        console.log('Server error while logging out:', err);
    }
}

async function handleCommunitiesClicked() {
    window.location.href = "/communitiespage";
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
        if (!response.ok) {
            // No session redirect to login
            window.location.href = "/login";
            return;
        }
        const session = await response.json();
        if (!session.user) {
            // No user logged in, redirect to login
            window.location.href = "/login";
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
        console.log("Error rendering navbar", err);
    }
}

document.addEventListener("DOMContentLoaded", renderNavbar);