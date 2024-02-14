// ========== Handle introduction ========== //
const intro = document.getElementById('Intro');

// Intro page is visible few seconds when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    intro.classList.add('display-none');
  }, 2000);
})


// ========== Handle light and dark mode buttons ========== //
const darkModeBtn = document.getElementById('Dark');
const lightModeBtn = document.getElementById('Light');
const darkModeBox = document.getElementById('btn-dark');
const lightModeBox = document.getElementById('btn-light');
const canvasDark = document.getElementById('CanvasDark');
const canvasLight = document.getElementById('CanvasLight');

// Switch to dark mode when click on dark mode box
darkModeBtn.addEventListener('click', () => {
  document.body.classList.add('is-dark');

  canvasDark.classList.remove('is_hidden');
  canvasLight.classList.add('is_hidden');

  lightModeBox.classList.remove('is_selected');
  darkModeBox.classList.add('is_selected');
})

// Switch to light mode when click on light mode box
lightModeBtn.addEventListener('click', () => {
  document.body.classList.remove('is-dark');

  canvasLight.classList.remove('is_hidden');
  canvasDark.classList.add('is_hidden');

  darkModeBox.classList.remove('is_selected');
  lightModeBox.classList.add('is_selected');
})


// ========== Handle navigation page ========== //
/**
 * Function to navigate between sections
 * @param {*} _btn link button
 * @param {*} contentId ID of the content to show
 */
const navigateToSection = (_btn, contentId) => {
  const content = document.getElementById(contentId);

  // Hide all sections
  document.querySelectorAll('.page').forEach(section => {
    section.classList.remove('is_visible');
    section.classList.add('is_hidden');
  });

  // Render the content to render
  content.classList.remove('is_hidden');
  content.classList.add('is_visible');
}

/**
 * Function to update dot position
 * @param {*} clickedLink link button
 */
const updateDotPosition = (clickedLink) => {
  // Hide dot on all links
  document.querySelectorAll('.header__nav-link-dot').forEach(dot => {
    dot.classList.add('is_hidden');
  });
  
  // Show dot on clicked link
  const dot = clickedLink.parentElement.querySelector('.header__nav-link-dot');
  dot.classList.remove('is_hidden');
  dot.classList.add('is_visible');
}

// Handle navigation to home page
const homeBtn = document.getElementById('home-link');
homeBtn.addEventListener('click', () => {
  navigateToSection(homeBtn, 'Home');
  updateDotPosition(homeBtn);
});

// Handle navigation to projects page
const projectsBtn = document.getElementById('projects-link');
projectsBtn.addEventListener('click', () => {
  navigateToSection(projectsBtn, 'Projects');
  updateDotPosition(projectsBtn);
});

// Handle navigation to contact page
const contactBtn = document.getElementById('contact-link');
contactBtn.addEventListener('click', () => {
  navigateToSection(contactBtn, 'Contact');
  updateDotPosition(contactBtn);
});

// Handle navigation to FAQ page
const faqBtn = document.getElementById('faq-link');
faqBtn.addEventListener('click', () => {
  navigateToSection(faqBtn, 'FAQ');
  updateDotPosition(faqBtn);
});


// ========== Handle FAQ dropdown ========== //
const faqButtons = document.querySelectorAll('.faq__container-btn');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Select the answer of the button clicked
    const answer = button.parentElement.nextElementSibling;
    
    // Change visibility of the answer
    answer.classList.toggle('is_hidden');
    
    // Change button render depending if the answer is visible or not
    if (answer.classList.contains('is_hidden')) {
      button.textContent = '+';
    } else {
      button.textContent = '-';
    }
  });
});

// Same feature but for responsive
const faqButtonsResp = document.querySelectorAll('.faq__container-btn--responsive');

faqButtonsResp.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button);
    // Select the answer of the button clicked
    const answer = button.parentElement.nextElementSibling;
    console.log(answer)
    
    // Change visibility of the answer
    answer.classList.toggle('is_hidden');
    
    // Change button render depending if the answer is visible or not
    if (answer.classList.contains('is_hidden')) {
      button.textContent = '+';
    } else {
      button.textContent = '-';
    }
  });
});


// ========== Handle copy to clipboard ========== //
const copyEmail = document.querySelector('.contact__email');
const tooltip = document.querySelector('.contact__email-tooltip');

copyEmail.addEventListener('click', () => {
  // Copy email
  navigator.clipboard.writeText('rami.rostom@proton.me');

  // Then show tooltip
  tooltip.classList.add('show');
  setTimeout(() => { tooltip.classList.remove('show'); }, 2000);
})

