document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // FALLING LEAF
  const homesection = document.querySelector('#home');
  function createLeaf() {
    const rect = homesection.getBoundingClientRect();

    if(rect.top < window.innerHeight && rect.bottom > 0) {
      const leaf = document.createElement('div');
      leaf.classList.add('leaf');

      // RANDOMIZE EMOJI
      const leafTypes =['🍁', '🌸'];
      leaf.innerHTML = leafTypes[Math.floor(Math.random() * leafTypes.length)];

      // RANDOMIZE HORIZ POSITION
      leaf.style.left = Math.random() * homesection.offsetWidth + 'px';
      // RANDOMIZE ANIMATION DURATION (3-8 SEC)
      leaf.style.animationDuration = 8 + 's';
      // RANDOMIZE SIZE (20-50PX)
      leaf.style.fontSize = 20 + Math.random() * 30 + 'px';

      // APPEND ONLY INSIDE HOME SECTION
      homesection.appendChild(leaf);
      
      // REMOVE LEAF AFTER 10 SECONDS
      setTimeout(() => {
        leaf.remove()
      }, 10000);
    }
  }
  
  function isHomeVisible() {
    const rect = homesection.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0
  }

  // CREATE NEW LEAF EVERY 500MS
  const leafInterval = setInterval(() => {
    if(isHomeVisible()) {
      createLeaf();
    }
  }, 2000);

  window.addEventListener('scroll', () => {
    if(!isHomeVisible()) {
      document.querySelectorAll('.leaf').forEach(leaf => leaf.remove);
    }
  })

  // SKILLS
  const skillsSection = document.querySelector("#skills");
  const skillBars = document.querySelectorAll(".skill-bar-fill");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const level = bar.getAttribute("data-level");
          bar.style.width = level;
        });
        observer.unobserve(skillsSection);
      }
    });
  }, {
    threshold: 0.3
  });
  
  observer.observe(skillsSection);
});
