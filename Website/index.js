console.log('storeUsername function called');

function storeUsername() {
  const username = document.getElementById('username').value;
  document.cookie = `username=${username}; max-age=31536000; path=/`;
}

function storeLocation() {
  const location = document.getElementById('location').value;
  document.cookie = `location=${location}; max-age=31536000; path=/`;
}

const loginForm = document.getElementById('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    storeUsername();
    storeLocation(); 
    window.location.href = 'mainpage.html'; 
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

  const usernameDisplayMain = document.getElementById('username-display-main');

  if (usernameDisplayMain) {
    usernameDisplayMain.innerText = username;
  }

  const locationDisplayMain = document.getElementById('location-display');

  if (locationDisplayMain) {
    locationDisplayMain.innerText = getCookie('location');
  }
});

const profilePics = [
  'https://i.pinimg.com/736x/ce/7a/c3/ce7ac3f6a631fa435b569d16eaa60a49.jpg',
];

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function setRandomProfilePic() {
  const randomIndex = getRandomNumber(profilePics.length);
  const profilePic = profilePics[randomIndex];
  document.cookie = `profile-pic=${profilePic}; max-age=31536000; path=/`;
}

const profilePic = document.getElementById('profile-pic');
const profilePicCookie = getCookie('profile-pic');

if (profilePicCookie && profilePic) {
  profilePic.src = profilePicCookie;
} else {
  setRandomProfilePic();
}

// Helper function to get a cookie by name
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
