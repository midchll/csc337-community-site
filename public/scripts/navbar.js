function $(id) {
    return document.getElementById(id);
}

async function renderNavbar() {
    const navlinks = $("nav-links")
    if (!navlinks) return;
    navlinks.innerHTML = "";

    try {
        const response = await fetch("/session");
        if (!response.user || !response.ok) {
            // User not logged in -> redirect to login at root
            window.location.href="/login";
            return;
        }

        const session = await response.json()
        const user = session.user;

        const links = [];
        links.push({ label: "Communities", action: "/communitiespage" });
        links.push({ label: "Logout", action: "/logout" });

        links.forEach((link) => {
           const navItem = document.createElement("div");
           navItem.innerHTML = `<button data-btn="${link.label}">${link.label}</button>`
           navItem.addEventListener("click", () => {
            try {
                const response = fetch(link.action);
                if (link.action === "/logout") window.location.href = "/";
            } catch (err) { console.log(err) }
           });
           navlinks.appendChild(navItem);
        });
    } catch (err) {
        console.error("Failed to load nav:", err);
    }
}

document.addEventListener("DOMContentLoaded", renderNavbar);