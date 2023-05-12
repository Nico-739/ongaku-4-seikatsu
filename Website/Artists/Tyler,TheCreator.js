const mainArtists = document.querySelector('#artists-container');
const mainAlbums = document.querySelector('#albums-container');

// artists
const artists = [  { name: 'Tyler, the Creator', image: '/Website/images/TylerTheCreator.png' }]

// Create artist card
for (let i = 0; i < artists.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');

  const circle1 = document.createElement('div');
  circle1.classList.add('circle');

  const circle2 = document.createElement('div');
  circle2.classList.add('circle');

  const artistImage = document.createElement('img');
  artistImage.src = artists[i % artists.length].image;
  artistImage.alt = artists[i % artists.length].name;

  const artistName = document.createElement('h2');
  artistName.innerText = artists[i % artists.length].name;

  card.appendChild(circle1);
  card.appendChild(circle2);
  card.appendChild(artistImage);
  card.appendChild(artistName);

  mainArtists.appendChild(card);
}

const albums = [
    { 
      name: 'Goblin', 
      image: '/Website/images/goblin.jpg', 
      tracks: ['Goblin', 'Yonkers', 'Radicals', 'She', 'Transylvania', 'Nightmare', 'Tron Cat'] 
    }, 
    { 
      name: 'Wolf', 
      image: '/Website/images/wolf.jpg',  
      tracks: ['Wolf', 'Jamba', 'Cowboy', 'Awkward', 'Domo23', 'Answer'] 
    }, 
    { 
      name: 'Cherry Bomb', 
      image: '/Website/images/cherrybomb.jpg', 
      tracks: ['Deathcamp', 'Buffalo', 'Pilot', 'Run', 'Find Your Wings', 'Smuckers'] 
    }, 
    { 
      name: 'Flower Boy', 
      image: '/Website/images/flowerboy.jpg', 
      tracks: ['Foreword', 'Where This Flower Blooms', 'See You Again', 'Boredom', '911 / Mr. Lonely', 'November', 'Glitter'] 
    }, 
    { 
      name: 'Igor', 
      image: '/Website/images/igor.jpg', 
      tracks: ['Igor\'s Theme', 'Earfquake', 'I Think', 'Running Out of Time', 'New Magic Wand', 'A Boy is a Gun', 'Puppet', 'What\'s Good'] 
    }, 
    { 
      name: 'Call Me If You Get Lost', 
      image: '/Website/images/callmeifugetlost.jpg', 
      tracks: ['Sir Baudelaire', 'Corso', 'Lemonhead', 'Wusyaname', 'Hot Wind Blows', 'Massa', 'Safari', 'Run It Up', 'Manifesto', 'Sweet / I Thought You Wanted to Dance'] 
    }
  ];
  
  // Create album cards
  for (let i = 0; i < albums.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const albumImage = document.createElement('img');
    albumImage.src = albums[i].image;
    albumImage.alt = albums[i].name;
  
    const albumName = document.createElement('h2');
    albumName.innerText = albums[i].name;
  
    const tracklist = document.createElement('ul');
    tracklist.classList.add('tracklist');
    for (let j = 0; j < albums[i].tracks.length; j++) {
      const track = document.createElement('li');
      track.innerText = albums[i].tracks[j];
      tracklist.appendChild(track);
    }
  
    card.appendChild(albumImage);
    card.appendChild(albumName);
    card.appendChild(tracklist);
  
    mainAlbums.appendChild(card);
  }  