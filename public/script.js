const eventContent = document.getElementById("event__content");
const eventParagraph = document.createElement("p");

eventParagraph.textContent = "Meetings are over for the season but will resume in the Spring. Check back for updates on the latest news and events!";



function seasonChange() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const eventContent = document.getElementById("event__content"); // Ensure it's retrieved inside the function

    if (eventContent && (currentMonth < 3 || currentMonth > 9)) {
        eventContent.insertBefore(eventParagraph, eventContent.firstChild);
    }
}

// Ensure the DOM is fully loaded before running the function
document.addEventListener("DOMContentLoaded", seasonChange);


// Gallery //
const photoGallery = document.getElementById('photo--gallery');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
let currentIndex = 0;

const media = [
  // Photos
  { type: 'image', src: 'assets/gallery-img/1.jpg', caption: 'Penny bun mushrooms' },
  { type: 'image', src: 'assets/gallery-img/2.jpg', caption: 'Show and tell' },
  { type: 'image', src: 'assets/gallery-img/3.jpg', caption: 'Chicken of the woods' },
  { type: 'image', src: 'assets/gallery-img/4.jpg', caption: 'Jackpot! Morels!' },
  { type: 'image', src: 'assets/gallery-img/5.jpg', caption: 'Cook-off' },
  { type: 'image', src: 'assets/gallery-img/6.jpg', caption: 'Forey meetup' },
  { type: 'image', src: 'assets/gallery-img/7.jpg', caption: 'Forey' },
  { type: 'image', src: 'assets/gallery-img/8.jpg', caption: 'Shaggy mane mushrooms' },
  { type: 'image', src: 'assets/gallery-img/9.jpg', caption: 'Morels - What a feast!' },
  { type: 'image', src: 'assets/gallery-img/10.jpg', caption: 'Corel mushrooms' },
  { type: 'image', src: 'assets/gallery-img/11.jpg', caption: 'Popular resources' },
  { type: 'image', src: 'assets/gallery-img/12.jpg', caption: 'Forey' },
  { type: 'image', src: 'assets/gallery-img/13.jpg', caption: 'Club meeting' },
  { type: 'image', src: 'assets/gallery-img/14.jpg', caption: 'Monique Slipher, Collections Manager' },
  { type: 'image', src: 'assets/gallery-img/15.jpg', caption: 'Mushroom cookies!' },
  { type: 'image', src: 'assets/gallery-img/16.jpg', caption: 'Foreys bringing us closer' }
]


  function loadMedia() {
    media.forEach((item, i) => {
      if (item.type === 'image') {
        const element = document.createElement('img');
        element.src = item.src;
        element.alt = item.caption;
        element.title = item.caption;
        element.loading = 'lazy';
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        element.setAttribute('aria-label', item.caption);
  
        element.addEventListener('click', () => openLightbox(i));
        photoGallery.appendChild(element);
      }
    });
  }
  
  function openLightbox(index) {
    currentIndex = index;
    renderLightbox(media[index]);
    lightbox.classList.add('show');
  };

  function renderLightbox(item) {
    lightboxContent.innerHTML = '';
  
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption;
    lightboxContent.appendChild(img);
  };
  
  // Close behavior
  document.querySelector('.close').addEventListener('click', () => {
    lightbox.classList.remove('show');
    lightboxContent.innerHTML = '';
  });
  
  document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + media.length) % media.length;
    renderLightbox(media[currentIndex]);
  });
  
  document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % media.length;
    renderLightbox(media[currentIndex]);
  });
  
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('show')) return;
  
    if (e.key === 'Escape') {
      lightbox.classList.remove('show');
      lightboxContent.innerHTML = '';
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % media.length;
      renderLightbox(media[currentIndex]);
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + media.length) % media.length;
      renderLightbox(media[currentIndex]);
    }
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('show');
      lightboxContent.innerHTML = '';
    }
  });
  
  loadMedia();
