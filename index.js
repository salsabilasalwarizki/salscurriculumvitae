    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section, .profile-header').forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('scroll', function() {
      const profileImg = document.querySelector('.profile-img');
      const scrollPosition = window.pageYOffset;
      
      if (profileImg) {
        profileImg.style.transform = `rotate(-3deg) translateY(${scrollPosition * 0.05}px)`;
      }
    });

    document.querySelectorAll('.skill-card').forEach(card => {
      const progressBar = card.querySelector('.progress-bar');
      const skillLevel = card.querySelector('.skill-level');
      
      card.addEventListener('mouseenter', function() {
        const width = parseInt(progressBar.style.width);
        skillLevel.textContent = width + '%';
        skillLevel.style.color = '#fff';
        skillLevel.style.textShadow = '0 2px 4px rgba(0,0,0,0.3)';
      });
      
      card.addEventListener('mouseleave', function() {
        const originalText = skillLevel.textContent.replace('%', '');
        skillLevel.textContent = originalText + '%';
        skillLevel.style.color = '';
        skillLevel.style.textShadow = '';
      });
    });

    document.querySelectorAll('.interest-item').forEach(item => {
      item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 200);
      });
    });

    const bioElement = document.querySelector('.bio');
    if (bioElement) {
      const originalText = bioElement.textContent;
      bioElement.textContent = '';
      
      let i = 0;
      const typeWriter = setInterval(() => {
        if (i < originalText.length) {
          bioElement.textContent += originalText.charAt(i);
          i++;
        } else {
          clearInterval(typeWriter);
        }
      }, 30);
    }
