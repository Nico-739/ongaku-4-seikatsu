document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let artistName = document.getElementById('artist-name');
    let artistDescription = document.getElementById('artist-description');
  
    let active = 2;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
  
        // Update artist info based on active index
        switch (active) {
          case 0:
            artistName.innerText = 'Tyler, the Creator';
            artistDescription.innerText = 'Tyler Gregory Okonma, better known as Tyler, the Creator, is an American rapper, musician, songwriter, producer, and music video director. He rose to prominence as the co-founder of the alternative hip hop collective Odd Future and has since released several solo albums. Tyler is known for his unconventional style and creative approach to music and has won several awards for his work.';
            break;              
          case 1:
            artistName.innerText = 'Kendrick Lamar';
            artistDescription.innerText = 'Kendrick Lamar Duckworth is an American rapper, songwriter, and record producer. He first gained major recognition in 2012 with the release of his album "good kid, m.A.A.d city", which received widespread critical acclaim and earned him several Grammy nominations. He has since released several more successful albums and is widely regarded as one of the most important and influential artists of his generation.';
            break;
          case 2:
            artistName.innerText = 'XXXTENTACION';
            artistDescription.innerText = 'Jahseh Dwayne Ricardo Onfroy, known professionally as XXXTentacion, was an American rapper, singer, and songwriter. He gained popularity in the late 2010s with his emo-influenced sound and controversial public persona. He was tragically murdered in 2018 at the age of 20.';
            break;
          case 3:
            artistName.innerText = 'NF';
            artistDescription.innerText = 'Nathan John Feuerstein, known professionally as NF, is an American rapper, singer, and songwriter. He first gained recognition with the release of his album "Mansion" in 2015, and has since released several more successful albums. He is known for his emotionally raw and introspective lyrics, which often deal with themes of mental health and personal struggle.';
            break;
          case 4:
            artistName.innerText = 'Lil peep';
            artistDescription.innerText = 'Gustav Elijah Åhr, known professionally as Lil Peep, was an American rapper, singer, and songwriter. He first gained popularity on SoundCloud with his unique blend of emo and hip hop music, and went on to release several successful albums before his tragic death from a drug overdose in 2017 at the age of 21.';
            break;
          case 5:
            artistName.innerText = 'Ski Mask The Slump God';
            artistDescription.innerText = 'Stokeley Clevon Goulbourne, known professionally as Ski Mask the Slump God, is an American rapper and songwriter. He first gained popularity on SoundCloud and went on to release several successful mixtapes and albums, including "Beware the Book of Eli" and "Stokeley".';
            break;
          case 6:
            artistName.innerText = '21 Savage';
            artistDescription.innerText = 'Shéyaa Bin Abraham-Joseph, known professionally as 21 Savage, is a British-American rapper and songwriter. He gained popularity in 2015 with his mixtape "The Slaughter Tape" and has since released several successful projects, including "Issa Album" and "I Am > I Was".';
            break;
          case 7:
            artistName.innerText = 'Eminem';
            artistDescription.innerText = 'Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer. He is considered one of the greatest and most influential rappers of all time and has sold over 150 million records worldwide. His albums include "The Slim Shady LP", "The Marshall Mathers LP", and "Kamikaze".';
            break;
          case 8:
            artistName.innerText = 'SZA';
            artistDescription.innerText = 'Solána Imani Rowe, known professionally as SZA, is an American singer and songwriter. She gained critical acclaim for her debut studio album "Ctrl", which was nominated for several Grammy Awards. Her other projects include "Z" and "A".';
            break;
          case 9:
            artistName.innerText = 'The Weeknd';
            artistDescription.innerText = 'Abel Makkonen Tesfaye, known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer. He gained popularity with his mixtapes "House of Balloons", "Thursday", and "Echoes of Silence" before releasing his debut studio album "Kiss Land". His other projects include "Starboy" and "After Hours".';
            break;
          case 10:
            artistName.innerText = 'Metro Boomin';
            artistDescription.innerText = 'Leland Tyler Wayne, known professionally as Metro Boomin, is an American record producer, songwriter, and DJ. He has produced numerous chart-topping singles and albums for artists such as Future, Drake, and 21 Savage. His solo projects include "Not All Heroes Wear Capes" and "Without Warning".';
            break;
          case 11:
            artistName.innerText = 'Travis Scott';
            artistDescription.innerText = 'Jacques Berman Webster II, known professionally as Travis Scott, is an American rapper, singer, songwriter, and record producer. He gained popularity with his mixtapes "Owl Pharaoh" and "Days Before Rodeo" before releasing his debut studio album "Rodeo". His other projects include "Astroworld" and "Jackboys".';
            break;
          case 12:
            artistName.innerText = 'Yeat';
            artistDescription.innerText = 'Noah Olivier Smith, known professionally as Yeat, is an American rapper, songwriter, and record producer. He gained popularity in mid-2021 with his debut mixtape "4L" and his debut studio album "Up 2 Me". Yeats music is primarily hip-hop, with influences from trap and drill. He often raps about personal experiences and themes of wealth, success, and romance. Some of his tracks, including "Money So Big" and "Get Busy", went viral on TikTok.';
            break;
          case 13:
            artistName.innerText = 'Billie Eilish';
            artistDescription.innerText = 'Billie Eilish is a singer-songwriter known for her haunting vocals and introspective lyrics. She has won several Grammy Awards and is widely regarded as one of the most influential artists of her generation. Eilish gained popularity in 2015 with her debut single "Ocean Eyes" and went on to release her debut album "When We All Fall Asleep, Where Do We Go?" in 2019, which was a commercial and critical success.';
            break;
          case 14:
            artistName.innerText = 'ASAP Rocky';
            artistDescription.innerText = 'ASAP Rocky is a rapper, songwriter, and record producer. He has released several successful albums and is known for his distinctive flow and style. His real name is Rakim Athelaston Mayers and he started his music career in 2007 with the release of his first mixtape, "Deep Purple". Rocky has collaborated with several other artists, including Rihanna and Drake.';
            break;
        }        
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }
  
    // Add this code to change the active index when a card is clicked
    items.forEach(function(item, index) {
      item.addEventListener('click', function() {
        active = index;
        loadShow();
      });
    });
  
    document.addEventListener('DOMContentLoaded', () => {
        let slider = tns({
          container: '.my-slider',
          items: 1,
          slideBy: 'page',
          autoplay: false,
          controls: false,
          nav: false,
          speed: 400,
          mouseDrag: true,
          lazyload: true,
        });
      
        let cards = document.querySelectorAll('.card');
        let artistDescriptionText = '';
      
        slider.events.on('transitionEnd', (info) => {
          let currentSlide = info.displayIndex - 1;
          let currentArtist = slider.getInfo().slideItems[currentSlide].getAttribute('data-artist');
          let currentCard = document.querySelector(`[data-artist="${currentArtist}"]`);
          artistDescriptionText = currentCard.querySelector('#artist-description').innerText;
        });
      
        cards.forEach(card => {
          let artistName = card.querySelector('#artist-name');
          let artistDescription = card.querySelector('#artist-description');
          card.setAttribute('data-description', artistDescription.innerText);
          
          card.addEventListener('mouseenter', () => {
            artistName.style.display = 'none';
            artistDescription.innerText = artistDescriptionText;
          });
          
          card.addEventListener('mouseleave', () => {
            artistName.style.display = 'block';
            artistDescription.innerText = card.getAttribute('data-description');
          });
        });
      });
    });