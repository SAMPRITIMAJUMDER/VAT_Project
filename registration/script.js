document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    const profileDiv = document.getElementById('profile');
    const profileUsername = document.getElementById('profile-username');
    const logoutButton = document.getElementById('logout');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        profileUsername.textContent = username;
        registrationForm.style.display = 'none';
        profileDiv.style.display = 'block';
    });

    logoutButton.addEventListener('click', function () {
        profileDiv.style.display = 'none';
        registrationForm.style.display = 'block';
    });
});