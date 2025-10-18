document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // const menuIcon = document.getElementById('menu');
  // const navLinks = document.querySelector('nav');

  // menuIcon.addEventListener('click', () => {
  //   navLinks.classList.toggle('nav-active');
  // })

  // FALLING LEAF
  function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    // Choose randomly between 2 kinds of leaves
    const leafTypes = ['🍂', '🍁', '🌸']; // you can replace with <img src="leaf1.png">, etc.
    leaf.innerHTML = leafTypes[Math.floor(Math.random() * leafTypes.length)];
    
    // Randomize position, size, and duration
    leaf.style.left = Math.random() * window.innerWidth + 'px';
    leaf.style.animationDuration = 3 + Math.random() * 5 + 's';
    leaf.style.fontSize = 20 + Math.random() * 30 + 'px';
    
    document.body.appendChild(leaf);
    
    // Remove leaf after animation ends
    setTimeout(() => {
      leaf.remove();
    }, 10000);
  }

  // Keep generating leaves
  setInterval(createLeaf, 500);


  // SKILLS
  const skillsSection = document.querySelector("#skills");
  const skillBars = document.querySelectorAll(".skill-bar-fill");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the skills section is on screen
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          // Get the skill level from the data-level attribute
          const level = bar.getAttribute("data-level");
          // Set the width to trigger the CSS transition
          bar.style.width = level;
        });
        // Stop observing once the animation has been triggered
        observer.unobserve(skillsSection);
      }
    });
  }, {
    threshold: 0.3 // Trigger when 30% of the section is visible
  });
  
  // Start observing the skills section
  observer.observe(skillsSection);
});