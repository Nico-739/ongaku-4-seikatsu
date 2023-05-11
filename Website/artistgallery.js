const main = document.querySelector('#card-container');

// List of artists
const artists = [
  { name: 'Tyler, the Creator', image: '/Website/images/TylerTheCreator.png' },
  { name: 'Kendrick Lamar', image: '/Website/images/KendrickLamar.png' },
  { name: 'XXXTENTACION', image: '/Website/images/XXXTENTACION.png' },
  { name: 'NF', image: '/Website/images/NF.png' },
  { name: 'Lil Peep', image: '/Website/images/LilPeep.png' },
  { name: 'Ski Mask The Slump God', image: '/Website/images/SkiMaskTheSlumpGod.png' },
  { name: '21 Savage', image: '/Website/images/21Savage.png' },
  { name: 'Eminem', image: '/Website/images/Eminem.png' },
  { name: 'SZA', image: '/Website/images/SZA.png' },
  { name: 'The Weeknd', image: '/Website/images/TheWeeknd.png' },
  { name: 'Metro Boomin', image: '/Website/images/MetroBoomin.png' },
  { name: 'Travis Scott', image: '/Website/images/TravisScott.png' },
  { name: 'Yeat', image: '/Website/images/Yeat.png' },
  { name: 'Billie Eilish', image: '/Website/images/BillieEilish.png' },
  { name: 'ASAP Rocky', image: '/Website/images/ASAPRocky.png' }
];

// Create 15 cards
for (let i = 0; i < 15; i++) {
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
  
  main.appendChild(card);
}
