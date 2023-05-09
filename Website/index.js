console.log('storeUsername function called');
function storeUsername() {
	const username = document.getElementById('username').value;
	document.cookie = `username=${username}; max-age=3600; path=/`; // Store the username in a cookie for 1 hour
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
	loginForm.addEventListener('submit', function(event) {
		event.preventDefault(); // Prevent the form from submitting normally
		storeUsername();
		window.location.href = 'mainpage.html'; // Redirect to the main page
	});
}

function getCookie(name) {
	const cookies = document.cookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim();
		if (cookie.startsWith(name + '=')) {
			return cookie.substring(name.length + 1);
		}
	}
	return null;
}

const username = getCookie('username');
if (username) {
    console.log('Username found in cookie:', username);
    const usernameDisplay = document.getElementById('username-display');
    usernameDisplay.innerText = `Welcome, ${username}!`;
}

window.addEventListener('load', function() {
    const username = getCookie('username');
    if (username) {
        const usernameDisplay = document.getElementById('username-display');
        const span = document.createElement('span');
        span.innerText = `${username}`;
        span.classList.add('username');
        usernameDisplay.innerHTML = `Welcome, ${span.outerHTML}`;
    }
});