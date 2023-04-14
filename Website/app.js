document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let artistName = document.getElementById('artist-name');
    let artistDescription = document.getElementById('artist-description');
  
    let active = 3;
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
            artistName.innerText = 'Artist 1';
            artistDescription.innerText = 'Hello';
            break;
          case 1:
            artistName.innerText = 'Artist 2';
            artistDescription.innerText = 'Description of Artist 2';
            break;
          case 2:
            artistName.innerText = 'Artist 3';
            artistDescription.innerText = 'Description of Artist 3';
            break;
          case 3:
            artistName.innerText = 'Artist 4';
            artistDescription.innerText = 'Description of Artist 4';
            break;
          case 4:
            artistName.innerText = 'Artist 5';
            artistDescription.innerText = 'Description of Artist 5';
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