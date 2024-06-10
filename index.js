/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
/* Add this to your existing JavaScript */
window.addEventListener('scroll', () => {
  const researchItems = document.querySelectorAll('.research__item');
  
  researchItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
    
    if (isVisible) {
      item.classList.add('visible');
    }
  });
});


// Add an event listener to handle the fade-in and scale-up effect for achievements
window.addEventListener('scroll', () => {
  const achievementItems = document.querySelectorAll('.achievement__item');
  
  achievementItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
    
    if (isVisible) {
      item.classList.add('visible');
    }
  });
});
/* Add this to your existing JavaScript */
window.addEventListener('scroll', () => {
  const curricularItems = document.querySelectorAll('.curricular__item');
  
  curricularItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
    
    if (isVisible) {
      item.classList.add('visible');
    }
  });
});
// Add an event listener to handle the right-to-left effect for work items
window.addEventListener('scroll', () => {
  const workItems = document.querySelectorAll('.work__item');
  
  workItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
    
    if (isVisible) {
      item.classList.add('visible');
    }
  });
});
// Function to handle adding 'visible' class to education section items
const handleScrollEducationSection = () => {
  const educationItems = document.querySelectorAll('.education__item');

  educationItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);

      if (isVisible) {
          item.classList.add('visible');
      }
  });
};

// Add an event listener to handle the scroll event
window.addEventListener('scroll', handleScrollEducationSection);

// Function to handle adding 'visible' class to about section elements
const handleScrollAboutSection = () => {
  const aboutPhoto = document.querySelector('.about__photo-container');
  const aboutText = document.querySelector('.about__text');

  const rectPhoto = aboutPhoto.getBoundingClientRect();
  const rectText = aboutText.getBoundingClientRect();

  const isVisiblePhoto = (rectPhoto.top <= window.innerHeight && rectPhoto.bottom >= 0);
  const isVisibleText = (rectText.top <= window.innerHeight && rectText.bottom >= 0);

  if (isVisiblePhoto) {
      aboutPhoto.classList.add('visible');
  }

  if (isVisibleText) {
      aboutText.classList.add('visible');
  }
};

// Add an event listener to handle the scroll event
window.addEventListener('scroll', handleScrollAboutSection);


document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');

  window.addEventListener('load', () => {
      loadingScreen.style.display = 'none';
      mainContent.style.display = 'block';
  });
});



