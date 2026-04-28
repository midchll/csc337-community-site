// NOTE: I made this for injecting two different forms into login.html
// but I kind of just put everything in login.html kind of like how communities.html
// is, in the long run it might be best to have separate html and js but
// like, this is a small project to be fair. What do yall think I just think long
// HTML files are ugly

function toggleCreateAccount() {
    const body = document.getElementsByTagName("body")[0];
    const createAccountForm = document.createElement("div");

    createAccountForm.innerHTML =
    `
    form id="create-account-form">

        <!-- EMAIL -->
        <span class="form-group" id="email-group">
            <label for="email-input">Email</label>
            <input type="email" name="email" id="email-input" placeholder="name@example.com" required>
        </span>
        <!-- NAME -->
         <span class="form-group" id="name-group">
            <label for="name-input">Username</label>
            <input type="text" name="name" id="name-input" required>
        </span>
        <!-- PASSWORD -->
         <span class="form-group" id="password-group">
            <label for="password-input">Username</label>
            <input type="password" name="password" id="password-input" required>
        </span>

    </form>
    `
}